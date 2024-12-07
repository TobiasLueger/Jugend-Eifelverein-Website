import * as Phaser from 'phaser';
import { GameData } from './GameData';
import gameStartScreen from "../../../../src/images/game/gameStartScreen.png";
import playerChoiceSprite from "../../../../src/images/game/playerChoiceSprite.png";

export class CharacterSelectScene extends Phaser.Scene {
  private characters: Phaser.GameObjects.Sprite[] = [];
  private currentIndex: number = 0;
  private selectedCharacter: number | null = null;
  private characterFrames: number = 0;
  private titleText?: Phaser.GameObjects.Text;
  private confirmButton?: Phaser.GameObjects.Container;
  private onCharacterSelected?: (index: number) => void;
  private characterName?: Phaser.GameObjects.Text;
  private leftArrow?: Phaser.GameObjects.Container;
  private rightArrow?: Phaser.GameObjects.Container;
  private music?: Phaser.Sound.BaseSound;
  private forestSound?: Phaser.Sound.BaseSound;
  private backgroundMusic?: Phaser.Sound.BaseSound;
  private isMusicEnabled: boolean = false;

  // Sprite sheet constants
  private readonly SPRITE_WIDTH = 666.6666666667;
  private readonly SPRITE_HEIGHT = 1000;
  private readonly DISPLAY_SCALE = 0.5;
  private readonly COLUMNS = 6;
  private readonly ROWS = 4;
  private readonly TOTAL_FRAMES = this.COLUMNS * this.ROWS;

  constructor() {
    super({ key: 'CharacterSelectScene' });
  }

  init(data: GameData) {
    this.isMusicEnabled = data.isMusicEnabled;
    this.forestSound = data.forestSound;
    this.backgroundMusic = data.backgroundMusic;
  }

  preload() {
    this.load.spritesheet('characters', playerChoiceSprite, {
      frameWidth: Math.floor(this.SPRITE_WIDTH),
      frameHeight: this.SPRITE_HEIGHT,
      spacing: 0,
      margin: 0,
      frameSpacing: { x: 0, y: 0 },
      startFrame: 0,
      endFrame: this.TOTAL_FRAMES - 1
    });
    this.load.image('gameStartScreen', gameStartScreen);
  }

  create() {
    // Back button
    const backButton = this.add.text(20, 20, '← Zurück', {
      fontSize: '24px',
      color: '#ffffff',
    })
    .setInteractive()
    .on('pointerdown', () => {
      const gameData: GameData = {
        isMusicEnabled: this.isMusicEnabled,
        forestSound: this.forestSound,
        backgroundMusic: this.backgroundMusic
      };
      this.scene.start('StartScene', gameData);
    })
    .on('pointerover', () => backButton.setScale(1.1))
    .on('pointerout', () => backButton.setScale(1));

    // Add background
    const bg = this.add.image(0, 0, 'gameStartScreen')
      .setOrigin(0)
      .setDisplaySize(this.scale.width, this.scale.height)
      .setAlpha(0.3);

    // Handle resize
    this.scale.on('resize', (gameSize: Phaser.Structs.Size) => {
      bg.setDisplaySize(gameSize.width, gameSize.height);
      this.cameras.main.centerOn(gameSize.width / 2, gameSize.height / 2);
      
      // Update positions of UI elements
      if (this.titleText) {
        this.titleText.setPosition(gameSize.width / 2, gameSize.height * 0.1);
      }
      if (this.characters[0]) {
        this.characters[0].setPosition(gameSize.width / 2, gameSize.height / 2);
      }
      if (this.characterName) {
        this.characterName.setPosition(gameSize.width / 2, gameSize.height * 0.8);
      }
      if (this.leftArrow) {
        this.leftArrow.setPosition(gameSize.width * 0.2, gameSize.height / 2);
      }
      if (this.rightArrow) {
        this.rightArrow.setPosition(gameSize.width * 0.8, gameSize.height / 2);
      }
    });

    // Add title
    this.titleText = this.add.text(
      this.scale.width / 2,
      this.scale.height * 0.1,
      'Wähle deinen Charakter',
      {
        fontSize: '32px',
        color: '#ffffff',
      }
    ).setOrigin(0.5);

    // Create single character display
    const character = this.add.sprite(
      this.scale.width / 2,
      this.scale.height / 2,
      'characters'
    )
    .setScale(this.DISPLAY_SCALE)
    .setFrame(0);
    
    this.characters = [character];

    // Add character name
    this.characterName = this.add.text(
      this.scale.width / 2,
      this.scale.height * 0.8,
      this.getCharacterName(0),
      {
        fontSize: '24px',
        color: '#ffffff',
      }
    ).setOrigin(0.5);

    // Create arrow buttons
    this.createArrowButtons();

    // Create confirm button
    this.createConfirmButton();

    // Add music toggle
    const musicButton = this.add.text(
      this.scale.width - 20,
      20,
      this.isMusicEnabled ? '🔊' : '🔇',
      {
        fontSize: '24px',
        color: '#ffffff',
      }
    )
    .setOrigin(1, 0)
    .setInteractive()
    .on('pointerdown', () => {
      this.isMusicEnabled = !this.isMusicEnabled;
      musicButton.setText(this.isMusicEnabled ? '🔊' : '🔇');
      if (this.forestSound) {
        this.forestSound.setMute(!this.isMusicEnabled);
      }
      if (this.backgroundMusic) {
        this.backgroundMusic.setMute(!this.isMusicEnabled);
      }
    })
    .on('pointerover', () => musicButton.setScale(1.1))
    .on('pointerout', () => musicButton.setScale(1));
  }

  private changeCharacter(direction: number) {
    // Calculate new index with wrapping
    const nextIndex = (this.currentIndex + direction + this.TOTAL_FRAMES) % this.TOTAL_FRAMES;
    
    // Create slide animation
    this.tweens.add({
      targets: this.characters[0],
      x: {
        from: this.scale.width / 2 + (direction * -50),
        to: this.scale.width / 2
      },
      alpha: { from: 0.8, to: 1 },
      scale: { from: this.DISPLAY_SCALE * 0.9, to: this.DISPLAY_SCALE },
      duration: 200,
      ease: 'Power2',
      onStart: () => {
        // Update the sprite frame
        const frame = nextIndex;
        try {
          this.characters[0].setFrame(frame);
        } catch (error) {
          console.error('Failed to set frame:', frame, error);
        }
      }
    });
    
    // Update current index
    this.currentIndex = nextIndex;
    
    // Update character name with fade
    if (this.characterName) {
      this.tweens.add({
        targets: this.characterName,
        alpha: { from: 0, to: 1 },
        duration: 200,
        onStart: () => {
          this.characterName?.setText(this.getCharacterName(nextIndex));
        }
      });
    }
  }

  private createArrowButtons() {
    // Left arrow
    const leftArrow = this.createArrowButton(
      this.scale.width * 0.2,
      this.scale.height / 2,
      '←',
      () => this.changeCharacter(-1)
    );
    this.leftArrow = leftArrow;

    // Right arrow
    const rightArrow = this.createArrowButton(
      this.scale.width * 0.8,
      this.scale.height / 2,
      '→',
      () => this.changeCharacter(1)
    );
    this.rightArrow = rightArrow;
  }

  private createArrowButton(x: number, y: number, symbol: string, onClick: () => void) {
    const container = this.add.container(x, y);
    
    const circle = this.add.circle(0, 0, 30, 0x4ade80);
    const text = this.add.text(0, 0, symbol, {
      fontSize: '32px',
      color: '#ffffff'
    }).setOrigin(0.5);

    container.add([circle, text]);
    container.setSize(60, 60);
    container.setInteractive()
      .on('pointerdown', onClick)
      .on('pointerover', () => container.setScale(1.1))
      .on('pointerout', () => container.setScale(1));

    return container;
  }

  private createButton(x: number, y: number, text: string, onClick: () => void) {
    const button = this.add.text(x, y, text, {
      fontSize: '32px',
      color: '#ffffff',
      backgroundColor: '#4ade80',
      padding: { x: 20, y: 10 },
    })
    .setOrigin(0.5)
    .setInteractive()
    .on('pointerdown', onClick)
    .on('pointerover', () => button.setScale(1.1))
    .on('pointerout', () => button.setScale(1));

    return button;
  }

  private createConfirmButton() {
    this.confirmButton = this.createButton(
      this.scale.width / 2,
      this.scale.height * 0.9,
      'Auswählen',
      () => {
        const gameData = {
          isMusicEnabled: this.isMusicEnabled,
          forestSound: this.forestSound,
          backgroundMusic: this.backgroundMusic,
          selectedCharacter: this.currentIndex
        };
        this.scene.start('GameScene', gameData);
      }
    );
  }

  private getCharacterName(index: number) {
    const names = [
      "Wanderer", "Bergsteiger", "Scout", "Ranger", "Naturfreund", "Entdecker", 
      "Pfadfinder", "Waldläufer", "Naturschützer", "Guide", "Naturforscher", "Bergführer", 
      "Trailblazer", "Naturkundler", "Wanderleiter", "Expeditionsleiter", "Wildnisführer", "Naturexperte",
      "Wegweiser", "Wanderexperte", "Abenteurer", "Wanderführer", "Naturwächter", "Naturguide"
    ];
    return names[index] || `Charakter ${index + 1}`;
  }

  update() {
    // Handle keyboard input
    const cursors = this.input.keyboard?.createCursorKeys();
    if (cursors?.left.isDown) {
      this.changeCharacter(-1);
    } else if (cursors?.right.isDown) {
      this.changeCharacter(1);
    }
  }
}
