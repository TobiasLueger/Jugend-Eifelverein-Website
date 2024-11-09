// Aktualisiertes Entscheidungsarray mit ausgeschmückten Texten und einer finalen 30. Entscheidung

export const decisions = [
  {
    "text": "Der große Tag deiner 30-tägigen Wanderung steht bevor. Du stehst im Outdoor-Laden, um deine Ausrüstung auszuwählen. Vor dir liegen zwei Optionen: Wirst du dich für günstiges Equipment entscheiden, das dein Budget schont, oder investierst du in hochwertiges Equipment, das dir vielleicht besser dient?",
    "options": [
      {
        "label": "Günstiges Equipment",
        "effects": { "capital": -50, "health": -10 },
        "message": "Du hast günstiges Equipment gewählt, was sich später als riskant erweisen könnte.",
        "laterEffects": { "health": -5 },
        "tip": "Günstige Ausrüstung kann kurzfristig Geld sparen, aber langfristig zu Problemen führen.",
        "effectType": "negative"
      },
      {
        "label": "Hochwertiges Equipment",
        "effects": { "capital": -100 },
        "message": "Du hast hochwertiges Equipment gewählt – es hält hoffentlich die gesamte Wanderung durch.",
        "tip": "Qualitätsausrüstung ist eine Investition in Sicherheit und Komfort.",
        "effectType": "positive"
      }
    ]
  },
  {
    "text": "Während du deinen Rucksack packst, bemerkst du, dass der Platz begrenzt ist. Du stehst vor der Entscheidung: Nimmst du ein Erste-Hilfe-Set mit, das Platz und Gewicht kostet, oder sparst du dir den Platz für andere Dinge?",
    "options": [
      {
        "label": "Mitnehmen",
        "effects": { "capital": -30, "health": +10 },
        "message": "Du hast ein Erste-Hilfe-Set mitgenommen, das dir im Notfall hilft.",
        "tip": "Ein Erste-Hilfe-Set kann bei Verletzungen lebensrettend sein.",
        "effectType": "positive"
      },
      {
        "label": "Nicht mitnehmen",
        "effects": { "health": -10 },
        "message": "Du hast kein Erste-Hilfe-Set dabei – das könnte später problematisch werden.",
        "laterEffects": { "health": -10 },
        "tip": "Ohne Erste-Hilfe-Set bist du bei Verletzungen aufgeschmissen.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Am ersten Tag deiner Wanderung stehst du vor einer Weggabelung. Drei Pfade liegen vor dir: ein einfacher Weg durch das Tal, ein mittelschwerer Pfad durch den Wald und ein anspruchsvoller Anstieg über den Bergkamm. Welchen Weg wählst du?",
    "options": [
      {
        "label": "Leichte Route",
        "effects": { "energy": -5, "reward": +5 },
        "message": "Die leichte Route hat dir einen entspannten Tag gebracht.",
        "tip": "Leichte Routen sind weniger anstrengend und sicherer.",
        "effectType": "positive"
      },
      {
        "label": "Mittlere Route",
        "effects": { "energy": -10, "reward": +10 },
        "message": "Du hast die mittlere Route gewählt und schöne Landschaften gesehen.",
        "tip": "Mittelschwere Routen bieten eine gute Balance zwischen Herausforderung und Genuss.",
        "effectType": "positive"
      },
      {
        "label": "Anspruchsvolle Route",
        "effects": { "energy": -20, "health": -5, "reward": +20 },
        "message": "Die anspruchsvolle Route war hart, aber die Aussicht war es wert.",
        "tip": "Anspruchsvolle Routen erfordern Fitness und Erfahrung.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Am vierten Tag erwachst du zu prasselndem Regen. Dein Zelt ist nass, und der Himmel ist grau verhangen. Du musst entscheiden: Brichst du trotz des schlechten Wetters auf oder wartest du, bis es aufklart?",
    "options": [
      {
        "label": "Bei schlechtem Wetter starten",
        "effects": { "energy": -15, "health": -10 },
        "message": "Das schlechte Wetter hat dir Energie und Gesundheit gekostet.",
        "laterEffects": { "health": -5 },
        "tip": "Schlechtes Wetter erhöht das Risiko von Unfällen und Krankheiten.",
        "effectType": "negative"
      },
      {
        "label": "Warten, bis besseres Wetter ist",
        "effects": { "energy": -5 },
        "message": "Du hast auf besseres Wetter gewartet und etwas Energie verloren.",
        "tip": "Geduld kann helfen, Risiken zu minimieren.",
        "effectType": "positive"
      }
    ]
  },
  {
    "text": "Dein Wanderpartner stolpert über eine Wurzel und verletzt sich am Knöchel. Ihr seid weit entfernt von Hilfe. Wie reagierst du in dieser kritischen Situation?",
    "options": [
      {
        "label": "Erste Hilfe leisten",
        "effects": { "energy": -10, "health": +10 },
        "message": "Du hast deinem Partner geholfen und ihm so die Wanderung erleichtert.",
        "tip": "Anderen zu helfen stärkt den Teamgeist und kann Leben retten.",
        "effectType": "positive"
      },
      {
        "label": "Abbrechen",
        "effects": { "capital": -10 },
        "message": "Du hast die Wanderung abgebrochen, um dich um deinen Partner zu kümmern.",
        "tip": "Manchmal ist es notwendig, Pläne zu ändern, um Sicherheit zu gewährleisten.",
        "effectType": "neutral"
      },
      {
        "label": "Alleine weitergehen",
        "effects": { "health": -5 },
        "message": "Du hast beschlossen, allein weiterzugehen und ein gewisses Risiko in Kauf genommen.",
        "laterEffects": { "health": -10 },
        "tip": "Alleine zu wandern kann gefährlich sein, besonders nach einem Vorfall.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Auf deinem Weg durch den Wald entdeckst du Müll, den andere Wanderer hinterlassen haben. Es ist nicht viel, aber es stört die natürliche Schönheit. Was wirst du tun?",
    "options": [
      {
        "label": "Mitnehmen",
        "effects": { "energy": -5, "reward": +10 },
        "message": "Du hast den Müll aufgesammelt und die Natur sauberer hinterlassen.",
        "tip": "Umweltbewusstsein trägt zum Schutz der Natur bei.",
        "effectType": "positive"
      },
      {
        "label": "Ignorieren",
        "effects": {},
        "message": "Du hast den Müll ignoriert und bist weitergegangen.",
        "tip": "Das Ignorieren von Umweltproblemen verschlimmert sie nur.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Die Dämmerung setzt ein, und du musst einen Platz zum Übernachten finden. In der Nähe gibt es einen sicheren Campingplatz, aber er ist ein Stück entfernt. Alternativ könntest du dich irgendwo niederlassen. Wie entscheidest du dich?",
    "options": [
      {
        "label": "Sicheren Platz suchen",
        "effects": { "energy": -5 },
        "message": "Du hast einen sicheren Schlafplatz gefunden und konntest gut ausruhen.",
        "tip": "Ein sicherer Schlafplatz ist wichtig für Erholung und Schutz.",
        "effectType": "positive"
      },
      {
        "label": "Irgendwo niederlassen",
        "effects": { "health": -5 },
        "message": "Der Platz war nicht ideal, was etwas an deiner Gesundheit gezerrt hat.",
        "laterEffects": { "health": -5 },
        "tip": "Ungeeignete Schlafplätze können zu Gesundheitsproblemen führen.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Deine Vorräte werden knapp, und du erreichst einen kleinen Laden in einem Bergdorf. Mit begrenztem Budget musst du entscheiden, ob du in hochwertige oder günstige Lebensmittel investierst. Was wählst du?",
    "options": [
      {
        "label": "Hochwertige Nahrung",
        "effects": { "capital": -10, "energy": +10 },
        "message": "Die hochwertige Nahrung hat dich gestärkt und gut ernährt.",
        "tip": "Gute Ernährung ist essenziell für Energie und Gesundheit.",
        "effectType": "positive"
      },
      {
        "label": "Günstige Nahrung",
        "effects": { "capital": -5, "energy": +5 },
        "message": "Die günstige Nahrung hat dir genug Energie gegeben.",
        "tip": "Budgetfreundliche Optionen können ausreichend sein, sollten aber nährstoffreich sein.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Dein Pfad teilt sich in einen malerischen Naturpfad und eine gut befestigte Hauptstraße. Der Naturpfad ist länger und anspruchsvoller, aber bietet atemberaubende Ausblicke. Welchen Weg schlägst du ein?",
    "options": [
      {
        "label": "Naturpfad",
        "effects": { "energy": -10, "reward": +10 },
        "message": "Der Naturpfad hat dir eine wundervolle Aussicht beschert.",
        "tip": "Naturpfade bieten schöne Erlebnisse, erfordern aber mehr Energie.",
        "effectType": "positive"
      },
      {
        "label": "Hauptstraße",
        "effects": { "energy": -5 },
        "message": "Du bist auf der Hauptstraße geblieben und hast Energie gespart.",
        "tip": "Hauptstraßen sind oft einfacher zu begehen.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Die nächsten Tage führen dich durch eine trockene Landschaft. Du musst entscheiden, ob du zusätzliches Wasser mitnimmst, was dein Gepäck schwerer macht, oder ob du darauf hoffst, unterwegs Wasserquellen zu finden.",
    "options": [
      {
        "label": "Quellen suchen",
        "effects": { "energy": -5, "health": -5 },
        "message": "Du hast Wasser gefunden, aber etwas Energie und Gesundheit verloren.",
        "tip": "Das Suchen von Wasser kann anstrengend sein und birgt Risiken.",
        "effectType": "negative"
      },
      {
        "label": "Eigenes Wasser mitnehmen",
        "effects": { "capital": -5 },
        "message": "Du hast Wasser mitgenommen, was deine Vorräte etwas reduziert hat.",
        "tip": "Genügend Wasser dabei zu haben ist wichtig für die Hydration.",
        "effectType": "positive"
      }
    ]
  },
  {
    "text": "Dein Zelt hat einen Riss, und dein Schlafsack ist beschädigt. Du könntest Zeit und Geld investieren, um die Ausrüstung zu reparieren, oder du setzt deine Reise fort und ignorierst die Probleme.",
    "options": [
      {
        "label": "Reparieren",
        "effects": { "capital": -5, "energy": -5 },
        "message": "Du hast deine Ausrüstung repariert und bist besser vorbereitet.",
        "tip": "Kleine Reparaturen verhindern größere Probleme später.",
        "effectType": "positive"
      },
      {
        "label": "Ignorieren",
        "effects": { "health": -10 },
        "message": "Die Ausrüstung wurde nicht repariert und hat später Probleme verursacht.",
        "laterEffects": { "health": -10 },
        "tip": "Defekte Ausrüstung kann zu Sicherheitsrisiken führen.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Ein Einheimischer erzählt dir von einer Abkürzung durch schwieriges Gelände, die dir einen ganzen Tag ersparen könnte. Überlegst du, diesen riskanten Weg zu nehmen?",
    "options": [
      {
        "label": "Abkürzung",
        "effects": { "energy": +10, "health": -10 },
        "message": "Die Abkürzung war anstrengend, aber hat dir Zeit gespart.",
        "tip": "Abkürzungen können Zeit sparen, aber auch gefährlich sein.",
        "effectType": "neutral"
      },
      {
        "label": "Geplante Route",
        "effects": {},
        "message": "Du bist auf der geplanten Route geblieben.",
        "tip": "Das Befolgen der geplanten Route ist oft sicherer.",
        "effectType": "positive"
      }
    ]
  },
  {
    "text": "Nach einer anstrengenden Woche fühlst du dich erschöpft. Du könntest früh aufbrechen, um mehr Strecke zu machen, oder ausschlafen, um dich zu erholen. Wie entscheidest du dich?",
    "options": [
      {
        "label": "Früh starten",
        "effects": { "energy": -10, "reward": +5 },
        "message": "Der frühe Start hat dir zusätzlichen Tagesfortschritt eingebracht.",
        "tip": "Früh zu starten kann helfen, mehr zu erreichen.",
        "effectType": "positive"
      },
      {
        "label": "Ausschlafen",
        "effects": { "energy": +5 },
        "message": "Das Ausschlafen hat dir neue Energie gebracht.",
        "tip": "Ausreichender Schlaf ist wichtig für die Regeneration.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Am Nachmittag erreichst du einen idyllischen Bach mit kristallklarem Wasser. Es bietet sich die Gelegenheit für eine Rast und Erfrischung. Nutzt du diese Chance?",
    "options": [
      {
        "label": "Rast machen",
        "effects": { "energy": +10, "capital": -5 },
        "message": "Du hast dich am Bach erfrischt, was dir neue Energie gab.",
        "tip": "Regelmäßige Pausen fördern die Erholung.",
        "effectType": "positive"
      },
      {
        "label": "Weitergehen",
        "effects": { "energy": -5 },
        "message": "Du bist weitergewandert und hast etwas Energie verloren.",
        "tip": "Ohne Pausen kann die Ermüdung schneller einsetzen.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "In der Ferne siehst du eine Herde Wildtiere. Es könnte spannend sein, sie näher zu beobachten, aber es besteht auch ein Risiko. Was machst du?",
    "options": [
      {
        "label": "Beobachten",
        "effects": { "reward": +10, "health": -5 },
        "message": "Die Wildtierbeobachtung war ein Erlebnis, aber auch riskant.",
        "tip": "Wildtiere aus sicherer Entfernung zu beobachten ist wichtig.",
        "effectType": "neutral"
      },
      {
        "label": "Meiden",
        "effects": {},
        "message": "Du hast die Herde gemieden und bist sicher weitergewandert.",
        "tip": "Das Meiden von Wildtieren reduziert Risiken.",
        "effectType": "positive"
      }
    ]
  },
  {
    "text": "Vor dir liegt der höchste Berg der gesamten Wanderung. Du hast die Möglichkeit, einen Tag extra für Training und Akklimatisierung zu nutzen. Nutzt du diese Chance?",
    "options": [
      {
        "label": "Trainieren",
        "effects": { "energy": -10, "health": +10 },
        "message": "Das Training hat dich vorbereitet und stärker gemacht.",
        "tip": "Vorbereitung erhöht die Leistungsfähigkeit.",
        "effectType": "positive"
      },
      {
        "label": "Direkt starten",
        "effects": { "health": -5 },
        "message": "Das Auslassen des Trainings hat deine Gesundheit etwas beeinträchtigt.",
        "tip": "Ohne Vorbereitung steigt das Verletzungsrisiko.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Ein nahegelegenes Dorf bietet die Möglichkeit, Vorräte aufzustocken und vielleicht ein wenig Kultur zu erleben. Allerdings liegt es etwas abseits deiner Route. Besuchst du das Dorf?",
    "options": [
      {
        "label": "Dorf besuchen",
        "effects": { "capital": -20, "reward": +10 },
        "message": "Du hast Vorräte gekauft und das Dorf besucht.",
        "tip": "Das Auffüllen von Vorräten ist wichtig für lange Reisen.",
        "effectType": "positive"
      },
      {
        "label": "Weitermachen",
        "effects": { "energy": -10 },
        "message": "Ohne neue Vorräte bist du weitergezogen und etwas erschöpft.",
        "tip": "Mangelnde Versorgung kann zu Erschöpfung führen.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Die Dorfbewohner laden dich zu einem traditionellen Fest ein. Es könnte eine einmalige Erfahrung sein, aber es kostet Zeit und Energie. Nimmst du die Einladung an?",
    "options": [
      {
        "label": "Zeit verbringen",
        "effects": { "energy": -5, "reward": +15 },
        "message": "Du hast einen kulturellen Austausch genossen und viel gelernt.",
        "tip": "Kultureller Austausch bereichert die Erfahrungen.",
        "effectType": "positive"
      },
      {
        "label": "Weiterwandern",
        "effects": {},
        "message": "Du hast den Austausch verpasst und bist weitergewandert.",
        "tip": "Manchmal lohnt es sich, Zeit für neue Erfahrungen zu nehmen.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Die Sonne brennt heiß, und du bemerkst, dass deine Haut bereits gerötet ist. Du hast Sonnencreme dabei, aber sie ist knapp. Trägst du sie auf?",
    "options": [
      {
        "label": "Verwenden",
        "effects": { "capital": -5, "health": +5 },
        "message": "Die Sonnencreme hat dich vor Sonnenbrand geschützt.",
        "tip": "Sonnenschutz ist wichtig für die Hautgesundheit.",
        "effectType": "positive"
      },
      {
        "label": "Sparen",
        "effects": { "health": -5 },
        "message": "Ohne Sonnencreme hattest du etwas gesundheitliche Einbußen.",
        "tip": "Unzureichender Sonnenschutz kann zu Hautschäden führen.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Nach einem langen Tag kannst du dir die Zeit nehmen, ein warmes Abendessen am Lagerfeuer zuzubereiten, oder du isst schnell etwas Kaltes, um früh schlafen zu gehen. Wie entscheidest du dich?",
    "options": [
      {
        "label": "Kochen",
        "effects": { "capital": -5, "energy": +10 },
        "message": "Ein warmes Abendessen am Lagerfeuer stärkte dich für den nächsten Tag.",
        "tip": "Warme Mahlzeiten fördern die Regeneration.",
        "effectType": "positive"
      },
      {
        "label": "Kalt essen",
        "effects": { "energy": +5 },
        "message": "Ein einfaches Essen gab dir etwas Energie für die Nacht.",
        "tip": "Kaltes Essen spart Ressourcen, bietet aber weniger Komfort.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Du fühlst dich schwach und ausgelaugt. Deine regulären Vorräte reichen nicht mehr aus. Überlegst du, deine Notfallration jetzt schon zu verwenden?",
    "options": [
      {
        "label": "Verwenden",
        "effects": { "capital": -10, "energy": +20 },
        "message": "Die Notfallration hat dir dringend benötigte Energie zurückgebracht.",
        "tip": "Notfallrationen sollten sparsam verwendet werden.",
        "effectType": "positive"
      },
      {
        "label": "Sparen",
        "effects": {},
        "message": "Du hast die Notfallration für später aufbewahrt.",
        "tip": "Das Aufheben von Ressourcen kann in kritischen Momenten helfen.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Du hast dich am Fuß verletzt. Du könntest einen Tag ruhen, um dich zu erholen, oder trotz Schmerzen weiterwandern. Was tust du?",
    "options": [
      {
        "label": "Ruhen",
        "effects": { "energy": +10, "capital": -5 },
        "message": "Die Ruhepause hat dir bei der Regeneration geholfen.",
        "tip": "Bei Verletzungen ist Ruhe essentiell für die Heilung.",
        "effectType": "positive"
      },
      {
        "label": "Weiterwandern",
        "effects": { "health": -10 },
        "message": "Die Verletzung hat dir auf dem weiteren Weg zu schaffen gemacht.",
        "laterEffects": { "health": -10 },
        "tip": "Überanstrengung kann Verletzungen verschlimmern.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Du triffst auf eine Gruppe von Wanderern, die in dieselbe Richtung unterwegs sind. Sie laden dich ein, dich ihnen anzuschließen. Schließt du dich der Gruppe an oder gehst du allein weiter?",
    "options": [
      {
        "label": "Mit Gruppe",
        "effects": { "energy": -5, "reward": +10 },
        "message": "Die Gruppe hat dich unterstützt, und ihr habt zusammen den Tag genossen.",
        "tip": "In der Gruppe zu wandern kann sicherer und motivierender sein.",
        "effectType": "positive"
      },
      {
        "label": "Allein gehen",
        "effects": { "health": -10 },
        "message": "Alleine war es hart, und du hattest einige gesundheitliche Einbußen.",
        "tip": "Allein zu wandern erfordert mehr Vorsicht und kann belastender sein.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Vor dir liegt ein langer Abschnitt ohne Wasserstellen. Du kannst zusätzliches Wasser mitnehmen, was dein Gepäck erschwert, oder darauf vertrauen, dass du unterwegs etwas findest. Wie entscheidest du dich?",
    "options": [
      {
        "label": "Mehr Wasser",
        "effects": { "energy": -10, "health": +5 },
        "message": "Das zusätzliche Wasser hat dich besser versorgt, war aber schwer zu tragen.",
        "tip": "Genügend Wasser ist wichtig, aber es erhöht das Gewicht.",
        "effectType": "neutral"
      },
      {
        "label": "Weniger Wasser",
        "effects": { "energy": -5 },
        "message": "Du hast weniger Wasser mitgenommen und damit Gewicht gespart.",
        "laterEffects": { "health": -5 },
        "tip": "Zu wenig Wasser kann zu Dehydration führen.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Du benötigst neue Ausrüstung und hast die Wahl zwischen günstigen Standardprodukten und teureren, umweltfreundlichen Optionen. Für welche entscheidest du dich?",
    "options": [
      {
        "label": "Umweltfreundlich",
        "effects": { "capital": -10, "reward": +10 },
        "message": "Du hast umweltfreundliche Ausrüstung gekauft und die Natur geschont.",
        "tip": "Nachhaltigkeit schützt die Umwelt für zukünftige Generationen.",
        "effectType": "positive"
      },
      {
        "label": "Normale",
        "effects": { "capital": -5 },
        "message": "Du hast dich für normale Ausrüstung entschieden.",
        "tip": "Standardausrüstung kann günstiger sein, aber weniger umweltfreundlich.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Du hast dein Tagesziel noch nicht erreicht, aber die Nacht bricht herein. Du kannst entweder weiterwandern oder einen Rastplatz suchen. Was tust du?",
    "options": [
      {
        "label": "Weiterwandern",
        "effects": { "energy": -10, "health": -5 },
        "message": "Das Nachtwandern war anstrengend und ein wenig gefährlich.",
        "tip": "Nachts zu wandern erhöht das Unfallrisiko.",
        "effectType": "negative"
      },
      {
        "label": "Rasten",
        "effects": { "energy": +10 },
        "message": "Die Ruhe hat dir geholfen, deine Energie für den nächsten Tag aufzufüllen.",
        "tip": "Ausreichende Ruhe ist wichtig für die Leistungsfähigkeit.",
        "effectType": "positive"
      }
    ]
  },
  {
    "text": "Du hast die Möglichkeit, bei Sonnenaufgang aufzubrechen, um die kühlen Morgenstunden zu nutzen, oder später zu starten und ausgeruhter zu sein. Wie planst du deinen Tag?",
    "options": [
      {
        "label": "Sonnenaufgang",
        "effects": { "energy": -10, "reward": +5 },
        "message": "Der frühe Start hat dir Zeit gespart, aber dich etwas erschöpft.",
        "tip": "Früh zu starten kann effektiv sein, erfordert aber genug Schlaf vorher.",
        "effectType": "positive"
      },
      {
        "label": "Später starten",
        "effects": { "energy": +5 },
        "message": "Ein später Start hat dir mehr Energie gegeben.",
        "tip": "Ausgeschlafen zu sein verbessert die Leistungsfähigkeit.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Die Sonne scheint unerbittlich, und du hast einen Sonnenhut im Rucksack. Allerdings findest du ihn unbequem. Trägst du ihn trotzdem?",
    "options": [
      {
        "label": "Hut tragen",
        "effects": { "capital": -3, "health": +5 },
        "message": "Der Hut hat dir Schutz vor der Sonne geboten.",
        "tip": "Sonnenschutz kann vor Hitzschlag und Sonnenbrand schützen.",
        "effectType": "positive"
      },
      {
        "label": "Weglassen",
        "effects": { "health": -5 },
        "message": "Ohne Hut hattest du gesundheitliche Einbußen durch die Sonne.",
        "tip": "Ohne Schutz kann die Sonne gesundheitsschädlich sein.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Du kommst an einer atemberaubenden Aussicht vorbei. Ein Fotostopp würde Zeit kosten, aber die Erinnerung wäre unbezahlbar. Hältst du an, um Fotos zu machen?",
    "options": [
      {
        "label": "Fotos machen",
        "effects": { "energy": -5, "reward": +5 },
        "message": "Der Fotostopp brachte dir schöne Erinnerungen, hat dich aber etwas Energie gekostet.",
        "tip": "Erinnerungen festzuhalten kann die Reise bereichern.",
        "effectType": "positive"
      },
      {
        "label": "Weitergehen",
        "effects": {},
        "message": "Du hast auf den Fotostopp verzichtet und bist zügig weitergewandert.",
        "tip": "Manchmal ist es effizienter, ohne Unterbrechungen zu wandern.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "In der Dämmerung spürst du die ersten Mückenstiche. Du hast Insektenspray dabei, aber es reicht nicht für die gesamte Reise. Verwendest du es jetzt?",
    "options": [
      {
        "label": "Verwenden",
        "effects": { "capital": -5, "health": +5 },
        "message": "Das Insektenspray hat dich vor lästigen Insekten geschützt.",
        "tip": "Schutz vor Insektenstichen kann Krankheiten vorbeugen.",
        "effectType": "positive"
      },
      {
        "label": "Sparen",
        "effects": { "health": -5 },
        "message": "Ohne Spray wurdest du von Insekten gestochen, was deine Gesundheit beeinträchtigt hat.",
        "tip": "Insekten können Krankheiten übertragen.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Du begegnest einem Wanderer in Not, der dringend Proviant benötigt. Du könntest ihm etwas von deinem geben, aber deine eigenen Vorräte sind begrenzt. Was tust du?",
    "options": [
      {
        "label": "Verschenken",
        "effects": { "capital": -5, "reward": +10 },
        "message": "Du hast Proviant verschenkt und damit jemanden in Not geholfen.",
        "tip": "Hilfsbereitschaft stärkt das Gemeinschaftsgefühl.",
        "effectType": "positive"
      },
      {
        "label": "Nicht geben",
        "effects": {},
        "message": "Du hast deinen Proviant behalten.",
        "tip": "Eigene Vorräte zu schützen ist wichtig, aber Teilen kann helfen.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Dein Pfad führt entlang eines bekannten Trampelpfads, aber du könntest auch abseits der Wege neue Gebiete erkunden. Was wählst du?",
    "options": [
      {
        "label": "Auf Trampelpfad bleiben",
        "effects": { "energy": -5 },
        "message": "Der Trampelpfad war sicher, aber nicht besonders aufregend.",
        "tip": "Bekannte Wege sind sicherer und weniger anstrengend.",
        "effectType": "positive"
      },
      {
        "label": "Abseits gehen",
        "effects": { "energy": -10, "reward": +10 },
        "message": "Abseits des Pfades hast du schöne Entdeckungen gemacht.",
        "tip": "Abenteuer abseits der Wege können belohnend, aber riskant sein.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Du stehst kurz vor dem Ende deiner 30-tägigen Wanderung. Nur noch eine letzte Etappe trennt dich von deinem Ziel. Du hast die Wahl zwischen einem einfachen Weg durch das Tal oder einem anspruchsvollen Anstieg zu einem Gipfel mit atemberaubender Aussicht. Wie entscheidest du dich für deinen großen Abschluss?",
    "options": [
      {
        "label": "Einfachen Weg nehmen",
        "effects": { "energy": -5 },
        "message": "Du hast den einfachen Weg gewählt und erreichst dein Ziel ohne große Anstrengung.",
        "tip": "Manchmal ist es klug, auf Nummer sicher zu gehen, besonders am Ende einer langen Reise.",
        "effectType": "positive"
      },
      {
        "label": "Anspruchsvollen Weg zum Gipfel nehmen",
        "effects": { "energy": -15, "reward": +20 },
        "message": "Du hast den anspruchsvollen Weg gewählt und wurdest mit einer atemberaubenden Aussicht belohnt. Ein perfekter Abschluss deiner Reise.",
        "tip": "Der schwierigere Weg kann am Ende die lohnendere Erfahrung bieten.",
        "effectType": "positive"
      },
      {
        "label": "Eine Pause einlegen und den Moment genießen",
        "effects": { "energy": +10 },
        "message": "Du entscheidest dich, eine Pause einzulegen und die letzten Momente deiner Reise in Ruhe zu genießen.",
        "tip": "Sich Zeit zu nehmen, um das Erreichte zu reflektieren, kann sehr erfüllend sein.",
        "effectType": "positive"
      }
    ]
  }
];


// decisions.js

// Vorbereitungsentscheidungen
export const preparationDecisions = [
  {
    "text": "Der große Tag deiner 30-tägigen Wanderung steht bevor. Wie bereitest du dich vor?",
    "options": [
      {
        "label": "Ausführliche Planung",
        "effects": { "capital": -10, "energy": +5 },
        "message": "Du hast deine Route detailliert geplant und fühlst dich vorbereitet.",
        "tip": "Gute Planung kann helfen, unerwartete Schwierigkeiten zu vermeiden.",
        "effectType": "positive"
      },
      {
        "label": "Spontan loslegen",
        "effects": { "energy": -5 },
        "message": "Du entscheidest dich, spontan zu starten, was aufregend aber riskant sein kann.",
        "tip": "Spontanität kann zu unvorhergesehenen Herausforderungen führen.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Wähle deine Ausrüstung für die Wanderung.",
    "options": [
      {
        "label": "Günstiges Equipment",
        "effects": { "capital": -50, "health": -5 },
        "message": "Du hast günstiges Equipment gewählt. Es könnte weniger haltbar sein.",
        "laterEffects": { "health": -5 },
        "tip": "Günstige Ausrüstung kann kurzfristig Geld sparen, aber langfristig zu Problemen führen.",
        "effectType": "negative"
      },
      {
        "label": "Hochwertiges Equipment",
        "effects": { "capital": -100 },
        "message": "Du hast hochwertiges Equipment gewählt – es sollte die gesamte Wanderung durchhalten.",
        "tip": "Qualitätsausrüstung ist eine Investition in Sicherheit und Komfort.",
        "effectType": "positive"
      }
    ]
  },
  {
    "text": "Nimmst du ein Erste-Hilfe-Set mit?",
    "options": [
      {
        "label": "Mitnehmen",
        "effects": { "capital": -20, "health": +10 },
        "message": "Du hast ein Erste-Hilfe-Set mitgenommen, das dir im Notfall hilft.",
        "tip": "Ein Erste-Hilfe-Set kann bei Verletzungen lebensrettend sein.",
        "effectType": "positive"
      },
      {
        "label": "Nicht mitnehmen",
        "effects": { "health": -10 },
        "message": "Du hast kein Erste-Hilfe-Set dabei – das könnte später problematisch werden.",
        "laterEffects": { "health": -10 },
        "tip": "Ohne Erste-Hilfe-Set bist du bei Verletzungen aufgeschmissen.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Welche Art von Nahrung packst du ein?",
    "options": [
      {
        "label": "Hochwertige Nahrung",
        "effects": { "capital": -30, "energy": +10 },
        "message": "Du hast nährstoffreiche Lebensmittel eingepackt, die dir Energie geben.",
        "tip": "Gute Ernährung ist essenziell für Energie und Gesundheit.",
        "effectType": "positive"
      },
      {
        "label": "Günstige Nahrung",
        "effects": { "capital": -15, "energy": +5 },
        "message": "Du hast günstigere Lebensmittel gewählt, die weniger Energie liefern.",
        "tip": "Budgetfreundliche Optionen können ausreichend sein, sollten aber nährstoffreich sein.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Wie viel Wasser nimmst du mit?",
    "options": [
      {
        "label": "Zusätzliches Wasser mitnehmen",
        "effects": { "energy": -5, "health": +5 },
        "message": "Das zusätzliche Wasser erhöht dein Gewicht, hält dich aber hydriert.",
        "tip": "Genügend Wasser ist wichtig, aber es erhöht das Gewicht.",
        "effectType": "neutral"
      },
      {
        "label": "Nur das Nötigste",
        "effects": { "health": -5 },
        "message": "Du trägst weniger Gewicht, riskierst aber Dehydration.",
        "laterEffects": { "health": -5 },
        "tip": "Zu wenig Wasser kann zu Dehydration führen.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Packst du Luxusartikel wie ein Buch oder Musik ein?",
    "options": [
      {
        "label": "Ja, etwas für die Unterhaltung",
        "effects": { "capital": -10, "reward": +5 },
        "message": "Du hast Unterhaltung dabei, was die Reise angenehmer machen kann.",
        "tip": "Unterhaltung kann die Moral erhöhen, aber auch zusätzliches Gewicht bedeuten.",
        "effectType": "positive"
      },
      {
        "label": "Nein, nur das Nötigste",
        "effects": {},
        "message": "Du hast nur das Nötigste eingepackt, um Gewicht zu sparen.",
        "tip": "Weniger Gewicht erleichtert das Wandern.",
        "effectType": "neutral"
      }
    ]
  }
];

// Entscheidungen für die leichte Route
export const easyDecisions = [
  {
    "text": "Tag 1: Du startest deine Wanderung auf einem gut markierten Pfad. Das Wetter ist schön, und die Vögel zwitschern. Du hast die Wahl, entspannt zu wandern oder ein schnelleres Tempo anzuschlagen.",
    "options": [
      {
        "label": "Entspannt wandern",
        "effects": { "energy": -5, "reward": +5 },
        "message": "Du genießt die Natur in vollen Zügen und fühlst dich erfrischt.",
        "tip": "Ein gemächliches Tempo hilft, Energie zu sparen.",
        "effectType": "positive"
      },
      {
        "label": "Schnelleres Tempo",
        "effects": { "energy": -10 },
        "message": "Du legst mehr Strecke zurück, fühlst dich aber etwas erschöpft.",
        "tip": "Ein schnelleres Tempo verbraucht mehr Energie.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 2: Am Morgen entdeckst du einen schönen Aussichtspunkt abseits des Weges. Möchtest du den kleinen Umweg machen, um die Aussicht zu genießen?",
    "options": [
      {
        "label": "Aussichtspunkt besuchen",
        "effects": { "energy": -5, "reward": +5 },
        "message": "Die Aussicht war atemberaubend und hat sich gelohnt.",
        "tip": "Manchmal lohnt es sich, die extra Zeit für schöne Erlebnisse zu nehmen.",
        "effectType": "positive"
      },
      {
        "label": "Auf dem Weg bleiben",
        "effects": {},
        "message": "Du bleibst auf dem Hauptweg und sparst Energie.",
        "tip": "Das Einhalten der Route spart Zeit und Energie.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 3: Auf deinem Weg begegnest du einem freundlichen Einheimischen, der dir frisches Obst anbietet. Nimmst du das Angebot an?",
    "options": [
      {
        "label": "Obst annehmen",
        "effects": { "energy": +5 },
        "message": "Das Obst war lecker und hat dir Energie gegeben.",
        "tip": "Lokale Angebote können eine willkommene Stärkung sein.",
        "effectType": "positive"
      },
      {
        "label": "Ablehnen",
        "effects": {},
        "message": "Du bedankst dich höflich und setzt deinen Weg fort.",
        "tip": "Es ist in Ordnung, höflich abzulehnen, wenn du nicht sicher bist.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 4: Das Wetter ist etwas bedeckt, aber es bleibt trocken. Du hast die Möglichkeit, eine Abkürzung durch einen kleinen Wald zu nehmen. Entscheidest du dich dafür?",
    "options": [
      {
        "label": "Abkürzung nehmen",
        "effects": { "energy": -5, "reward": +5 },
        "message": "Die Abkürzung war angenehm und du hast etwas Zeit gespart.",
        "tip": "Manchmal kann eine Abkürzung sinnvoll sein, wenn das Risiko gering ist.",
        "effectType": "positive"
      },
      {
        "label": "Auf dem Hauptweg bleiben",
        "effects": {},
        "message": "Du bleibst auf dem Hauptweg und genießt die entspannte Wanderung.",
        "tip": "Der Hauptweg ist oft der sicherste.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 5: Du kommst an einem klaren Bach vorbei, der sich hervorragend zum Auffüllen deiner Wasserflasche eignet. Nutzt du die Gelegenheit?",
    "options": [
      {
        "label": "Wasser auffüllen",
        "effects": { "health": +5 },
        "message": "Du füllst deine Flasche mit frischem Quellwasser auf.",
        "tip": "Wasser aus natürlichen Quellen kann erfrischend sein, aber achte auf die Sauberkeit.",
        "effectType": "positive"
      },
      {
        "label": "Weitergehen",
        "effects": {},
        "message": "Du entscheidest dich, dein eigenes Wasser zu nutzen.",
        "tip": "Manchmal ist es sicherer, auf die eigene Versorgung zu vertrauen.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 6: Ein leichter Regen setzt ein. Du hast einen Regenschutz im Rucksack. Ziehst du ihn an?",
    "options": [
      {
        "label": "Regenschutz anziehen",
        "effects": {},
        "message": "Du bleibst trocken und setzt deine Wanderung fort.",
        "tip": "Gute Ausrüstung hilft, bei wechselhaftem Wetter vorbereitet zu sein.",
        "effectType": "positive"
      },
      {
        "label": "Ohne Regenschutz weitergehen",
        "effects": { "health": -5 },
        "message": "Du wirst etwas nass, aber es beeinträchtigt dich kaum.",
        "tip": "Nasses Wetter kann die Gesundheit beeinträchtigen.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 7: Du erreichst ein kleines Dorf, in dem heute ein Markt stattfindet. Möchtest du dir die Zeit nehmen, ihn zu besuchen?",
    "options": [
      {
        "label": "Markt besuchen",
        "effects": { "capital": -10, "reward": +10 },
        "message": "Du genießt die lokale Kultur und kaufst ein paar Kleinigkeiten.",
        "tip": "Lokale Märkte bieten Einblicke in die Kultur und können bereichernd sein.",
        "effectType": "positive"
      },
      {
        "label": "Weiterwandern",
        "effects": {},
        "message": "Du entscheidest dich, deine Wanderung ohne Unterbrechung fortzusetzen.",
        "tip": "Es ist wichtig, den eigenen Zeitplan im Blick zu behalten.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 8: Du fühlst dich etwas müde. Es bietet sich an, eine längere Pause einzulegen. Nimmst du dir die Zeit dafür?",
    "options": [
      {
        "label": "Längere Pause machen",
        "effects": { "energy": +10 },
        "message": "Die Pause hat dir gutgetan, du fühlst dich erholt.",
        "tip": "Regelmäßige Pausen fördern die Ausdauer.",
        "effectType": "positive"
      },
      {
        "label": "Weiterwandern",
        "effects": { "energy": -5 },
        "message": "Du setzt deinen Weg fort, fühlst dich aber etwas erschöpft.",
        "tip": "Überanstrengung kann zu schneller Ermüdung führen.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 9: Du hast die Möglichkeit, an einem geführten Naturspaziergang teilzunehmen, der etwa eine Stunde dauert. Interessiert dich das?",
    "options": [
      {
        "label": "Teilnehmen",
        "effects": { "energy": -5, "reward": +10 },
        "message": "Du lernst viel über die lokale Flora und Fauna.",
        "tip": "Bildung kann das Reiseerlebnis bereichern.",
        "effectType": "positive"
      },
      {
        "label": "Ablehnen",
        "effects": {},
        "message": "Du entscheidest dich, deinen eigenen Weg fortzusetzen.",
        "tip": "Es ist in Ordnung, den eigenen Plan zu verfolgen.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 10: Das Wetter ist perfekt für ein Picknick. Du hast noch Proviant dabei. Möchtest du eine längere Mittagspause einlegen?",
    "options": [
      {
        "label": "Picknick machen",
        "effects": { "energy": +5 },
        "message": "Das Picknick war erholsam und lecker.",
        "tip": "Gutes Essen kann die Moral heben.",
        "effectType": "positive"
      },
      {
        "label": "Weiterwandern",
        "effects": {},
        "message": "Du sparst dir die Zeit und isst später.",
        "tip": "Effiziente Zeiteinteilung hilft, das Tagesziel zu erreichen.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 11: Du kommst an einem kleinen See vorbei, in dem das Schwimmen erlaubt ist. Nutzt du die Gelegenheit für ein erfrischendes Bad?",
    "options": [
      {
        "label": "Schwimmen gehen",
        "effects": { "energy": +5 },
        "message": "Das Schwimmen war erfrischend und hat dir neue Energie gegeben.",
        "tip": "Eine Abkühlung kann belebend wirken.",
        "effectType": "positive"
      },
      {
        "label": "Weiterwandern",
        "effects": {},
        "message": "Du entscheidest dich, trocken zu bleiben und wanderst weiter.",
        "tip": "Manchmal ist es besser, am Ziel festzuhalten.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 12: Du entdeckst einen interessanten Vogel, den du noch nie gesehen hast. Möchtest du anhalten und ihn beobachten?",
    "options": [
      {
        "label": "Beobachten",
        "effects": { "reward": +5 },
        "message": "Du genießt den Moment und fühlst dich bereichert.",
        "tip": "Die Natur bietet viele schöne Momente, die es wert sind, genossen zu werden.",
        "effectType": "positive"
      },
      {
        "label": "Weitergehen",
        "effects": {},
        "message": "Du beschließt, nicht anzuhalten und setzt deinen Weg fort.",
        "tip": "Es ist wichtig, den eigenen Rhythmus zu finden.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 13: Eine leichte Brise bringt den Duft von Wildblumen zu dir. Du könntest etwas abseits des Weges gehen, um ein Feld voller Blumen zu sehen. Entscheidest du dich dafür?",
    "options": [
      {
        "label": "Blumenfeld besuchen",
        "effects": { "energy": -5, "reward": +5 },
        "message": "Die Blumen waren wunderschön und haben dich erfreut.",
        "tip": "Kleine Abstecher können das Erlebnis bereichern.",
        "effectType": "positive"
      },
      {
        "label": "Auf dem Weg bleiben",
        "effects": {},
        "message": "Du bleibst auf dem Hauptweg und genießt die Aussicht von dort.",
        "tip": "Manchmal ist weniger mehr.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 14: Du triffst auf einen anderen Wanderer, der dich um ein wenig Wasser bittet. Deine Vorräte sind ausreichend. Teilst du mit ihm?",
    "options": [
      {
        "label": "Wasser teilen",
        "effects": { "reward": +10 },
        "message": "Der Wanderer bedankt sich herzlich und wünscht dir alles Gute.",
        "tip": "Hilfsbereitschaft kann das Herz erwärmen.",
        "effectType": "positive"
      },
      {
        "label": "Ablehnen",
        "effects": {},
        "message": "Du entschuldigst dich und setzt deinen Weg fort.",
        "tip": "Es ist wichtig, auf die eigenen Bedürfnisse zu achten.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 15: Halbzeit deiner Wanderung! Du überlegst, ob du einen Ruhetag einlegen oder weiterwandern möchtest.",
    "options": [
      {
        "label": "Ruhetag einlegen",
        "effects": { "energy": +15 },
        "message": "Der Ruhetag hat dir gutgetan, du fühlst dich erfrischt.",
        "tip": "Pausen sind wichtig, um langfristig leistungsfähig zu bleiben.",
        "effectType": "positive"
      },
      {
        "label": "Weiterwandern",
        "effects": {},
        "message": "Du entscheidest dich, deinen Rhythmus beizubehalten.",
        "tip": "Kontinuität kann ebenfalls Vorteile bringen.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 16: Ein leichter Anstieg steht bevor, aber es gibt auch einen etwas längeren, flacheren Weg. Für welchen entscheidest du dich?",
    "options": [
      {
        "label": "Anstieg nehmen",
        "effects": { "energy": -5 },
        "message": "Der Anstieg war nicht allzu schwierig und du hast ihn gut gemeistert.",
        "tip": "Manchmal lohnt es sich, kleine Herausforderungen anzunehmen.",
        "effectType": "positive"
      },
      {
        "label": "Flacheren Weg nehmen",
        "effects": {},
        "message": "Du wählst den einfacheren Weg und kommst entspannt voran.",
        "tip": "Den Weg des geringsten Widerstands zu wählen, ist manchmal sinnvoll.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 17: Du findest Beerensträucher entlang des Weges. Sie sehen lecker aus. Möchtest du einige probieren?",
    "options": [
      {
        "label": "Beeren probieren",
        "effects": { "health": +5 },
        "message": "Die Beeren sind köstlich und geben dir einen Energieschub.",
        "tip": "Wilde Beeren können nahrhaft sein, aber achte darauf, dass sie essbar sind.",
        "effectType": "positive"
      },
      {
        "label": "Nicht probieren",
        "effects": {},
        "message": "Du entscheidest dich, kein Risiko einzugehen.",
        "tip": "Vorsicht ist geboten, wenn man sich nicht sicher ist.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 18: Das Wetter ist etwas windig, aber angenehm. Du könntest einen kleinen Drachen steigen lassen, den du dabei hast. Machst du das?",
    "options": [
      {
        "label": "Drachen steigen lassen",
        "effects": { "reward": +5 },
        "message": "Es macht Spaß und du fühlst dich wie ein Kind.",
        "tip": "Sich Zeit für einfache Freuden zu nehmen, kann die Stimmung heben.",
        "effectType": "positive"
      },
      {
        "label": "Weiterwandern",
        "effects": {},
        "message": "Du entscheidest dich, konzentriert zu bleiben.",
        "tip": "Fokus auf das Ziel ist manchmal wichtig.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 19: Du siehst Anzeichen von Regen am Horizont. Möchtest du dein Tempo erhöhen, um das nächste Dorf vor dem Regen zu erreichen?",
    "options": [
      {
        "label": "Tempo erhöhen",
        "effects": { "energy": -10 },
        "message": "Du schaffst es rechtzeitig und bleibst trocken.",
        "tip": "Vorausschauendes Handeln kann sich auszahlen.",
        "effectType": "positive"
      },
      {
        "label": "Normales Tempo beibehalten",
        "effects": { "health": -5 },
        "message": "Du wirst vom Regen überrascht und wirst etwas nass.",
        "tip": "Manchmal ist es besser, das Wetter im Auge zu behalten.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 20: Im Dorf findet heute ein kleines Musikfestival statt. Möchtest du daran teilnehmen?",
    "options": [
      {
        "label": "Teilnehmen",
        "effects": { "energy": +5, "reward": +10 },
        "message": "Die Musik hebt deine Stimmung und du genießt den Abend.",
        "tip": "Soziale Aktivitäten können Energie spenden.",
        "effectType": "positive"
      },
      {
        "label": "Weiterziehen",
        "effects": {},
        "message": "Du entscheidest dich, deinen Plan einzuhalten.",
        "tip": "Disziplin kann hilfreich sein, um Ziele zu erreichen.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 21: Du fühlst dich leicht verspannt. Es gibt die Möglichkeit, eine kurze Yoga-Session zu machen. Nimmst du dir die Zeit?",
    "options": [
      {
        "label": "Yoga machen",
        "effects": { "health": +5 },
        "message": "Die Übungen helfen dir, dich zu entspannen.",
        "tip": "Dehnübungen können die Regeneration fördern.",
        "effectType": "positive"
      },
      {
        "label": "Weiterwandern",
        "effects": {},
        "message": "Du entscheidest dich, ohne Unterbrechung weiterzugehen.",
        "tip": "Manchmal ist es gut, im Fluss zu bleiben.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 22: Du entdeckst einen verlassenen Pfad, der zu einer alten Ruine führen soll. Möchtest du ihn erkunden?",
    "options": [
      {
        "label": "Pfad erkunden",
        "effects": { "energy": -5, "reward": +10 },
        "message": "Die Ruine war faszinierend und der Abstecher hat sich gelohnt.",
        "tip": "Neue Orte zu entdecken kann bereichernd sein.",
        "effectType": "positive"
      },
      {
        "label": "Auf der Route bleiben",
        "effects": {},
        "message": "Du entscheidest dich, auf dem bekannten Weg zu bleiben.",
        "tip": "Vertraute Wege bieten Sicherheit.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 23: Ein sanfter Regen setzt ein, der die Luft erfrischt. Du könntest eine Weile im Regen tanzen. Machst du das?",
    "options": [
      {
        "label": "Im Regen tanzen",
        "effects": { "reward": +5 },
        "message": "Du fühlst dich lebendig und unbeschwert.",
        "tip": "Sich dem Moment hinzugeben kann befreiend sein.",
        "effectType": "positive"
      },
      {
        "label": "Unterstellen",
        "effects": {},
        "message": "Du suchst Schutz und wartest, bis der Regen nachlässt.",
        "tip": "Vorsicht ist manchmal geboten.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 24: Du hörst von heißen Quellen in der Nähe. Es wäre ein Umweg, aber ein Bad könnte entspannend sein. Entscheidest du dich dafür?",
    "options": [
      {
        "label": "Zu den heißen Quellen gehen",
        "effects": { "energy": -5, "health": +10 },
        "message": "Das Bad war wohltuend und hat deine Muskeln entspannt.",
        "tip": "Sich zu verwöhnen kann die Regeneration fördern.",
        "effectType": "positive"
      },
      {
        "label": "Auf dem Weg bleiben",
        "effects": {},
        "message": "Du setzt deinen Weg fort und behältst deinen Zeitplan bei.",
        "tip": "An den Plan zu halten, kann wichtig sein.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 25: Du triffst auf eine Gruppe Kinder, die Seifenblasen machen. Sie bieten dir an, mitzumachen. Nimmst du dir die Zeit?",
    "options": [
      {
        "label": "Mitmachen",
        "effects": { "reward": +5 },
        "message": "Du hast Spaß und fühlst dich jung.",
        "tip": "Ein bisschen Leichtigkeit kann den Tag erhellen.",
        "effectType": "positive"
      },
      {
        "label": "Freundlich ablehnen",
        "effects": {},
        "message": "Du lächelst und setzt deinen Weg fort.",
        "tip": "Es ist wichtig, höflich zu sein, auch wenn man nicht mitmacht.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 26: Deine Schuhe sind etwas schmutzig. Du könntest an einem Bach halten, um sie zu säubern. Tust du das?",
    "options": [
      {
        "label": "Schuhe säubern",
        "effects": {},
        "message": "Deine Schuhe sind wieder sauber und fühlen sich besser an.",
        "tip": "Pflege der Ausrüstung kann das Wandern angenehmer machen.",
        "effectType": "positive"
      },
      {
        "label": "Weitergehen",
        "effects": {},
        "message": "Du siehst keinen Bedarf und gehst weiter.",
        "tip": "Kleine Unannehmlichkeiten können manchmal ignoriert werden.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 27: Du findest einen schönen Stein, der dir gefällt. Es wäre ein nettes Andenken, aber zusätzliches Gewicht. Nimmst du ihn mit?",
    "options": [
      {
        "label": "Stein mitnehmen",
        "effects": { "energy": -2 },
        "message": "Du packst den Stein ein und freust dich über das Andenken.",
        "tip": "Erinnerungsstücke können wertvoll sein, aber bedenke das Gewicht.",
        "effectType": "positive"
      },
      {
        "label": "Liegen lassen",
        "effects": {},
        "message": "Du entscheidest dich, nur ein Foto zu machen.",
        "tip": "Fotos sind leichte Erinnerungen.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 28: Du hast die Möglichkeit, unter freiem Himmel zu übernachten und die Sterne zu beobachten. Nutzt du diese Gelegenheit?",
    "options": [
      {
        "label": "Unter freiem Himmel schlafen",
        "effects": { "reward": +10 },
        "message": "Die Sternennacht war wunderschön und unvergesslich.",
        "tip": "Neue Erfahrungen können das Leben bereichern.",
        "effectType": "positive"
      },
      {
        "label": "Im Zelt schlafen",
        "effects": {},
        "message": "Du schläfst bequem in deinem Zelt.",
        "tip": "Komfort kann für einen guten Schlaf wichtig sein.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 29: Fast am Ziel, triffst du auf eine kleine Hütte, in der frisch gebackenes Brot angeboten wird. Möchtest du etwas kaufen?",
    "options": [
      {
        "label": "Brot kaufen",
        "effects": { "capital": -5, "energy": +5 },
        "message": "Das Brot ist köstlich und gibt dir Energie für den letzten Tag.",
        "tip": "Sich gut zu verpflegen, ist wichtig für die Leistung.",
        "effectType": "positive"
      },
      {
        "label": "Weitergehen",
        "effects": {},
        "message": "Du entscheidest dich, deine eigenen Vorräte zu nutzen.",
        "tip": "Sparsamkeit kann das Budget schonen.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 30: Du siehst das Ende deiner leichten Route nahen. Ein letzter sanfter Hügel steht zwischen dir und deinem Ziel. Wie möchtest du diesen letzten Tag angehen?",
    "options": [
      {
        "label": "Langsam genießen",
        "effects": { "energy": -5, "reward": +10 },
        "message": "Du nimmst dir Zeit, den letzten Tag zu genießen und die Erinnerungen Revue passieren zu lassen.",
        "tip": "Den Moment zu genießen kann sehr erfüllend sein.",
        "effectType": "positive"
      },
      {
        "label": "Zügig beenden",
        "effects": { "energy": -10 },
        "message": "Du beendest die Wanderung zügig und fühlst dich zufrieden.",
        "tip": "Ein erfolgreicher Abschluss kann motivierend sein.",
        "effectType": "neutral"
      }
    ]
  }
];

// Entscheidungen für die mittlere Route
// Entscheidungen für die mittlere Route
export const mediumDecisions = [
  {
    "text": "Tag 1: Du beginnst deine mittlere Route, die durch abwechslungsreiches Gelände führt. Schon früh am Tag triffst du auf eine Weggabelung mit einer Brücke, die etwas instabil aussieht. Möchtest du sie überqueren oder einen Umweg machen?",
    "options": [
      {
        "label": "Brücke überqueren",
        "effects": { "health": -5, "reward": +5 },
        "message": "Du hast die Brücke erfolgreich überquert, aber es war riskant.",
        "tip": "Manchmal lohnt sich ein kleines Risiko für den Fortschritt.",
        "effectType": "neutral"
      },
      {
        "label": "Umweg nehmen",
        "effects": { "energy": -5 },
        "message": "Der Umweg war sicherer, hat dich aber mehr Energie gekostet.",
        "tip": "Sicherheit geht oft vor Geschwindigkeit.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 2: Das Wetter ist unbeständig, und es besteht die Möglichkeit eines Sturms. Du kannst frühzeitig ein Lager aufschlagen oder versuchen, vor dem Sturm mehr Strecke zu machen.",
    "options": [
      {
        "label": "Frühes Lager aufschlagen",
        "effects": { "energy": +5 },
        "message": "Du hast ein sicheres Lager aufgeschlagen und bist dem Sturm entgangen.",
        "tip": "Vorausschauendes Handeln kann Risiken minimieren.",
        "effectType": "positive"
      },
      {
        "label": "Weiterwandern",
        "effects": { "health": -10 },
        "message": "Du bist in den Sturm geraten und hast dich leicht erkältet.",
        "tip": "Das Ignorieren von Wetterwarnungen kann gesundheitliche Folgen haben.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Tag 3: Du triffst auf eine Gruppe Wanderer, die eine alternative Route vorschlagen, die landschaftlich reizvoller, aber länger ist. Schließt du dich ihnen an?",
    "options": [
      {
        "label": "Alternative Route nehmen",
        "effects": { "energy": -10, "reward": +10 },
        "message": "Die neue Route bot atemberaubende Ausblicke, aber war anstrengender.",
        "tip": "Neue Wege können spannende Erfahrungen bieten.",
        "effectType": "positive"
      },
      {
        "label": "Bei deiner Route bleiben",
        "effects": {},
        "message": "Du hast dich an deinen Plan gehalten und bist gut vorangekommen.",
        "tip": "An einem Plan festzuhalten kann Effizienz fördern.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 4: Ein reißender Fluss versperrt dir den Weg. Es gibt eine Möglichkeit, ihn an einer flachen Stelle zu durchqueren, aber das Wasser ist kalt. Alternativ kannst du nach einer Brücke weiter flussaufwärts suchen.",
    "options": [
      {
        "label": "Fluss durchqueren",
        "effects": { "health": -5, "energy": -5 },
        "message": "Das kalte Wasser hat dir zugesetzt, aber du hast Zeit gespart.",
        "tip": "Manchmal erfordert Fortschritt Opfer.",
        "effectType": "neutral"
      },
      {
        "label": "Nach Brücke suchen",
        "effects": { "energy": -10 },
        "message": "Der Weg zur Brücke war länger, aber du bist trocken geblieben.",
        "tip": "Sicherheit kann mehr Aufwand erfordern, bietet aber Schutz.",
        "effectType": "positive"
      }
    ]
  },
  {
    "text": "Tag 5: Deine Vorräte werden knapp. Du könntest Zeit investieren, um zu jagen oder zu fischen, oder versuchen, mit deinen restlichen Vorräten auszukommen.",
    "options": [
      {
        "label": "Jagen/Fischen",
        "effects": { "energy": -5, "health": +5 },
        "message": "Du hast erfolgreich Nahrung gefunden und deine Vorräte aufgestockt.",
        "tip": "Selbstversorgung kann Ressourcen schonen.",
        "effectType": "positive"
      },
      {
        "label": "Mit Vorräten auskommen",
        "effects": { "health": -5 },
        "message": "Du fühlst dich hungrig und deine Energie lässt nach.",
        "tip": "Ausreichende Ernährung ist wichtig für die Leistungsfähigkeit.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Tag 6: Du entdeckst Spuren eines Bären in der Nähe deines Weges. Du kannst einen Umweg machen oder vorsichtig weitergehen.",
    "options": [
      {
        "label": "Umweg machen",
        "effects": { "energy": -5 },
        "message": "Der Umweg war länger, aber du hast potenzielle Gefahr vermieden.",
        "tip": "Sicherheitsmaßnahmen können Risiken reduzieren.",
        "effectType": "positive"
      },
      {
        "label": "Vorsichtig weitergehen",
        "effects": { "health": -10, "reward": +5 },
        "message": "Du bist dem Bären begegnet, konntest aber unbemerkt vorbeikommen.",
        "tip": "Risiken können belohnt werden, bergen aber Gefahren.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 7: Dein Schuh hat ein Loch. Du kannst ihn reparieren oder hoffen, dass er noch hält.",
    "options": [
      {
        "label": "Schuh reparieren",
        "effects": { "energy": -5 },
        "message": "Die Reparatur hat Zeit gekostet, aber dein Schuh ist wieder funktionstüchtig.",
        "tip": "Kleine Reparaturen verhindern größere Probleme.",
        "effectType": "positive"
      },
      {
        "label": "Weitergehen",
        "effects": { "health": -5 },
        "message": "Das Loch wird größer und beeinträchtigt deinen Gang.",
        "tip": "Das Ignorieren von Problemen kann zu größeren Schwierigkeiten führen.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Tag 8: Du kommst an einer Kreuzung ohne Wegweiser. Dein Instinkt sagt dir, rechts zu gehen, aber deine Karte zeigt nach links. Welchem folgst du?",
    "options": [
      {
        "label": "Instinkt folgen",
        "effects": { "energy": -10 },
        "message": "Du hast dich verlaufen und musst umkehren.",
        "tip": "Sich auf Hilfsmittel zu verlassen, kann zuverlässiger sein.",
        "effectType": "negative"
      },
      {
        "label": "Karte folgen",
        "effects": {},
        "message": "Du vertraust deiner Karte und bleibst auf dem richtigen Weg.",
        "tip": "Navigationshilfen sind wichtige Werkzeuge.",
        "effectType": "positive"
      }
    ]
  },
  {
    "text": "Tag 9: Du hörst ein Gewitter in der Ferne. Du könntest Schutz suchen oder versuchen, noch ein Stück weiterzukommen.",
    "options": [
      {
        "label": "Schutz suchen",
        "effects": { "energy": +5 },
        "message": "Du hast einen sicheren Unterschlupf gefunden und das Gewitter abgewartet.",
        "tip": "Sicherheit sollte Priorität haben.",
        "effectType": "positive"
      },
      {
        "label": "Weitergehen",
        "effects": { "health": -10 },
        "message": "Du bist im Gewitter unterwegs und fühlst dich unwohl.",
        "tip": "Wetterbedingungen können ernsthafte Gefahren darstellen.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Tag 10: Ein steiler Abhang liegt vor dir. Du kannst klettern oder einen längeren, aber sicheren Pfad nehmen.",
    "options": [
      {
        "label": "Abhang klettern",
        "effects": { "energy": -10, "health": -5, "reward": +10 },
        "message": "Du hast den Abhang erfolgreich erklommen, es war jedoch anstrengend.",
        "tip": "Herausforderungen können belohnend sein, erfordern aber Anstrengung.",
        "effectType": "neutral"
      },
      {
        "label": "Sicheren Pfad nehmen",
        "effects": { "energy": -5 },
        "message": "Du nimmst den sicheren Weg und kommst ohne Probleme voran.",
        "tip": "Sicherheit kann Zeit sparen, wenn Risiken vermieden werden.",
        "effectType": "positive"
      }
    ]
  },
  {
    "text": "Tag 11: Deine Wasservorräte sind knapp. Du könntest Wasser aus einem nahen Teich filtern oder darauf hoffen, bald eine Quelle zu finden.",
    "options": [
      {
        "label": "Wasser filtern",
        "effects": { "energy": -5, "health": +5 },
        "message": "Du hast sauberes Wasser erhalten und fühlst dich besser.",
        "tip": "Wasseraufbereitung ist wichtig für die Gesundheit.",
        "effectType": "positive"
      },
      {
        "label": "Weitergehen",
        "effects": { "health": -5 },
        "message": "Du fühlst dich dehydriert und schwach.",
        "tip": "Ausreichende Hydration ist essentiell.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Tag 12: Du triffst auf einen Händler, der dir nützliche Ausrüstung anbietet, allerdings zu hohen Preisen. Kaufst du etwas?",
    "options": [
      {
        "label": "Ausrüstung kaufen",
        "effects": { "capital": -20, "reward": +10 },
        "message": "Die neue Ausrüstung könnte sich als nützlich erweisen.",
        "tip": "Investitionen können langfristige Vorteile bieten.",
        "effectType": "neutral"
      },
      {
        "label": "Ablehnen",
        "effects": {},
        "message": "Du sparst dein Geld für später.",
        "tip": "Sparsamkeit kann in unvorhergesehenen Situationen hilfreich sein.",
        "effectType": "positive"
      }
    ]
  },
  {
    "text": "Tag 13: Du entdeckst eine Abkürzung durch unwegsames Gelände. Sie könnte dir Zeit sparen, ist aber schwerer zu begehen.",
    "options": [
      {
        "label": "Abkürzung nehmen",
        "effects": { "energy": -10, "reward": +5 },
        "message": "Die Abkürzung war anstrengend, aber du hast Zeit gespart.",
        "tip": "Effizienz erfordert manchmal zusätzliche Anstrengung.",
        "effectType": "neutral"
      },
      {
        "label": "Auf dem Hauptweg bleiben",
        "effects": {},
        "message": "Du bleibst auf dem sicheren Weg und vermeidest Risiken.",
        "tip": "Sicherheit kann wichtiger sein als Schnelligkeit.",
        "effectType": "positive"
      }
    ]
  },
  {
    "text": "Tag 14: Du spürst leichte Schmerzen im Knie. Du könntest einen Ruhetag einlegen oder weiterwandern.",
    "options": [
      {
        "label": "Ruhetag einlegen",
        "effects": { "energy": +10, "health": +5 },
        "message": "Die Pause hat dir geholfen, dich zu erholen.",
        "tip": "Auf den Körper zu hören, kann Verletzungen vorbeugen.",
        "effectType": "positive"
      },
      {
        "label": "Weiterwandern",
        "effects": { "health": -10 },
        "message": "Die Schmerzen haben sich verschlimmert.",
        "tip": "Überanstrengung kann zu ernsthaften Verletzungen führen.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Tag 15: Du erreichst einen See, in dem du fischen könntest. Es würde Zeit kosten, könnte aber deine Vorräte auffüllen.",
    "options": [
      {
        "label": "Fischen",
        "effects": { "energy": -5, "health": +5 },
        "message": "Du hast erfolgreich gefischt und eine nahrhafte Mahlzeit genossen.",
        "tip": "Natürliche Ressourcen zu nutzen, kann Vorteile bieten.",
        "effectType": "positive"
      },
      {
        "label": "Weiterwandern",
        "effects": {},
        "message": "Du setzt deinen Weg fort, um dein Tagesziel zu erreichen.",
        "tip": "Zeitmanagement ist wichtig, um Ziele zu erreichen.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 16: Ein Gewitter hat den Weg schlammig gemacht. Du kannst vorsichtig weitergehen oder warten, bis es trocknet.",
    "options": [
      {
        "label": "Weitergehen",
        "effects": { "health": -5 },
        "message": "Du bist ausgerutscht und hast dich leicht verletzt.",
        "tip": "Schlechte Bedingungen erhöhen das Unfallrisiko.",
        "effectType": "negative"
      },
      {
        "label": "Warten",
        "effects": { "energy": +5 },
        "message": "Du hast gewartet und bist später sicher weitergegangen.",
        "tip": "Geduld kann Gefahren minimieren.",
        "effectType": "positive"
      }
    ]
  },
  {
    "text": "Tag 17: Du triffst auf einen Reisenden, der dir eine Karte mit einer schnelleren Route anbietet, aber er verlangt Geld dafür.",
    "options": [
      {
        "label": "Karte kaufen",
        "effects": { "capital": -10, "reward": +5 },
        "message": "Die neue Route könnte dir Zeit sparen.",
        "tip": "Investitionen können sich auszahlen, aber überlege gut.",
        "effectType": "neutral"
      },
      {
        "label": "Ablehnen",
        "effects": {},
        "message": "Du vertraust auf deine eigene Planung.",
        "tip": "Verlass dich auf deine Fähigkeiten und Ressourcen.",
        "effectType": "positive"
      }
    ]
  },
  {
    "text": "Tag 18: Du bemerkst, dass dir ein wichtiges Ausrüstungsstück fehlt. Du kannst umkehren oder improvisieren.",
    "options": [
      {
        "label": "Umkehren",
        "effects": { "energy": -10 },
        "message": "Du hast das Ausrüstungsstück geholt, aber Zeit und Energie verloren.",
        "tip": "Sorgfältige Vorbereitung kann solche Situationen vermeiden.",
        "effectType": "neutral"
      },
      {
        "label": "Improvisieren",
        "effects": { "health": -5 },
        "message": "Deine Improvisation war nicht perfekt, aber ausreichend.",
        "tip": "Anpassungsfähigkeit ist eine nützliche Fähigkeit.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 19: Ein Einheimischer warnt dich vor gefährlichen Tieren auf deinem geplanten Weg. Du kannst seinen Rat befolgen oder deinen Weg fortsetzen.",
    "options": [
      {
        "label": "Rat befolgen",
        "effects": { "energy": -5 },
        "message": "Du nimmst einen Umweg und vermeidest potenzielle Gefahren.",
        "tip": "Lokales Wissen kann sehr wertvoll sein.",
        "effectType": "positive"
      },
      {
        "label": "Weg fortsetzen",
        "effects": { "health": -10 },
        "message": "Du bist gefährlichen Tieren begegnet und musstest fliehen.",
        "tip": "Warnungen zu ignorieren kann ernsthafte Konsequenzen haben.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Tag 20: Deine Nahrungsvorräte sind knapp. Du könntest fasten oder deine Notrationen verwenden.",
    "options": [
      {
        "label": "Fasten",
        "effects": { "health": -5 },
        "message": "Du fühlst dich schwach und hungrig.",
        "tip": "Ausreichende Ernährung ist wichtig für die Gesundheit.",
        "effectType": "negative"
      },
      {
        "label": "Notration verwenden",
        "effects": { "capital": -10, "energy": +10 },
        "message": "Die Notration hat dir Energie gegeben.",
        "tip": "Notrationen sind für solche Situationen gedacht.",
        "effectType": "positive"
      }
    ]
  },
  {
    "text": "Tag 21: Ein Sturm zieht auf, und du könntest in einer Höhle Schutz suchen. Allerdings gibt es Gerüchte, dass die Höhle unsicher ist.",
    "options": [
      {
        "label": "Höhle nutzen",
        "effects": { "health": -10 },
        "message": "Die Höhle war instabil, und du wurdest leicht verletzt.",
        "tip": "Risiken sollten sorgfältig abgewogen werden.",
        "effectType": "negative"
      },
      {
        "label": "Anderen Schutz suchen",
        "effects": { "energy": -5 },
        "message": "Du hast einen sicheren Unterschlupf gefunden, aber es hat länger gedauert.",
        "tip": "Sicherheit geht vor Bequemlichkeit.",
        "effectType": "positive"
      }
    ]
  },
  {
    "text": "Tag 22: Du könntest einen Ruhetag in einem nahegelegenen Dorf einlegen, um dich zu erholen.",
    "options": [
      {
        "label": "Ruhetag nehmen",
        "effects": { "energy": +15, "health": +5 },
        "message": "Die Pause hat dir gutgetan und deine Kräfte erneuert.",
        "tip": "Erholung ist wichtig für langfristige Leistungsfähigkeit.",
        "effectType": "positive"
      },
      {
        "label": "Weiterwandern",
        "effects": { "energy": -5 },
        "message": "Du fühlst dich etwas erschöpft, machst aber Fortschritte.",
        "tip": "Kontinuität kann auch Vorteile bieten.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 23: Ein Dorfbewohner bietet dir an, dich gegen Bezahlung ein Stück mitzunehmen. Nimmst du das Angebot an?",
    "options": [
      {
        "label": "Annehmen",
        "effects": { "capital": -15, "energy": +10 },
        "message": "Du hast Energie gespart und bist schneller vorangekommen.",
        "tip": "Manchmal kann Unterstützung hilfreich sein.",
        "effectType": "positive"
      },
      {
        "label": "Ablehnen",
        "effects": {},
        "message": "Du entscheidest dich, zu Fuß weiterzugehen.",
        "tip": "Selbstständigkeit fördert das Durchhaltevermögen.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 24: Du bemerkst, dass das Wetter umschlägt und es könnte schneien. Du könntest zusätzliche Kleidung anziehen oder hoffen, dass es nicht so kalt wird.",
    "options": [
      {
        "label": "Zusätzliche Kleidung anziehen",
        "effects": {},
        "message": "Du bleibst warm und komfortabel.",
        "tip": "Sich dem Wetter anzupassen, ist wichtig.",
        "effectType": "positive"
      },
      {
        "label": "So bleiben",
        "effects": { "health": -10 },
        "message": "Du hast gefroren und dich erkältet.",
        "tip": "Unterschätzung des Wetters kann gefährlich sein.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Tag 25: Du siehst eine Abkürzung, die jedoch durch privates Land führt. Es ist nicht erlaubt, diesen Weg zu nehmen.",
    "options": [
      {
        "label": "Abkürzung nehmen",
        "effects": { "health": -5, "reward": +5 },
        "message": "Du wurdest vom Besitzer erwischt und er hat dich verwarnt.",
        "tip": "Das Missachten von Regeln kann Konsequenzen haben.",
        "effectType": "negative"
      },
      {
        "label": "Regulären Weg nehmen",
        "effects": { "energy": -5 },
        "message": "Du respektierst das Eigentum und nimmst den längeren Weg.",
        "tip": "Respekt gegenüber anderen ist wichtig.",
        "effectType": "positive"
      }
    ]
  },
  {
    "text": "Tag 26: Dein Kompass funktioniert nicht mehr richtig. Du kannst versuchen, dich an natürlichen Zeichen zu orientieren oder eine Pause einlegen, um ihn zu reparieren.",
    "options": [
      {
        "label": "Kompass reparieren",
        "effects": { "energy": -5 },
        "message": "Die Reparatur war erfolgreich, und du kannst wieder navigieren.",
        "tip": "Funktionierende Ausrüstung ist entscheidend.",
        "effectType": "positive"
      },
      {
        "label": "Ohne Kompass weitergehen",
        "effects": { "energy": -10 },
        "message": "Du hast dich verlaufen und Zeit verloren.",
        "tip": "Orientierung ist wichtig, um auf Kurs zu bleiben.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Tag 27: Du fühlst dich erschöpft und demotiviert. Du könntest deine Lieblingsmusik hören, um dich aufzumuntern.",
    "options": [
      {
        "label": "Musik hören",
        "effects": { "energy": +5, "reward": +5 },
        "message": "Die Musik hebt deine Stimmung und gibt dir neue Energie.",
        "tip": "Motivation kann durch kleine Freuden gesteigert werden.",
        "effectType": "positive"
      },
      {
        "label": "Weiterwandern",
        "effects": { "energy": -5 },
        "message": "Du kämpfst dich weiter, fühlst dich aber ausgelaugt.",
        "tip": "Manchmal ist es wichtig, auf sich selbst zu achten.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Tag 28: Du erreichst einen Punkt mit schwachem Handyempfang. Du könntest Nachrichten an Familie und Freunde senden.",
    "options": [
      {
        "label": "Nachrichten senden",
        "effects": { "energy": -5, "reward": +5 },
        "message": "Der Kontakt mit deinen Lieben motiviert dich.",
        "tip": "Soziale Unterstützung kann die Moral stärken.",
        "effectType": "positive"
      },
      {
        "label": "Empfang ignorieren",
        "effects": {},
        "message": "Du konzentrierst dich weiterhin auf deine Wanderung.",
        "tip": "Fokus auf das Ziel kann effektiv sein.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 29: Ein Fotograf bietet an, ein professionelles Foto von dir in der Landschaft zu machen, gegen eine kleine Gebühr.",
    "options": [
      {
        "label": "Foto machen lassen",
        "effects": { "capital": -5, "reward": +10 },
        "message": "Du erhältst ein tolles Erinnerungsfoto.",
        "tip": "Erinnerungen festzuhalten kann wertvoll sein.",
        "effectType": "positive"
      },
      {
        "label": "Ablehnen",
        "effects": {},
        "message": "Du sparst dein Geld und setzt deinen Weg fort.",
        "tip": "Sparsamkeit kann in unvorhergesehenen Situationen hilfreich sein.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 30: Der letzte Abschnitt deiner mittleren Route steht bevor. Ein dichter Wald versperrt dir den direkten Weg. Du kannst dich durchschlagen oder einen längeren, aber sicheren Pfad wählen.",
    "options": [
      {
        "label": "Durch den Wald",
        "effects": { "health": -10, "reward": +15 },
        "message": "Der Wald war dicht und fordernd, aber du hast es geschafft.",
        "tip": "Herausforderungen können belohnend sein, bergen aber Risiken.",
        "effectType": "neutral"
      },
      {
        "label": "Sicheren Pfad wählen",
        "effects": { "energy": -10 },
        "message": "Du nimmst den sicheren Weg und erreichst dein Ziel etwas später.",
        "tip": "Geduld und Vorsicht können sich auszahlen.",
        "effectType": "positive"
      }
    ]
  }
];

// Entscheidungen für die anspruchsvolle Route
export const hardDecisions = [
  {
    "text": "Tag 1: Deine anspruchsvolle Route beginnt mit einem steilen Aufstieg über schroffe Felsen. Du kannst direkt losklettern oder vorher deine Ausrüstung überprüfen.",
    "options": [
      {
        "label": "Direkt losklettern",
        "effects": { "health": -10 },
        "message": "Ohne Überprüfung war der Aufstieg riskant, und du hast dich leicht verletzt.",
        "tip": "Vorbereitung ist besonders bei schwierigen Aufgaben wichtig.",
        "effectType": "negative"
      },
      {
        "label": "Ausrüstung überprüfen",
        "effects": { "energy": -5 },
        "message": "Die Überprüfung hat Zeit gekostet, aber du fühlst dich sicherer.",
        "tip": "Sicherheit geht vor Schnelligkeit.",
        "effectType": "positive"
      }
    ]
  },
  {
    "text": "Tag 2: Ein reißender Gebirgsfluss versperrt dir den Weg. Es gibt keinen einfachen Übergang. Du könntest versuchen, ihn zu durchschwimmen oder einen langen Umweg machen.",
    "options": [
      {
        "label": "Durchschwimmen",
        "effects": { "health": -15, "reward": +10 },
        "message": "Das Wasser war eiskalt und reißend, aber du hast es geschafft.",
        "tip": "Hohe Risiken können zu hohen Belohnungen führen.",
        "effectType": "neutral"
      },
      {
        "label": "Umweg machen",
        "effects": { "energy": -15 },
        "message": "Der Umweg war anstrengend, aber sicherer.",
        "tip": "Sicherheit erfordert manchmal mehr Aufwand.",
        "effectType": "positive"
      }
    ]
  },
  {
    "text": "Tag 3: Du bemerkst erste Anzeichen von Höhenkrankheit. Du kannst einen Tag rasten oder weiter aufsteigen.",
    "options": [
      {
        "label": "Rasten",
        "effects": { "energy": +10, "health": +10 },
        "message": "Die Pause hat dir geholfen, dich zu akklimatisieren.",
        "tip": "Auf den Körper zu hören, ist in extremen Situationen entscheidend.",
        "effectType": "positive"
      },
      {
        "label": "Weiter aufsteigen",
        "effects": { "health": -15 },
        "message": "Die Symptome haben sich verschlimmert und du fühlst dich schwach.",
        "tip": "Ignorieren von Warnsignalen kann gefährlich sein.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Tag 4: Ein Sturm zieht auf, und du bist in offenem Gelände. Du kannst versuchen, Schutz zu suchen oder weiterzugehen.",
    "options": [
      {
        "label": "Schutz suchen",
        "effects": { "energy": -5 },
        "message": "Du hast einen sicheren Unterschlupf gefunden und den Sturm abgewartet.",
        "tip": "In gefährlichen Situationen ist Vorsicht geboten.",
        "effectType": "positive"
      },
      {
        "label": "Weitergehen",
        "effects": { "health": -20 },
        "message": "Du wurdest vom Sturm überrascht und hast dich schwer erkältet.",
        "tip": "Wetterbedingungen können lebensbedrohlich sein.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Tag 5: Deine Route führt über einen schmalen Grat mit tiefen Abgründen auf beiden Seiten. Du kannst dich sichern oder ohne zusätzliche Sicherung gehen.",
    "options": [
      {
        "label": "Sichern",
        "effects": { "energy": -10 },
        "message": "Die Sicherung hat Zeit gekostet, aber du hast den Grat sicher überquert.",
        "tip": "Sicherheitsmaßnahmen können Leben retten.",
        "effectType": "positive"
      },
      {
        "label": "Ohne Sicherung",
        "effects": { "health": -20, "reward": +10 },
        "message": "Du hast Zeit gespart, aber bist ausgerutscht und hast dich verletzt.",
        "tip": "Übermut kann gefährlich sein.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Tag 6: Du triffst auf einen Bergführer, der dich für eine Gebühr durch schwieriges Terrain führen kann. Nimmst du sein Angebot an?",
    "options": [
      {
        "label": "Annehmen",
        "effects": { "capital": -30, "reward": +15 },
        "message": "Der Bergführer hat dich sicher und effizient geleitet.",
        "tip": "Expertenrat kann hilfreich sein.",
        "effectType": "positive"
      },
      {
        "label": "Ablehnen",
        "effects": { "energy": -15, "health": -5 },
        "message": "Du bist allein weitergegangen und hattest einige Schwierigkeiten.",
        "tip": "Eigenständigkeit erfordert Erfahrung.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 7: Ein Lawinenwarnung wurde für dein Gebiet ausgegeben. Du kannst abwarten oder versuchen, schnell durchzukommen.",
    "options": [
      {
        "label": "Abwarten",
        "effects": { "energy": +5 },
        "message": "Du hast gewartet, bis die Gefahr vorüber war.",
        "tip": "Geduld kann lebensrettend sein.",
        "effectType": "positive"
      },
      {
        "label": "Weitergehen",
        "effects": { "health": -25 },
        "message": "Du wurdest von einer kleinen Lawine erfasst und verletzt.",
        "tip": "Warnungen sollten ernst genommen werden.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Tag 8: Deine Nahrungsvorräte sind fast aufgebraucht. Du könntest jagen gehen oder deine Notrationen verwenden.",
    "options": [
      {
        "label": "Jagen",
        "effects": { "energy": -10, "health": +10 },
        "message": "Du hast erfolgreich gejagt und deine Vorräte aufgefüllt.",
        "tip": "In der Wildnis zu überleben, erfordert Fähigkeiten.",
        "effectType": "positive"
      },
      {
        "label": "Notration verwenden",
        "effects": { "capital": -20, "energy": +5 },
        "message": "Du hast deine Notrationen genutzt, aber sie sind teuer.",
        "tip": "Notrationen sind für kritische Situationen gedacht.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 9: Ein Gletscher versperrt deinen Weg. Du kannst ihn überqueren oder einen weiten Umweg machen.",
    "options": [
      {
        "label": "Gletscher überqueren",
        "effects": { "health": -15, "reward": +10 },
        "message": "Du hast den Gletscher überquert, aber es war gefährlich.",
        "tip": "Gletscherspalten können tödlich sein.",
        "effectType": "neutral"
      },
      {
        "label": "Umweg machen",
        "effects": { "energy": -20 },
        "message": "Der Umweg war lang und anstrengend, aber sicherer.",
        "tip": "Sicherheit erfordert manchmal zusätzliche Mühe.",
        "effectType": "positive"
      }
    ]
  },
  {
    "text": "Tag 10: Du hast Anzeichen von Erfrierungen an deinen Fingern. Du kannst einen Tag rasten und dich aufwärmen oder weitergehen.",
    "options": [
      {
        "label": "Rasten",
        "effects": { "energy": +10, "health": +15 },
        "message": "Du hast dich erholt und die Erfrierungen behandelt.",
        "tip": "Gesundheit sollte immer Priorität haben.",
        "effectType": "positive"
      },
      {
        "label": "Weitergehen",
        "effects": { "health": -20 },
        "message": "Die Erfrierungen haben sich verschlimmert.",
        "tip": "Ignorieren von Verletzungen kann ernste Folgen haben.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Tag 11: Ein schmaler Pfad entlang einer Klippe ist der schnellste Weg. Du kannst ihn nehmen oder einen sichereren, aber längeren Weg wählen.",
    "options": [
      {
        "label": "Schmalen Pfad nehmen",
        "effects": { "health": -10, "reward": +15 },
        "message": "Der Pfad war gefährlich, aber du hast Zeit gespart.",
        "tip": "Risiken können Zeit sparen, aber gefährlich sein.",
        "effectType": "neutral"
      },
      {
        "label": "Sicheren Weg nehmen",
        "effects": { "energy": -10 },
        "message": "Du hast den sicheren Weg gewählt und fühlst dich erleichtert.",
        "tip": "Sicherheit geht vor.",
        "effectType": "positive"
      }
    ]
  },
  {
    "text": "Tag 12: Ein Schneesturm zieht auf. Du könntest ein Schneeloch graben oder weiterwandern.",
    "options": [
      {
        "label": "Schneeloch graben",
        "effects": { "energy": -15 },
        "message": "Du hast Schutz gefunden, aber es war anstrengend.",
        "tip": "Überlebenstechniken sind in Extremsituationen wichtig.",
        "effectType": "positive"
      },
      {
        "label": "Weiterwandern",
        "effects": { "health": -25 },
        "message": "Der Sturm hat dich geschwächt und krank gemacht.",
        "tip": "In Extremwetter weiterzugehen, ist sehr riskant.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Tag 13: Dein Zelt ist beschädigt. Du kannst Zeit investieren, es zu reparieren, oder hoffen, dass das Wetter stabil bleibt.",
    "options": [
      {
        "label": "Zelt reparieren",
        "effects": { "energy": -10 },
        "message": "Die Reparatur war erfolgreich, und du bist vorbereitet.",
        "tip": "Ausrüstung in gutem Zustand zu halten, ist entscheidend.",
        "effectType": "positive"
      },
      {
        "label": "Nicht reparieren",
        "effects": { "health": -15 },
        "message": "Ein nächtlicher Sturm hat dich ohne Schutz erwischt.",
        "tip": "Vorbereitung schützt vor unvorhergesehenen Ereignissen.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Tag 14: Ein steiler Eiskanal bietet eine schnelle Abfahrt, ist aber gefährlich. Nimmst du ihn?",
    "options": [
      {
        "label": "Eiskanal nehmen",
        "effects": { "health": -20, "reward": +20 },
        "message": "Die Abfahrt war rasant, aber du hast dich verletzt.",
        "tip": "Adrenalin kann die Risiken erhöhen.",
        "effectType": "neutral"
      },
      {
        "label": "Alternativen Weg nehmen",
        "effects": { "energy": -15 },
        "message": "Du hast den sicheren Weg gewählt, der länger dauerte.",
        "tip": "Sicherheit erfordert oft mehr Zeit.",
        "effectType": "positive"
      }
    ]
  },
  {
    "text": "Tag 15: Du triffst auf einen verletzten Wanderer, der Hilfe benötigt. Du kannst ihm helfen oder deinen Weg fortsetzen.",
    "options": [
      {
        "label": "Helfen",
        "effects": { "energy": -10, "reward": +15 },
        "message": "Du hast ihm geholfen und fühlst dich gut dabei.",
        "tip": "Anderen zu helfen, ist wichtig und kann belohnt werden.",
        "effectType": "positive"
      },
      {
        "label": "Weitergehen",
        "effects": { "health": -10 },
        "message": "Du hast ein schlechtes Gewissen, was dich belastet.",
        "tip": "Moralische Entscheidungen können das Wohlbefinden beeinflussen.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Tag 16: Deine Wasserfilter sind kaputt. Du könntest riskieren, ungefiltertes Wasser zu trinken oder dehydriert weitergehen.",
    "options": [
      {
        "label": "Ungefiltertes Wasser trinken",
        "effects": { "health": -20 },
        "message": "Du hast eine Magenverstimmung bekommen.",
        "tip": "Wasserqualität ist entscheidend für die Gesundheit.",
        "effectType": "negative"
      },
      {
        "label": "Dehydriert weitergehen",
        "effects": { "energy": -15 },
        "message": "Du fühlst dich schwach und erschöpft.",
        "tip": "Hydration ist lebenswichtig.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Tag 17: Eine gefährliche Schlucht liegt vor dir. Du kannst einen Kletterhaken verwenden oder einen langen Umweg machen.",
    "options": [
      {
        "label": "Kletterhaken verwenden",
        "effects": { "energy": -10, "health": -10, "reward": +15 },
        "message": "Du hast die Schlucht überwunden, aber es war riskant.",
        "tip": "Spezialausrüstung kann helfen, birgt aber Risiken.",
        "effectType": "neutral"
      },
      {
        "label": "Umweg machen",
        "effects": { "energy": -20 },
        "message": "Der Umweg hat viel Zeit gekostet, aber war sicherer.",
        "tip": "Geduld kann vor Gefahren schützen.",
        "effectType": "positive"
      }
    ]
  },
  {
    "text": "Tag 18: Du hast starke Schmerzen im Bein. Du kannst eine Pause einlegen oder trotz Schmerzen weitergehen.",
    "options": [
      {
        "label": "Pause einlegen",
        "effects": { "energy": +10, "health": +10 },
        "message": "Die Ruhe hat dir geholfen, dich zu erholen.",
        "tip": "Regeneration ist wichtig für die Gesundheit.",
        "effectType": "positive"
      },
      {
        "label": "Weitergehen",
        "effects": { "health": -20 },
        "message": "Die Schmerzen haben sich verschlimmert.",
        "tip": "Überanstrengung kann zu ernsthaften Verletzungen führen.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Tag 19: Deine Karten sind unleserlich geworden. Du kannst versuchen, dich an Wegmarkierungen zu orientieren oder umkehren.",
    "options": [
      {
        "label": "Wegmarkierungen folgen",
        "effects": { "energy": -10 },
        "message": "Du konntest den Weg finden, hast aber Zeit verloren.",
        "tip": "Orientierung ist in schwierigen Gebieten entscheidend.",
        "effectType": "neutral"
      },
      {
        "label": "Umkehren",
        "effects": { "energy": -20 },
        "message": "Du bist umgekehrt und hast viel Zeit verloren.",
        "tip": "Manchmal ist Umkehr die sicherste Option.",
        "effectType": "neutral"
      }
    ]
  },
  {
    "text": "Tag 20: Ein Einheimischer bietet dir für eine hohe Summe einen sicheren Pfad an. Nimmst du das Angebot an?",
    "options": [
      {
        "label": "Annehmen",
        "effects": { "capital": -50, "reward": +20 },
        "message": "Der Pfad war sicher und hat dir geholfen.",
        "tip": "Manchmal lohnt sich eine Investition in Sicherheit.",
        "effectType": "positive"
      },
      {
        "label": "Ablehnen",
        "effects": { "health": -15 },
        "message": "Du bist auf eigene Faust weiter und hattest Schwierigkeiten.",
        "tip": "Sparen kann teuer werden.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Tag 21: Deine Kleidung ist durchnässt und die Temperaturen sinken. Du kannst ein Feuer machen oder versuchen, weiterzugehen.",
    "options": [
      {
        "label": "Feuer machen",
        "effects": { "energy": -5, "health": +15 },
        "message": "Das Feuer hat dich gewärmt und getrocknet.",
        "tip": "Wärme ist bei Kälte überlebenswichtig.",
        "effectType": "positive"
      },
      {
        "label": "Weitergehen",
        "effects": { "health": -25 },
        "message": "Du hast Unterkühlung erlitten.",
        "tip": "Ignorieren von Kälte kann lebensgefährlich sein.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Tag 22: Du entdeckst eine Höhle, die zu einer Abkürzung führen könnte, aber nicht kartiert ist.",
    "options": [
      {
        "label": "Höhle erkunden",
        "effects": { "health": -20, "reward": +20 },
        "message": "Du hast die Abkürzung gefunden, aber bist gestürzt.",
        "tip": "Unbekannte Wege bergen Risiken.",
        "effectType": "neutral"
      },
      {
        "label": "Höhle meiden",
        "effects": {},
        "message": "Du entscheidest dich für den bekannten Weg.",
        "tip": "Bekannte Wege sind oft sicherer.",
        "effectType": "positive"
      }
    ]
  },
  {
    "text": "Tag 23: Du hast Anzeichen von Dehydration. Du kannst schmutziges Wasser trinken oder versuchen, weiterzugehen.",
    "options": [
      {
        "label": "Schmutziges Wasser trinken",
        "effects": { "health": -15 },
        "message": "Du hast eine Infektion bekommen.",
        "tip": "Wasserreinheit ist entscheidend.",
        "effectType": "negative"
      },
      {
        "label": "Weitergehen",
        "effects": { "energy": -20 },
        "message": "Du fühlst dich extrem schwach.",
        "tip": "Dehydration kann schnell gefährlich werden.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Tag 24: Ein heftiger Sturm hat den Weg unpassierbar gemacht. Du kannst warten oder versuchen, dich durchzukämpfen.",
    "options": [
      {
        "label": "Warten",
        "effects": { "energy": +5 },
        "message": "Du hast gewartet, bis der Sturm nachließ.",
        "tip": "Geduld kann Gefahren vermeiden.",
        "effectType": "positive"
      },
      {
        "label": "Durchkämpfen",
        "effects": { "health": -25 },
        "message": "Du hast Verletzungen erlitten.",
        "tip": "Naturgewalten sollten respektiert werden.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Tag 25: Deine Ausrüstung ist beschädigt. Du kannst sie reparieren oder ohne sie weitergehen.",
    "options": [
      {
        "label": "Reparieren",
        "effects": { "energy": -10 },
        "message": "Die Ausrüstung ist wieder funktionstüchtig.",
        "tip": "Funktionierende Ausrüstung ist essentiell.",
        "effectType": "positive"
      },
      {
        "label": "Weitergehen",
        "effects": { "health": -20 },
        "message": "Ohne Ausrüstung war der Weg gefährlicher.",
        "tip": "Sicherheit sollte nicht vernachlässigt werden.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Tag 26: Du könntest eine riskante Kletterroute nehmen, um Zeit zu sparen.",
    "options": [
      {
        "label": "Kletterroute nehmen",
        "effects": { "health": -15, "reward": +15 },
        "message": "Du hast Zeit gespart, aber dich verletzt.",
        "tip": "Risiken sollten abgewogen werden.",
        "effectType": "neutral"
      },
      {
        "label": "Sicheren Weg nehmen",
        "effects": { "energy": -10 },
        "message": "Du hast den sicheren Weg gewählt.",
        "tip": "Sicherheit geht vor Schnelligkeit.",
        "effectType": "positive"
      }
    ]
  },
  {
    "text": "Tag 27: Du fühlst dich mental erschöpft. Du könntest einen Tag Pause machen oder weitergehen.",
    "options": [
      {
        "label": "Pause machen",
        "effects": { "energy": +15, "health": +10 },
        "message": "Die mentale Erholung hat dir gutgetan.",
        "tip": "Psyche und Körper sind gleichermaßen wichtig.",
        "effectType": "positive"
      },
      {
        "label": "Weitergehen",
        "effects": { "health": -15 },
        "message": "Die Erschöpfung hat zu Fehlern geführt.",
        "tip": "Übermüdung kann gefährlich sein.",
        "effectType": "negative"
      }
    ]
  },
  {
    "text": "Tag 28: Deine Stirnlampe ist ausgefallen. Du kannst im Dunkeln weitergehen oder bis zum Morgen warten.",
    "options": [
      {
        "label": "Im Dunkeln weitergehen",
        "effects": { "health": -20 },
        "message": "Du bist gestürzt und hast dich verletzt.",
        "tip": "Gute Sicht ist in schwierigem Gelände unerlässlich.",
        "effectType": "negative"
      },
      {
        "label": "Warten",
        "effects": { "energy": +5 },
        "message": "Du hast sicher bis zum Morgen gewartet.",
        "tip": "Geduld kann Risiken minimieren.",
        "effectType": "positive"
      }
    ]
  },
  {
    "text": "Tag 29: Du hörst von einer Abkürzung durch ein gefährliches Gebiet. Sie könnte dir einen Tag sparen.",
    "options": [
      {
        "label": "Abkürzung nehmen",
        "effects": { "health": -25, "reward": +20 },
        "message": "Du hast Zeit gespart, aber wurdest verletzt.",
        "tip": "Abkürzungen können trügerisch sein.",
        "effectType": "neutral"
      },
      {
        "label": "Regulären Weg nehmen",
        "effects": { "energy": -15 },
        "message": "Du bist den sicheren Weg gegangen.",
        "tip": "Sicherheit zahlt sich aus.",
        "effectType": "positive"
      }
    ]
  },
  {
    "text": "Tag 30: Der finale Gipfel deiner anspruchsvollen Route liegt vor dir. Es ist ein gefährlicher Anstieg, aber die Aussicht soll spektakulär sein. Wie gehst du vor?",
    "options": [
      {
        "label": "Den Gipfel erklimmen",
        "effects": { "energy": -20, "health": -10, "reward": +30 },
        "message": "Du hast den Gipfel erreicht und ein unvergessliches Panorama erlebt.",
        "tip": "Große Risiken können zu großen Belohnungen führen.",
        "effectType": "positive"
      },
      {
        "label": "Den sicheren Weg nehmen",
        "effects": { "energy": -10 },
        "message": "Du verzichtest auf den Gipfel und beendest die Wanderung sicher.",
        "tip": "Manchmal ist es klug, auf extreme Risiken zu verzichten.",
        "effectType": "neutral"
      }
    ]
  }
];
