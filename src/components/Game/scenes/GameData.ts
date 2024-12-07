import * as Phaser from 'phaser';

export interface ShopItem {
  id: string;
  name: string;
  price: number;
  description: string;
  effects: GameEffects;
  category: 'equipment' | 'food' | 'misc';
}

export interface Inventory {
  wanderPlan: boolean;
  guenstigeAusruestung: boolean;
  hochwertigeAusruestung: boolean;
  ersteHilfeSet: boolean;
  hochwertigeNahrung: boolean;
  guenstigeNahrung: boolean;
  extraWasser: boolean;
  buch: boolean;
  wanderstoecke: boolean;
}

export interface GameEffects {
  capital?: number;
  energy?: number;
  health?: number;
  reward?: number;
}

export interface DecisionOption {
  label: string;
  effects: GameEffects;
  message: string;
  tip?: string;
  effectType: 'positive' | 'neutral' | 'negative';
  laterEffects?: GameEffects;
}

export interface Decision {
  text: string;
  options: DecisionOption[];
}

// Runtime game data including sound objects
export interface GameData {
  selectedCharacter?: number;
  day?: number;
  capital?: number;
  energy?: number;
  health?: number;
  isMusicEnabled: boolean;
  jokerUsed?: {
    emergencySupply: boolean;
    energyBoost: boolean;
    luckyCharm: boolean;
  };
  forestSound?: Phaser.Sound.BaseSound;
  backgroundMusic?: Phaser.Sound.BaseSound;
  currentDecision?: Decision;
  selectedRoute?: 'easy' | 'medium' | 'hard';
  laterEffectsQueue?: GameEffects[];
  inventory?: Inventory;
}

// Data structure for saving to localStorage (no sound objects)
export interface SavedGameData {
  selectedCharacter: number;
  day: number;
  capital: number;
  energy: number;
  health: number;
  isMusicEnabled: boolean;
  jokerUsed: {
    emergencySupply: boolean;
    energyBoost: boolean;
    luckyCharm: boolean;
  };
  selectedRoute: 'easy' | 'medium' | 'hard';
  laterEffectsQueue: GameEffects[];
  inventory: Inventory;
}

export const SHOP_ITEMS: ShopItem[] = [
  {
    id: 'wanderPlan',
    name: 'Wander Plan',
    price: 10,
    description: 'Detaillierte Routenplanung für sicheres Wandern',
    effects: { energy: 5 },
    category: 'misc'
  },
  {
    id: 'guenstigeAusruestung',
    name: 'Günstige Ausrüstung',
    price: 50,
    description: 'Grundlegende Wanderausrüstung zum günstigen Preis',
    effects: { health: -5 },
    category: 'equipment'
  },
  {
    id: 'hochwertigeAusruestung',
    name: 'Hochwertige Ausrüstung',
    price: 100,
    description: 'Qualitativ hochwertige Wanderausrüstung für maximalen Komfort',
    effects: { health: 5 },
    category: 'equipment'
  },
  {
    id: 'ersteHilfeSet',
    name: 'Erste Hilfe Set',
    price: 20,
    description: 'Wichtige Erste-Hilfe-Ausrüstung für Notfälle',
    effects: { health: 10 },
    category: 'equipment'
  },
  {
    id: 'hochwertigeNahrung',
    name: 'Hochwertige Nahrung',
    price: 30,
    description: 'Nährstoffreiche Lebensmittel für optimale Energie',
    effects: { energy: 10 },
    category: 'food'
  },
  {
    id: 'guenstigeNahrung',
    name: 'Günstige Nahrung',
    price: 15,
    description: 'Einfache Lebensmittel zum günstigen Preis',
    effects: { energy: 5 },
    category: 'food'
  },
  {
    id: 'extraWasser',
    name: 'Extra Wasser',
    price: 10,
    description: 'Zusätzlicher Wasservorrat für längere Etappen',
    effects: { health: 5, energy: -5 },
    category: 'food'
  },
  {
    id: 'buch',
    name: 'Buch',
    price: 10,
    description: 'Unterhaltung für Pausen und Abende',
    effects: { reward: 5 },
    category: 'misc'
  },
  {
    id: 'wanderstoecke',
    name: 'Wanderstöcke',
    price: 25,
    description: 'Stabilität und Unterstützung beim Wandern',
    effects: { energy: 5, health: 5 },
    category: 'equipment'
  }
];

export const saveGame = (data: SavedGameData) => {
  localStorage.setItem('savedGame', JSON.stringify(data));
};

export const loadGame = (): SavedGameData | null => {
  const saved = localStorage.getItem('savedGame');
  return saved ? JSON.parse(saved) : null;
};

export const hasSavedGame = (): boolean => {
  return localStorage.getItem('savedGame') !== null;
};
