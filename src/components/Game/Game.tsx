// Game.js
import { useState, useEffect, useRef } from "react";
import {
  preparationDecisions,
  easyDecisions,
  mediumDecisions,
  hardDecisions,
} from "./decisions.js";
import { Link } from "react-router-dom";
import { Heart, Lightning, FirstAidKit } from "phosphor-react";
import logoImg from "../../../src/images/favicon.png";
import gameStartScreen from "../../../src/images/game/gameStartScreen.png";
import playerChoiceSprite from "../../../src/images/game/playerChoiceSprite.png";

const Game = () => {
  const [phase, setPhase] = useState("start");
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [preparationStep, setPreparationStep] = useState(0);
  const [day, setDay] = useState(1);
  const [capital, setCapital] = useState(200);
  const [energy, setEnergy] = useState(100);
  const [health, setHealth] = useState(100);
  const [log, setLog] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [jokerUsed, setJokerUsed] = useState({
    emergencySupply: false,
    energyBoost: false,
    luckyCharm: false,
  });
  const [laterEffectsQueue, setLaterEffectsQueue] = useState([]);
  const [showTip, setShowTip] = useState(false);
  const [currentTip, setCurrentTip] = useState("");
  const [isMusicEnabled, setIsMusicEnabled] = useState(true);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [hoveredCharacter, setHoveredCharacter] = useState(null);
  const [characterFrame, setCharacterFrame] = useState(0);

  const introTexts = [
    "Stell dir vor, du bist auf einer 30-tägigen Wanderreise.",
    "Dein Budget ist begrenzt.",
    "Du musst deine Energie und Gesundheit sorgfältig managen.",
    "Wirst du es schaffen, alle Herausforderungen zu meistern?",
  ];
  const [introIndex, setIntroIndex] = useState(0);
  const [showOptions, setShowOptions] = useState(false);

  const audioRef = useRef(null);

  const pixelatedStyle = {
    imageRendering: "pixelated" as const,
    imageRendering: "-moz-crisp-edges" as const,
    imageRendering: "-webkit-crisp-edges" as const,
  };

  const startScreenStyle = {
    ...pixelatedStyle,
    backgroundImage: `url(${gameStartScreen})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    position: "relative" as const,
  };

  const startPreparation = async () => {
    setPhase("preparation");
  };

  const selectRoute = (route) => {
    setSelectedRoute(route);
    setPhase("game");
  };

  const toggleMusic = () => {
    setIsMusicEnabled(!isMusicEnabled);
  };

  const startGame = () => {
    setPhase("character-select");
  };

  const selectCharacter = (index) => {
    setSelectedCharacter(index);
    setPhase("intro");
  };

  useEffect(() => {
    if (audioRef.current) {
      if (isMusicEnabled) {
        audioRef.current.play().catch(console.error);
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [isMusicEnabled, phase]);

  const SPRITE_WIDTH = 170.6666666667; // Each character is 170x170 in the 1024x1024 sprite sheet
  const SPRITE_HEIGHT = 256;
  const COLUMNS = 6;
  const ROWS = 4;
  const TOTAL_CHARACTERS = COLUMNS * ROWS;
  const DISPLAY_SIZE = 150; // Size of the display box for each character

  const characterSelectionStyle = {
    container: {
      background: "#1a1a1a",
      minHeight: "100vh",
      padding: "2rem",
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gap: "1rem",
      width: "100%",
      maxWidth: "1024px",
      aspectRatio: "1",
      padding: "2rem",
      background: "rgba(0, 0, 0, 0.5)",
      borderRadius: "1rem",
    },
    characterBox: {
      width: "100%",
      position: "relative" as const,
      cursor: "pointer",
      transition: "all 0.3s ease",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      perspective: "1000px",
      overflow: "hidden",
      border: "2px solid transparent",
      borderRadius: "0.5rem",
      background: "rgba(0, 0, 0, 0.3)",
    },
    character: {
      width: "100%",
      height: "100%",
      position: "relative" as const,
      overflow: "hidden",
      imageRendering: "pixelated" as const,
    },
    selected: {
      transform: "scale(1.05)",
      borderColor: "rgb(74, 222, 128)",
      boxShadow: "0 0 20px rgba(74, 222, 128, 0.3)",
    },
    spritesheet: {
      position: "absolute" as const,
      minWidth: "calc(1024px + 32px)",
      height: "calc(1024px + 32px)",
      imageRendering: "pixelated" as const,
      transformOrigin: "top left",
    },
    characterName: {
      position: "absolute" as const,
      bottom: "-25px",
      left: "50%",
      transform: "translateX(-50%)",
      color: "white",
      fontSize: "0.9rem",
      whiteSpace: "nowrap" as const,
      textAlign: "center" as const,
      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
    },
  };

  const getCharacterName = (index) => {
    const names = [
      "Wanderer", "Bergsteiger", "Scout", "Ranger",
      "Abenteurer", "Entdecker", "Naturfreund", "Pfadfinder",
      "Kletterer", "Forscher", "Guide", "Sammler",
      "Camper", "Tracker", "Pionier", "Navigator",
      "Späher", "Waldläufer", "Reisender", "Erkunder",
      "Wanderführer", "Naturkundler", "Bergführer", "Wegweiser"
    ];
    return names[index];
  };

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setCharacterFrame((prev) => (prev + 1) % 2); // Toggle between 0 and 1 for idle animation
    }, 500); // Change frame every 500ms

    return () => clearInterval(animationInterval);
  }, []);

  useEffect(() => {
    if (phase === "intro" && introIndex < introTexts.length) {
      const timer = setTimeout(() => {
        setIntroIndex(introIndex + 1);
      }, 4000);
      return () => clearTimeout(timer);
    } else if (introIndex >= introTexts.length - 1) {
      setShowOptions(true);
    }
  }, [introIndex, phase]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const applyLaterEffects = () => {
    if (laterEffectsQueue.length > 0) {
      const effects = laterEffectsQueue.shift();
      setCapital((prev) => prev + (effects.capital || 0));
      setEnergy((prev) =>
        Math.min(100, Math.max(0, prev + (effects.energy || 0)))
      );
      setHealth((prev) =>
        Math.min(100, Math.max(0, prev + (effects.health || 0)))
      );
      setLaterEffectsQueue(laterEffectsQueue);
    }
  };

  useEffect(() => {
    if (phase === "game") {
      applyLaterEffects();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [day]);

  const handleDecision = (option) => {
    const { effects, message, laterEffects, tip } = option;
    setSelectedOption(message);
    setCapital((prev) => prev + (effects.capital || 0));
    setEnergy((prev) =>
      Math.min(100, Math.max(0, prev + (effects.energy || 0)))
    );
    setHealth((prev) =>
      Math.min(100, Math.max(0, prev + (effects.health || 0)))
    );
    setLog((prevLog) => [...prevLog, `${message}`]);

    if (laterEffects) {
      setLaterEffectsQueue((prevQueue) => [...prevQueue, laterEffects]);
    }

    if (tip) {
      setCurrentTip(tip);
      setShowTip(true);
    }

    setTimeout(() => {
      setSelectedOption(null);
      setShowTip(false);

      if (phase === "preparation") {
        if (preparationStep < preparationDecisions.length - 1) {
          setPreparationStep((prevStep) => prevStep + 1);
        } else {
          setPhase("routeSelection");
        }
      } else if (phase === "game") {
        if (day >= 30 || health <= 0 || energy <= 0 || capital <= 0) {
          setPhase("end");
        } else {
          setDay((prevDay) => prevDay + 1);
        }
      }
    }, 5000);
  };

  const useJoker = (jokerType) => {
    if (jokerUsed[jokerType]) return;

    const updatedJokerUsed = { ...jokerUsed, [jokerType]: true };
    setJokerUsed(updatedJokerUsed);

    if (jokerType === "emergencySupply") {
      setCapital((prev) => prev + 10);
      setEnergy((prev) => Math.min(100, prev + 5));
      setHealth((prev) => Math.min(100, prev + 5));
    } else if (jokerType === "energyBoost") {
      setEnergy((prev) => Math.min(100, prev + 15));
    } else if (jokerType === "luckyCharm") {
      setHealth((prev) => Math.min(100, prev + 10));
      setEnergy((prev) => Math.min(100, prev + 5));
    }
  };

  const getBarColor = (value) => {
    if (value > 60) return "bg-greenDefault";
    if (value > 30) return "bg-yellow-500";
    return "bg-red-500";
  };

  let currentDecision;
  if (phase === "preparation") {
    currentDecision = preparationDecisions[preparationStep];
  } else if (phase === "game") {
    if (selectedRoute === "easy") {
      currentDecision = easyDecisions[day - 1];
    } else if (selectedRoute === "medium") {
      currentDecision = mediumDecisions[day - 1];
    } else if (selectedRoute === "hard") {
      currentDecision = hardDecisions[day - 1];
    }
  }

  const routeOptions = [
    { value: 0, label: "Leicht", route: "easy" },
    { value: 50, label: "Mittel", route: "medium" },
    { value: 100, label: "Anspruchsvoll", route: "hard" },
  ];
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const confirmRouteSelection = () => {
    let selected;
    if (sliderValue < 33) {
      selected = "easy";
    } else if (sliderValue < 66) {
      selected = "medium";
    } else {
      selected = "hard";
    }
    selectRoute(selected);
  };

  if (phase === "start") {
    return (
      <div style={startScreenStyle}>
        <div style={{
          background: "rgba(0, 0, 0, 0.7)",
          padding: "2rem",
          borderRadius: "10px",
          textAlign: "center",
          color: "white",
        }}>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Wanderreise</h1>
          <button
            onClick={toggleMusic}
            style={{
              padding: "1rem 2rem",
              margin: "1rem",
              fontSize: "1.2rem",
              backgroundColor: isMusicEnabled ? "#4CAF50" : "#f44336",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Musik {isMusicEnabled ? "Aus" : "An"}
          </button>
          <button
            onClick={startGame}
            style={{
              padding: "1rem 2rem",
              margin: "1rem",
              fontSize: "1.2rem",
              backgroundColor: "#2196F3",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Spiel Starten
          </button>
        </div>
      </div>
    );
  }

  if (phase === "character-select") {
    return (
      <div style={characterSelectionStyle.container}>
        <h2 className="text-4xl mb-8 text-white font-bold">Wähle deinen Charakter</h2>
        <div style={characterSelectionStyle.grid}>
          {[...Array(TOTAL_CHARACTERS)].map((_, index) => {
            const row = Math.floor(index / COLUMNS);
            const col = index % COLUMNS;
            const isHovered = hoveredCharacter === index;
            const isSelected = selectedCharacter === index;
            
            return (
              <div
                key={index}
                onClick={() => selectCharacter(index)}
                onMouseEnter={() => setHoveredCharacter(index)}
                onMouseLeave={() => setHoveredCharacter(null)}
                style={{
                  ...characterSelectionStyle.characterBox,
                  ...(isSelected ? characterSelectionStyle.selected : {}),
                }}
                className={`rounded-lg ${
                  isSelected
                    ? "border-4 border-greenDefault bg-greenDefault bg-opacity-20"
                    : "border-4 border-gray-700 hover:border-gray-500"
                }`}
              >
                <div style={{
                  ...characterSelectionStyle.character,
                  transform: isHovered || isSelected ? 'scale(1.1)' : 'scale(1)',
                  transition: 'transform 0.3s ease',
                }}>
                  <img
                    src={playerChoiceSprite}
                    alt={`Character ${index + 1}`}
                    style={{
                      ...characterSelectionStyle.spritesheet,
                      transform: `translate(-${(col * SPRITE_WIDTH) + 32}px, -${(row * SPRITE_HEIGHT) + 32}px) `,
                      transition: 'transform 0.3s ease',
                    }}
                  />
                </div>
                <div style={characterSelectionStyle.characterName}>
                  {getCharacterName(index)}
                </div>
              </div>
            );
          })}
        </div>
        {selectedCharacter !== null && (
          <div className="mt-12 flex flex-col items-center">
            <div className="bg-black bg-opacity-50 p-8 rounded-xl text-center">
              <div style={{
                width: `${DISPLAY_SIZE * 1.5}px`,
                height: `${DISPLAY_SIZE * 1.5}px`,
                margin: "0 auto",
                position: "relative",
                overflow: "hidden",
                imageRendering: "pixelated",
              }}>
                <img
                  src={playerChoiceSprite}
                  alt={`Selected Character ${selectedCharacter + 1}`}
                  style={{
                    ...characterSelectionStyle.spritesheet,
                    transform: `translate(-${(selectedCharacter % COLUMNS) * SPRITE_WIDTH}px, -${Math.floor(selectedCharacter / COLUMNS) * SPRITE_HEIGHT}px) scale(${(DISPLAY_SIZE * 1.5)/SPRITE_HEIGHT}) ${1 + Math.sin(characterFrame * Math.PI) * 0.05}`,
                    transition: 'transform 0.3s ease',
                  }}
                />
              </div>
              <p className="text-2xl mb-2 text-greenDefault font-bold">
                {getCharacterName(selectedCharacter)}
              </p>
              <p className="text-gray-300 mb-4">
                Ein erfahrener Wanderer der Eifel
              </p>
              <button
                onClick={() => setPhase("intro")}
                className="bg-greenDefault py-3 px-12 rounded-xl"
              >
                Abenteuer beginnen
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-[#151a1e] text-[#dbd1b7] relative">
      <audio id="audio" ref={audioRef} loop autoPlay>
        <source src="./forest.mp3" type="audio/mpeg" />
      </audio>

      {phase === "game" && (
        <div className="w-16 bg-[#202326] flex flex-col items-center py-4 space-y-4">
          <button
            onClick={() => useJoker("emergencySupply")}
            disabled={jokerUsed.emergencySupply}
            className={`relative group w-12 h-12 rounded-full flex items-center justify-center ${
              jokerUsed.emergencySupply ? "bg-gray-900" : "bg-[#444542]"
            }`}
          >
            <FirstAidKit size={24} color="#dbd1b7" weight="bold" />
            <span className="absolute left-16 whitespace-nowrap bg-black text-xs p-2 rounded opacity-0 group-hover:opacity-100 z-40">
              Notfallversorgung: +10 €, +5 Energie, +5 Gesundheit
            </span>
          </button>
          <button
            onClick={() => useJoker("energyBoost")}
            disabled={jokerUsed.energyBoost}
            className={`relative group w-12 h-12 rounded-full flex items-center justify-center ${
              jokerUsed.energyBoost ? "bg-gray-900" : "bg-[#444542]"
            }`}
          >
            <Lightning size={24} color="#dbd1b7" weight="bold" />
            <span className="absolute left-16 whitespace-nowrap bg-black text-xs p-2 rounded opacity-0 group-hover:opacity-100 z-40">
              Energiekick: +15 Energie
            </span>
          </button>
          <button
            onClick={() => useJoker("luckyCharm")}
            disabled={jokerUsed.luckyCharm}
            className={`relative group w-12 h-12 rounded-full flex items-center justify-center ${
              jokerUsed.luckyCharm ? "bg-gray-900" : "bg-[#444542]"
            }`}
          >
            <Heart size={24} color="#dbd1b7" weight="bold" />
            <span className="absolute left-16 whitespace-nowrap bg-black text-xs p-2 rounded opacity-0 group-hover:opacity-100 z-40">
              Glückspilz: +10 Gesundheit, +5 Energie
            </span>
          </button>
        </div>
      )}

      <div className="flex-1 flex flex-col justify-center items-center px-4 relative">
        {phase === "intro" && (
          <div>
            {introTexts.map((text, index) => (
              <p
                key={index}
                className={`text-3xl text-center mb-4 transition-opacity duration-1000 animate-fly-away ${
                  index === introIndex ? "opacity-100 block" : "opacity-0 hidden"
                }`}
              >
                {text}
              </p>
            ))}
            {showOptions && (
              <div className="mt-6 flex flex-col justify-center items-center gap-5">
                <span className="text-3xl text-center">
                  Möchtest du jetzt deine Reise beginnen?
                </span>
                <div>
                  <button
                    onClick={startPreparation}
                    className="bg-greenDefault border border-greenDefault py-2 px-8 rounded-xl mx-2"
                  >
                    Ja
                  </button>
                  <button
                    onClick={() => (window.location.href = "/")}
                    className="border border-greenDefault py-2 px-4 rounded-xl mx-2"
                  >
                    Nein
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {phase === "preparation" && currentDecision && (
          <div className="text-center">
            {selectedOption && (
              <div>
                <p className="text-2xl font-bold animate-fly-away">
                  {selectedOption}
                </p>
                {showTip && (
                  <p className="mt-4 text-lg italic animate-fade-in">
                    {currentTip}
                  </p>
                )}
              </div>
            )}
            {!selectedOption && (
              <div>
                <p className="mb-10 text-3xl">{currentDecision.text}</p>
                <div className="flex flex-col justify-center items-center gap-2">
                  {currentDecision.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleDecision(option)}
                      className={`py-2 px-4 rounded-lg mb-2 w-full max-w-xs font-bold ${
                        option.effectType === "positive"
                          ? "bg-green-600 hover:bg-green-700"
                          : option.effectType === "negative"
                          ? "bg-red-600 hover:bg-red-700"
                          : "bg-yellow-600 hover:bg-yellow-700"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {phase === "routeSelection" && (
          <div className="text-center">
            <p className="mb-10 text-3xl">
              Wähle die Schwierigkeit deiner Route:
            </p>
            <div className="w-full max-w-md">
              <input
                type="range"
                min="0"
                max="100"
                value={sliderValue}
                onChange={handleSliderChange}
                className="w-full"
                style={{ accentColor: "#4ade80" }}
              />
              <div className="flex justify-between mt-2">
                <span>{sliderValue < 33 ? "Leicht" : sliderValue < 66 ? "Mittel" : "Anspruchsvoll"}</span>
                <span>
                  {sliderValue}%
                </span>
              </div>
              <button
                onClick={confirmRouteSelection}
                className="bg-blue-500 py-2 px-6 rounded-lg mt-4"
              >
                Bestätigen
              </button>
            </div>
          </div>
        )}

        {phase === "game" && currentDecision && (
          <>
            <div className="mb-4">
              <p className="text-xl font-bold mb-2 flex flex-col absolute top-5 left-5">
                <span>Budget</span> <span className="text-4xl">{capital}€</span>
              </p>
              <p className="text-xl font-bold mb-2 flex flex-col text-right absolute top-5 right-5">
                <span>Tag</span> <span className="text-4xl">{day}</span>
              </p>
              <div className="absolute bottom-5 left-5">
                <div className="flex items-center justify-between mb-2">
                  <p className="mr-2">Energie:</p>
                  <div className="w-32 h-4 bg-gray-700 rounded">
                    <div
                      className={`${getBarColor(energy)} h-full rounded`}
                      style={{ width: `${energy}%` }}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="mr-2">Gesundheit:</p>
                  <div className="w-32 h-4 bg-gray-700 rounded">
                    <div
                      className={`${getBarColor(health)} h-full rounded`}
                      style={{ width: `${health}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center relative">
              {selectedOption && (
                <div>
                  <p className="text-2xl font-bold animate-fly-away">
                    {selectedOption}
                  </p>
                  {showTip && (
                    <p className="mt-4 text-lg italic animate-fade-in">
                      {currentTip}
                    </p>
                  )}
                </div>
              )}
              {!selectedOption && (
                <div>
                  <p className="mb-10 text-3xl">{currentDecision.text}</p>
                  <div className="flex flex-col justify-center items-center gap-2">
                    {currentDecision.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleDecision(option)}
                        className={`py-2 px-4 rounded-lg mb-2 w-full max-w-xs font-bold ${
                          option.effectType === "positive"
                            ? "bg-green-600 hover:bg-green-700"
                            : option.effectType === "negative"
                            ? "bg-red-600 hover:bg-red-700"
                            : "bg-yellow-600 hover:bg-yellow-700"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {phase === "end" && (
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Spielende</h1>
            <p className="mb-6">
              {health <= 0 || energy <= 0 || capital <= 0
                ? "Deine Reise musste vorzeitig beendet werden. Versuche es noch einmal!"
                : "Herzlichen Glückwunsch! Du hast die 30 Tage erfolgreich überstanden."}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-500 py-2 px-6 rounded-lg"
            >
              Noch einmal spielen
            </button>
          </div>
        )}
      </div>

      {phase === "game" && (
        <div className="w-16 bg-[#202326] flex flex-col items-center py-4 space-y-1">
          {[...Array(30).keys()].map((index) => (
            <div
              key={index}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                index + 1 === day
                  ? "bg-orange-500"
                  : index + 1 < day
                  ? "bg-gray-500"
                  : "bg-[#444542]"
              }`}
            >
              <span className="text-xs">{index + 1}</span>
            </div>
          ))}
        </div>
      )}
      <Link
        className="flex items-center absolute bottom-5 left-1/2 -translate-x-1/2"
        to="/"
      >
        <img src={logoImg} alt="Logo" className="w-[80px] min-w-[80px]" />
      </Link>
    </div>
  );
};

export default Game;