import { useEffect, useRef } from 'react';
import * as Phaser from 'phaser';
import { StartScene } from './scenes/StartScene';
import { CharacterSelectScene } from './scenes/CharacterSelectScene';
import { GameScene } from './scenes/GameScene';
import { MapScene } from './scenes/MapScene';

// Main game component
const GamePhaser = () => {
  const gameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    if (gameRef.current) return;

    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      parent: 'phaser-game',
      backgroundColor: '#1a1a1a',
      scene: [StartScene, CharacterSelectScene, GameScene, MapScene],
      scale: {
        mode: Phaser.Scale.RESIZE,
        width: '100%',
        height: '100%',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        fullscreenTarget: 'phaser-game',
      },
      render: {
        pixelArt: true,
        antialias: false
      }
    };

    gameRef.current = new Phaser.Game(config);

    // Add fullscreen toggle
    const toggleFullscreen = () => {
      if (gameRef.current) {
        if (gameRef.current.scale.isFullscreen) {
          gameRef.current.scale.stopFullscreen();
        } else {
          gameRef.current.scale.startFullscreen();
        }
      }
    };

    // Add keyboard listener for fullscreen toggle (F key)
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'f' || event.key === 'F') {
        toggleFullscreen();
      }
    };
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full h-screen bg-gray-900 flex justify-center items-center">
      <div id="phaser-game" className="w-full h-full" />
    </div>
  );
};

export default GamePhaser;