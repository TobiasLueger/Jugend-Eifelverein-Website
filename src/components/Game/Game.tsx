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

const Game = () => {
  const [phase, setPhase] = useState("intro");
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

  const introTexts = [
    "Stell dir vor, du bist auf einer 30-tägigen Wanderreise.",
    "Dein Budget ist begrenzt.",
    "Du musst deine Energie und Gesundheit sorgfältig managen.",
    "Wirst du es schaffen, alle Herausforderungen zu meistern?",
  ];
  const [introIndex, setIntroIndex] = useState(0);
  const [showOptions, setShowOptions] = useState(false);

  const audioRef = useRef(null);

  const startPreparation = async () => {
    setPhase("preparation");
    try {
      if (audioRef.current) {
        await audioRef.current.play();
      }
    } catch (error) {
      console.error("Audio playback failed:", error);
    }
  };

  const selectRoute = (route) => {
    setSelectedRoute(route);
    setPhase("game");
  };

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

  // Funktion zum Anwenden von laterEffects
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

    // Füge späteren Effekt hinzu, falls vorhanden
    if (laterEffects) {
      setLaterEffectsQueue((prevQueue) => [...prevQueue, laterEffects]);
    }

    // Zeige den Tipp an
    if (tip) {
      setCurrentTip(tip);
      setShowTip(true);
    }

    // Verzögere die Anzeige der nächsten Entscheidung, um die Animation abzuwarten
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

  // Bestimmen der aktuellen Entscheidung basierend auf dem Phase und Route
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

  // Slider-Optionen für die Routenwahl
  const routeOptions = [
    { value: 0, label: "Leicht", route: "easy" },
    { value: 50, label: "Mittel", route: "medium" },
    { value: 100, label: "Anspruchsvoll", route: "hard" },
  ];
  const [sliderValue, setSliderValue] = useState(50);

  // Funktion zur Handhabung der Slider-Änderung
  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  // Funktion zur Bestätigung der Routenwahl
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

  return (
    <div className="flex h-screen bg-[#151a1e] text-[#dbd1b7] relative">
      <audio id="audio" ref={audioRef} loop autoPlay>
        <source src="./forest.mp3" type="audio/mpeg" />
      </audio>

      {/* Left Sidebar for Jokers */}
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

      {/* Main Content */}
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

      {/* Right Sidebar for Days */}
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