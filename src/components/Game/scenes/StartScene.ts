import * as Phaser from 'phaser';
import { GameData, hasSavedGame, loadGame } from './GameData';
import gameStartScreen from "../../../../src/images/game/gameStartScreen.png";

export class StartScene extends Phaser.Scene {
  private forestSound: Phaser.Sound.BaseSound | null = null;
  private backgroundMusic: Phaser.Sound.BaseSound | null = null;
  private isMusicEnabled: boolean = false;

  constructor() {
    super({ key: 'StartScene' });
  }

  preload() {
    this.load.image('gameStartScreen', gameStartScreen);
    this.load.audio('forestSound', '/forest.mp3');
    this.load.audio('backgroundMusic', '/bg-music.mp3');
  }

  create() {
    // Background
    const bg = this.add.image(0, 0, 'gameStartScreen')
      .setOrigin(0)
      .setDisplaySize(this.scale.width, this.scale.height);

    // Handle resize
    this.scale.on('resize', (gameSize: Phaser.Structs.Size) => {
      bg.setDisplaySize(gameSize.width, gameSize.height);
      this.cameras.main.centerOn(gameSize.width / 2, gameSize.height / 2);
    });

    // Title
    const title = this.add.text(
      this.scale.width / 2,
      this.scale.height * 0.2,
      'Wanderabenteuer',
      {
        fontSize: '48px',
        color: '#ffffff',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5);

    // Initialize music
    if (!this.forestSound && !this.backgroundMusic) {
      this.forestSound = this.sound.add('forestSound', {
        volume: 0.3,
        loop: true,
        mute: true
      });
      
      this.backgroundMusic = this.sound.add('backgroundMusic', {
        volume: 0.5,
        loop: true,
        mute: true
      });

      this.forestSound.play();
      this.backgroundMusic.play();
    }

    // Create start button
    const startButton = this.createButton(
      this.scale.width / 2,
      this.scale.height * 0.4,
      'Neues Spiel',
      () => this.showNewGameConfirmation()
    );

    // Create load game button if save exists
    if (hasSavedGame()) {
      const loadButton = this.createButton(
        this.scale.width / 2,
        this.scale.height * 0.55,
        'Gespeichertes Spiel laden',
        () => {
          const savedGame = loadGame();
          if (savedGame) {
            // Merge saved data with current audio state
            const gameData: GameData = {
              ...savedGame,
              forestSound: this.forestSound,
              backgroundMusic: this.backgroundMusic
            };
            this.scene.start('GameScene', gameData);
          }
        }
      );
    }

    // Create music toggle button
    const musicButton = this.createButton(
      this.scale.width / 2,
      this.scale.height * 0.7,
      this.isMusicEnabled ? '🔊 Musik: An' : '🔇 Musik: Aus',
      () => {
        this.isMusicEnabled = !this.isMusicEnabled;
        if (this.forestSound) {
          this.forestSound.setMute(!this.isMusicEnabled);
        }
        if (this.backgroundMusic) {
          this.backgroundMusic.setMute(!this.isMusicEnabled);
        }
        musicButton.setText(this.isMusicEnabled ? '🔊 Musik: An' : '🔇 Musik: Aus');
      }
    );
  }

  private showNewGameConfirmation() {
    if (!hasSavedGame()) {
      // If no saved game exists, start new game directly
      this.scene.start('CharacterSelectScene', {
        isMusicEnabled: this.isMusicEnabled,
        forestSound: this.forestSound,
        backgroundMusic: this.backgroundMusic
      });
      return;
    }

    // Create semi-transparent background
    const overlay = this.add.rectangle(
      0, 0,
      this.scale.width, this.scale.height,
      0x000000, 0.7
    ).setOrigin(0);

    // Create popup container
    const popupWidth = 400;
    const popupHeight = 200;
    const x = this.scale.width / 2;
    const y = this.scale.height / 2;

    const popup = this.add.rectangle(
      x, y,
      popupWidth, popupHeight,
      0x4a90e2
    ).setOrigin(0.5);

    // Add warning text
    const warningText = this.add.text(
      x,
      y - 40,
      'Achtung: Ein neues Spiel wird den vorhandenen\nSpielstand löschen. Fortfahren?',
      {
        fontSize: '18px',
        color: '#ffffff',
        align: 'center'
      }
    ).setOrigin(0.5);

    // Add buttons
    const confirmButton = this.createButton(
      x - 80,
      y + 40,
      'Ja',
      () => {
        localStorage.removeItem('savedGame');
        this.scene.start('CharacterSelectScene', {
          isMusicEnabled: this.isMusicEnabled,
          forestSound: this.forestSound,
          backgroundMusic: this.backgroundMusic
        });
      }
    );

    const cancelButton = this.createButton(
      x + 80,
      y + 40,
      'Nein',
      () => {
        // Remove popup elements
        overlay.destroy();
        popup.destroy();
        warningText.destroy();
        confirmButton.destroy();
        cancelButton.destroy();
      }
    );
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
}
