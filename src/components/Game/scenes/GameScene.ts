import * as Phaser from 'phaser';
import { GameData, saveGame, SavedGameData, Decision, DecisionOption } from './GameData';
import { preparationDecisions, easyDecisions, mediumDecisions, hardDecisions } from '../decisions';
import playerChoiceSprite from "../../../../src/images/game/playerChoiceSprite.png";
import gameStartScreen from "../../../../src/images/game/gameStartScreen.png";
import waterbottle from "../../../../src/images/game/waterbottle.png";
import wanderPlan from "../../../../src/images/game/wanderPlan.png";
import guenstigeAusruestung from "../../../../src/images/game/guenstigeAusruestung.png";
import hochwertigeAusruestung from "../../../../src/images/game/hochwertigeAusruestung.png";
import ersteHilfeSet from "../../../../src/images/game/ersteHilfeSet.png";
import hochwertigeNahrung from "../../../../src/images/game/hochwertigeNahrung.png";
import guenstigeNahrung from "../../../../src/images/game/guenstigeNahrung.png";
import extraWasser from "../../../../src/images/game/extraWasser.png";
import buch from "../../../../src/images/game/buch.png";
import wanderstoecke from "../../../../src/images/game/wanderstoecke.png";
import shelf from "../../../../src/images/game/shelf.png";
import priceTag from "../../../../src/images/game/priceTag.png";

// Define shop items with image keys
const SHOP_ITEMS = [
  { 
    id: 'wanderPlan', 
    name: 'Wander Plan', 
    price: 10, 
    description: 'Detaillierte Routenplanung für sicheres Wandern',
    effects: { energy: 5 },
    category: 'misc',
    imageKey: 'wanderPlan'
  },
  { 
    id: 'guenstigeAusruestung', 
    name: 'Günstige Ausrüstung', 
    price: 50, 
    description: 'Grundlegende Wanderausrüstung zum günstigen Preis',
    effects: { health: -5 },
    category: 'equipment',
    imageKey: 'guenstigeAusruestung'
  },
  { 
    id: 'hochwertigeAusruestung', 
    name: 'Hochwertige Ausrüstung', 
    price: 100, 
    description: 'Qualitativ hochwertige Wanderausrüstung für maximalen Komfort',
    effects: { health: 5 },
    category: 'equipment',
    imageKey: 'hochwertigeAusruestung'
  },
  { 
    id: 'ersteHilfeSet', 
    name: 'Erste Hilfe Set', 
    price: 20, 
    description: 'Wichtige Erste-Hilfe-Ausrüstung für Notfälle',
    effects: { health: 10 },
    category: 'equipment',
    imageKey: 'ersteHilfeSet'
  },
  { 
    id: 'hochwertigeNahrung', 
    name: 'Hochwertige Nahrung', 
    price: 30, 
    description: 'Nährstoffreiche Lebensmittel für optimale Energie',
    effects: { energy: 10 },
    category: 'food',
    imageKey: 'hochwertigeNahrung'
  },
  { 
    id: 'guenstigeNahrung', 
    name: 'Günstige Nahrung', 
    price: 15, 
    description: 'Einfache Lebensmittel zum günstigen Preis',
    effects: { energy: 5 },
    category: 'food',
    imageKey: 'guenstigeNahrung'
  },
  { 
    id: 'extraWasser', 
    name: 'Extra Wasser', 
    price: 10, 
    description: 'Zusätzlicher Wasservorrat für längere Etappen',
    effects: { health: 5, energy: -5 },
    category: 'food',
    imageKey: 'extraWasser'
  },
  { 
    id: 'buch', 
    name: 'Buch', 
    price: 10, 
    description: 'Unterhaltung für Pausen und Abende',
    effects: { reward: 5 },
    category: 'misc',
    imageKey: 'buch'
  },
  { 
    id: 'wanderstoecke', 
    name: 'Wanderstöcke', 
    price: 25, 
    description: 'Stabilität und Unterstützung beim Wandern',
    effects: { energy: 5, health: 5 },
    category: 'equipment',
    imageKey: 'wanderstoecke'
  }
];

export class GameScene extends Phaser.Scene {
  private forestSound?: Phaser.Sound.BaseSound;
  private backgroundMusic?: Phaser.Sound.BaseSound;
  private isMusicEnabled: boolean = false;
  private day: number = 1;
  private capital: number = 200;
  private energy: number = 100;
  private health: number = 100;
  private selectedCharacter: number = 0;
  private jokerUsed = {
    emergencySupply: false,
    energyBoost: false,
    luckyCharm: false,
  };
  private selectedRoute?: 'easy' | 'medium' | 'hard';
  private currentDecision?: Decision;
  private laterEffectsQueue: any[] = [];
  private decisionText?: Phaser.GameObjects.Text;
  private optionButtons: Phaser.GameObjects.Container[] = [];
  private statsText?: Phaser.GameObjects.Text;
  private characterSprite?: Phaser.GameObjects.Sprite;
  private jokerButtons: { [key: string]: Phaser.GameObjects.Container } = {};
  private gameState: any;

  // Sprite sheet constants
  private readonly SPRITE_WIDTH = 666.6666666667;
  private readonly SPRITE_HEIGHT = 1000;
  private readonly DISPLAY_SCALE = 0.2;
  private readonly COLUMNS = 6;
  private readonly ROWS = 4;

  constructor() {
    super({ key: 'GameScene' });
  }

  preload() {
    // Load character spritesheet
    this.load.spritesheet('characters', playerChoiceSprite, {
      frameWidth: Math.floor(this.SPRITE_WIDTH),
      frameHeight: this.SPRITE_HEIGHT
    });

    // Load background and shelf
    this.load.image('gameStartScreen', gameStartScreen);
    this.load.image('shelf', shelf);
    this.load.image('priceTag', priceTag);

    // Load item images
    this.load.image('wanderPlan', wanderPlan);
    this.load.image('guenstigeAusruestung', guenstigeAusruestung);
    this.load.image('hochwertigeAusruestung', hochwertigeAusruestung);
    this.load.image('ersteHilfeSet', ersteHilfeSet);
    this.load.image('hochwertigeNahrung', hochwertigeNahrung);
    this.load.image('guenstigeNahrung', guenstigeNahrung);
    this.load.image('extraWasser', extraWasser);
    this.load.image('buch', buch);
    this.load.image('wanderstoecke', wanderstoecke);
  }

  init(data: GameData & { selectedCharacter: number }) {
    this.isMusicEnabled = data.isMusicEnabled;
    this.forestSound = data.forestSound;
    this.backgroundMusic = data.backgroundMusic;
    this.selectedCharacter = data.selectedCharacter;
    
    if (data.day) this.day = data.day;
    if (data.capital) this.capital = data.capital;
    if (data.energy) this.energy = data.energy;
    if (data.health) this.health = data.health;
    if (data.jokerUsed) this.jokerUsed = data.jokerUsed;
    if (data.selectedRoute) this.selectedRoute = data.selectedRoute;
    if (data.laterEffectsQueue) this.laterEffectsQueue = data.laterEffectsQueue;
  }

  create() {
    // Initialize game state
    this.gameState = {
      day: 1,
      capital: 200,
      energy: 100,
      health: 100,
      isMusicEnabled: this.isMusicEnabled,
      jokerUsed: {
        emergencySupply: false,
        energyBoost: false,
        luckyCharm: false
      },
      forestSound: this.forestSound,
      backgroundMusic: this.backgroundMusic,
      selectedRoute: undefined,
      laterEffectsQueue: [],
      inventory: {
        wanderPlan: false,
        guenstigeAusruestung: false,
        hochwertigeAusruestung: false,
        ersteHilfeSet: false,
        hochwertigeNahrung: false,
        guenstigeNahrung: false,
        extraWasser: false,
        buch: false,
        wanderstoecke: false
      }
    };

    this.createShopInterface();
  }

  private createShopInterface() {
    // Enable pixel art mode
    this.cameras.main.setRoundPixels(true);

    // Constants for item dimensions and layout
    const ITEM_WIDTH = 80;
    const ITEM_HEIGHT = 80;
    const SHELF_HEIGHT = 540;
    const SHELF_LAYER_HEIGHT = SHELF_HEIGHT / 3;
    const SHELF_PADDING_TOP = 40;
    
    // Create pixel art style background
    const bg = this.add.image(0, 0, 'gameStartScreen')
      .setOrigin(0)
      .setDisplaySize(this.scale.width, this.scale.height)
      .setAlpha(0.3);

    // Back button with character selection style
    const backButton = this.add.text(20, 20, '← Zurück', {
      fontSize: '24px',
      color: '#ffffff',
    })
    .setInteractive()
    .on('pointerdown', () => {
      const gameData: GameData = {
        isMusicEnabled: this.isMusicEnabled,
        forestSound: this.forestSound,
        backgroundMusic: this.backgroundMusic,
        selectedCharacter: this.selectedCharacter
      };
      this.scene.start('StartScene', gameData);
    })
    .on('pointerover', () => backButton.setScale(1.1))
    .on('pointerout', () => backButton.setScale(1));

    // Add music toggle
    this.createMusicToggle(this.scale.width - 20, 20);

    const centerX = this.scale.width / 2;
    const startY = 100;
    const itemSpacing = 200;

    // Add shop title in pixel art style
    const titleText = this.add.text(centerX, 40, 'Ausrüstungs-Shop', {
      fontSize: '32px',
      color: '#ffffff'
    }).setOrigin(0.5);
    titleText.setFontFamily('Press Start 2P, cursive');

    // Add capital display in pixel art style with green background like character selection buttons
    const capitalContainer = this.add.container(centerX, 80);
    const capitalBg = this.add.rectangle(0, 0, 300, 40, 0x4ade80);
    const capitalText = this.add.text(0, 0, `${this.gameState.capital}€`, {
      fontSize: '24px',
      color: '#ffffff'
    }).setOrigin(0.5);
    capitalText.setFontFamily('Press Start 2P, cursive');
    capitalContainer.add([capitalBg, capitalText]);

    // Add character display (bottom right)
    const characterSprite = this.add.sprite(
      this.scale.width - 100,
      this.scale.height - 100,
      'characters',
      this.selectedCharacter || 0
    )
    .setScale(0.3)
    .setDepth(1); // Ensure character appears above other elements

    // Add decorative background circle for character
    const characterBg = this.add.circle(
      this.scale.width - 100,
      this.scale.height - 100,
      80,
      0x4ade80,
      0.3
    ).setDepth(0);

    // Add character name
    const characterNames = [
      "Wanderer", "Bergsteiger", "Scout", "Ranger", "Naturfreund", "Entdecker", 
      "Pfadfinder", "Waldläufer", "Naturschützer", "Guide", "Naturforscher", "Bergführer", 
      "Trailblazer", "Naturkundler", "Wanderleiter", "Expeditionsleiter", "Wildnisführer", "Naturexperte",
      "Wegweiser", "Wanderexperte", "Abenteurer", "Wanderführer", "Naturwächter", "Naturguide"
    ];
    
    const characterName = this.add.text(
      this.scale.width - 100,
      this.scale.height - 30,
      characterNames[this.selectedCharacter || 0],
      {
        fontSize: '16px',
        color: '#ffffff',
        fontFamily: 'Press Start 2P, cursive'
      }
    ).setOrigin(0.5).setDepth(1);

    // Add the single shelf image
    const shelf = this.add.image(centerX, startY, 'shelf')
      .setOrigin(0.5, 0)
      .setDisplaySize(this.scale.width * 0.8, SHELF_HEIGHT);

    // Create categories and items
    const categories = {
      equipment: { title: 'Ausrüstung', items: [] as typeof SHOP_ITEMS[0][], y: startY + SHELF_PADDING_TOP },
      food: { title: 'Nahrung', items: [] as typeof SHOP_ITEMS[0][], y: startY + SHELF_LAYER_HEIGHT + SHELF_PADDING_TOP },
      misc: { title: 'Sonstiges', items: [] as typeof SHOP_ITEMS[0][], y: startY + SHELF_LAYER_HEIGHT * 2 + SHELF_PADDING_TOP }
    };

    // Sort items into categories
    SHOP_ITEMS.forEach(item => {
      categories[item.category].items.push(item);
    });

    // Create items on shelves
    Object.entries(categories).forEach(([category, { title, items, y }]) => {

      // Add items to shelf
      items.forEach((item, index) => {
        const itemX = (centerX - this.scale.width * 0.3) + index * itemSpacing;
        
        // Create item container for consistent sizing
        const itemContainer = this.add.container(itemX, y + ITEM_HEIGHT/2);

        // Create item image with consistent dimensions
        const itemImage = this.add.image(0, 0, item.imageKey);
        
        // Calculate scale to fit item within our desired dimensions
        const scaleX = ITEM_WIDTH / itemImage.width;
        const scaleY = ITEM_HEIGHT / itemImage.height;
        const scale = Math.min(scaleX, scaleY);
        
        // Center the image within the container
        itemImage.setScale(scale);
        itemImage.setPosition(0, 0);
        
        itemContainer.add(itemImage);

        // Add price tag
        const priceTag = this.add.container(0, ITEM_HEIGHT/2 + 20);
        
        // Add price tag background image
        const tagImage = this.add.image(0, 0, 'priceTag')
          .setScale(0.1); // Adjust scale as needed
        
        // Add price text
        const priceText = this.add.text(35, 9, `${item.price}€`, 
          {
            fontSize: '200px',
            color: '#ffffff',
            fontFamily: 'Press Start 2P, cursive',
            fontStyle: 'bold'
          }
          ).setOrigin(1);
        priceText.setScale(1.5);


        priceTag.add([tagImage, priceText]);
        itemContainer.add(priceTag);

        // Make item interactive
        itemImage.setInteractive();
        
        // Create hover effect for the image
        itemImage.on('pointerover', () => {
          this.tweens.add({
            targets: itemImage,
            scale: scale * 1.2,
            duration: 100
          });
          
          // Create tooltip
          const tooltipBg = this.add.rectangle(0, -ITEM_HEIGHT - 60, 300, 160, 0x000000, 0.8);
          
          const nameText = this.add.text(0, -ITEM_HEIGHT - 100, item.name.toUpperCase(), {
            fontSize: '24px',
            color: '#ffffff',
            fontStyle: 'bold',
            align: 'center',
            fontFamily: 'Press Start 2P, cursive'
          }).setOrigin(0.5);

          const descText = this.add.text(0, -ITEM_HEIGHT - 50, item.description, {
            fontSize: '16px',
            color: '#ffffff',
            align: 'center',
            wordWrap: { width: 280 },
            fontFamily: 'Press Start 2P, cursive'
          }).setOrigin(0.5);

          let effectsText = '';
          if (item.effects.health) effectsText += `HP: ${item.effects.health > 0 ? '+' : ''}${item.effects.health} `;
          if (item.effects.energy) effectsText += `EP: ${item.effects.energy > 0 ? '+' : ''}${item.effects.energy}`;

          const statsText = this.add.text(0, -ITEM_HEIGHT - 20, effectsText, {
            fontSize: '18px',
            color: '#ffff00',
            align: 'center',
            fontFamily: 'Press Start 2P, cursive'
          }).setOrigin(0.5);

          const tooltip = this.add.container(0, 0, [
            tooltipBg,
            nameText,
            descText,
            statsText
          ]);
          
          itemContainer.add(tooltip);
          
          // Store tooltip reference for removal
          itemContainer.setData('tooltip', tooltip);
        });

        itemImage.on('pointerout', () => {
          this.tweens.add({
            targets: itemImage,
            scale: scale,
            duration: 100
          });
          
          // Remove tooltip
          const tooltip = itemContainer.getData('tooltip');
          if (tooltip) {
            tooltip.destroy();
            itemContainer.setData('tooltip', null);
          }
        });

        // Add click handler
        itemImage.on('pointerdown', () => {
          if (!this.gameState.inventory[item.id] && this.gameState.capital >= item.price) {
            // Purchase animation
            this.tweens.add({
              targets: itemImage,
              scale: scale * 1.3,
              duration: 100,
              yoyo: true,
              onComplete: () => {
                this.gameState.capital -= item.price;
                this.gameState.inventory[item.id] = true;
                
                // Apply effects
                if (item.effects.health) this.gameState.health += item.effects.health;
                if (item.effects.energy) this.gameState.energy += item.effects.energy;
                
                // Update displays
                capitalText.setText(`Verfügbares Geld: ${this.gameState.capital}€`);
                itemImage.setTint(0x666666);
                
                // Show purchased overlay
                const purchasedText = this.add.text(0, -ITEM_HEIGHT/2 - 20, 'Gekauft!', {
                  fontSize: '16px',
                  color: '#00ff00'
                }).setOrigin(0.5);
                purchasedText.setFontFamily('Press Start 2P, cursive');
                itemContainer.add(purchasedText);
                
                this.tweens.add({
                  targets: purchasedText,
                  alpha: 0,
                  y: -ITEM_HEIGHT/2 - 40,
                  duration: 1000,
                  onComplete: () => purchasedText.destroy()
                });
              }
            });
          }
        });
      });
    });

    // Create pixel art continue button with character selection style
    const continueButton = this.add.container(
      centerX,
      startY + SHELF_HEIGHT + 40
    );
    
    const buttonBg = this.add.rectangle(0, 0, 300, 50, 0x4ade80);
    const buttonText = this.add.text(0, 0, 'Weiter zur Route', {
      fontSize: '24px',
      color: '#ffffff',
    }).setOrigin(0.5);
    buttonText.setFontFamily('Press Start 2P, cursive');

    continueButton.add([buttonBg, buttonText]);
    continueButton.setSize(300, 50);
    continueButton
      .setInteractive()
      .on('pointerdown', () => this.startRouteSelection())
      .on('pointerover', () => continueButton.setScale(1.1))
      .on('pointerout', () => continueButton.setScale(1));
  }

  private createPixelArtHoverEffect(sprite: Phaser.GameObjects.Sprite) {
    sprite.on('pointerover', () => {
      this.tweens.add({
        targets: sprite,
        scaleX: 1.5,
        scaleY: 1.5,
        duration: 100
      });
    });

    sprite.on('pointerout', () => {
      this.tweens.add({
        targets: sprite,
        scaleX: 1,
        scaleY: 1,
        duration: 100
      });
    });
  }

  private createItemTooltip(sprite: Phaser.GameObjects.Sprite, item: any) {
    let tooltip: Phaser.GameObjects.Container;

    sprite.on('pointerover', () => {
      const padding = 10;
      const tooltipBg = this.add.rectangle(0, 0, 200, 100, 0x000000, 0.8);
      
      const nameText = this.add.text(0, -35, item.name, {
        fontSize: '14px',
        color: '#ffffff'
      }).setOrigin(0.5);
      nameText.setFontFamily('Press Start 2P, cursive');

      const descText = this.add.text(0, 0, item.description, {
        fontSize: '12px',
        color: '#ffffff',
        wordWrap: { width: 180 },
        align: 'center'
      }).setOrigin(0.5);
      descText.setFontFamily('Press Start 2P, cursive');

      let effectsText = '';
      if (item.effects.health) effectsText += `HP: ${item.effects.health > 0 ? '+' : ''}${item.effects.health} `;
      if (item.effects.energy) effectsText += `EP: ${item.effects.energy > 0 ? '+' : ''}${item.effects.energy}`;

      const statsText = this.add.text(0, 35, effectsText, {
        fontSize: '12px',
        color: '#ffff00'
      }).setOrigin(0.5);
      statsText.setFontFamily('Press Start 2P, cursive');

      tooltip = this.add.container(sprite.x, sprite.y - 100, [
        tooltipBg,
        nameText,
        descText,
        statsText
      ]);
    });

    sprite.on('pointerout', () => {
      if (tooltip) tooltip.destroy();
    });
  }

  private createPixelButton(x: number, y: number, text: string, callback: () => void): Phaser.GameObjects.Container {
    const padding = 20;
    const buttonText = this.add.text(0, 0, text, {
      fontSize: '20px',
      color: '#ffffff',
    }).setOrigin(0.5);
    buttonText.setFontFamily('Press Start 2P, cursive');

    const buttonWidth = buttonText.width + padding * 2;
    const buttonHeight = buttonText.height + padding * 2;

    const buttonBg = this.add.rectangle(0, 0, buttonWidth, buttonHeight, 0x4a90e2);
    const buttonBorder = this.add.rectangle(0, 0, buttonWidth + 4, buttonHeight + 4, 0xFFFFFF);
    buttonBorder.setFillStyle(0x000000);
    buttonBorder.setStrokeStyle(2, 0xFFFFFF);

    const container = this.add.container(x, y, [buttonBorder, buttonBg, buttonText]);

    buttonBg.setInteractive()
      .on('pointerover', () => {
        buttonBg.setFillStyle(0x357abd);
        container.y = y + 2;
      })
      .on('pointerout', () => {
        buttonBg.setFillStyle(0x4a90e2);
        container.y = y;
      })
      .on('pointerdown', () => {
        container.y = y + 4;
        this.time.delayedCall(100, callback);
      })
      .on('pointerup', () => {
        container.y = y;
      });

    return container;
  }

  private createMusicToggle(x: number, y: number) {
    const musicButton = this.add.text(
      x,
      y,
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

    return musicButton;
  }

  private startRouteSelection() {
    // Clear shop interface
    this.children.removeAll();

    // Create background
    const bg = this.add.image(0, 0, 'gameStartScreen')
      .setOrigin(0)
      .setDisplaySize(this.scale.width, this.scale.height)
      .setAlpha(0.3);

    const centerX = this.scale.width / 2;
    const startY = 100;

    // Add title
    const titleText = this.add.text(centerX, 40, 'Wähle deine Route', {
      fontSize: '32px',
      color: '#ffffff'
    }).setOrigin(0.5);
    titleText.setFontFamily('Press Start 2P, cursive');

    // Add back button
    const backButton = this.add.text(20, 20, '← Zurück', {
      fontSize: '24px',
      color: '#ffffff',
    })
    .setInteractive()
    .on('pointerdown', () => {
      this.createShopInterface();
    })
    .on('pointerover', () => backButton.setScale(1.1))
    .on('pointerout', () => backButton.setScale(1));

    // Add music toggle
    this.createMusicToggle(this.scale.width - 20, 20);

    const characterSprite = this.add.sprite(
      this.scale.width - 60,
      80,
      'characters',
      this.selectedCharacter || 0
    )
    .setScale(0.15);

    // Create route buttons
    const createRouteButton = (y: number, text: string, difficulty: 'easy' | 'medium' | 'hard') => {
      const container = this.add.container(centerX, y);
      
      const buttonBg = this.add.rectangle(0, 0, 400, 100, 0x4ade80);
      const buttonText = this.add.text(0, 0, text, {
        fontSize: '24px',
        color: '#ffffff',
      }).setOrigin(0.5);
      buttonText.setFontFamily('Press Start 2P, cursive');

      container.add([buttonBg, buttonText]);
      container.setSize(400, 100);
      container
        .setInteractive()
        .on('pointerdown', () => {
          this.selectedRoute = difficulty;
          this.startGame();
        })
        .on('pointerover', () => container.setScale(1.1))
        .on('pointerout', () => container.setScale(1));

      return container;
    };

    // Add route options
    createRouteButton(startY + 100, 'Einfache Route\n(5km)', 'easy');
    createRouteButton(startY + 250, 'Mittlere Route\n(10km)', 'medium');
    createRouteButton(startY + 400, 'Schwere Route\n(15km)', 'hard');
  }

  private startGame() {
    // Save initial game state
    const gameData: SavedGameData = {
      day: this.day,
      capital: this.capital,
      energy: this.energy,
      health: this.health,
      selectedRoute: this.selectedRoute,
      jokerUsed: this.jokerUsed,
      isMusicEnabled: this.isMusicEnabled
    };
    saveGame(gameData);

    // Clear the scene and start the game
    this.children.removeAll();
    this.createGameInterface();
  }

  private createGameInterface() {
    // Create background
    const bg = this.add.image(0, 0, 'gameStartScreen')
      .setOrigin(0)
      .setDisplaySize(this.scale.width, this.scale.height)
      .setAlpha(0.3);

    const centerX = this.scale.width / 2;
    
    // Add title based on route
    const routeText = {
      easy: 'Einfache Route (5km)',
      medium: 'Mittlere Route (10km)',
      hard: 'Schwere Route (15km)'
    }[this.selectedRoute || 'easy'];

    const titleText = this.add.text(centerX, 40, routeText, {
      fontSize: '32px',
      color: '#ffffff'
    }).setOrigin(0.5);
    titleText.setFontFamily('Press Start 2P, cursive');

    // Add character sprite
    this.characterSprite = this.add.sprite(
      centerX,
      this.scale.height / 2,
      'characters',
      this.selectedCharacter
    ).setScale(this.DISPLAY_SCALE);

    // Add stats display
    this.updateStats();

    // Add music toggle
    this.createMusicToggle(this.scale.width - 20, 20);

    // Start the first decision
    this.showNextDecision();
  }
}
