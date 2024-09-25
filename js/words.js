const words = [
    {
        "word": "quixotic",
        "hint": "Extremely idealistic, unrealistic, and impractical."
    },
    {
        "word": "ephemeral",
        "hint": "Lasting for a very short time."
    },
    {
        "word": "serendipity",
        "hint": "The occurrence of events by chance in a happy or beneficial way."
    },
    {
        "word": "limerence",
        "hint": "The state of being infatuated or obsessed with another person."
    },
    {
        "word": "sonder",
        "hint": "The realization that each passerby has a life as vivid and complex as your own."
    },
    {
        "word": "petrichor",
        "hint": "The pleasant smell that frequently accompanies the first rain after a long period of warm, dry weather."
    },
    {
        "word": "defenestration",
        "hint": "The act of throwing someone out of a window."
    },
    {
        "word": "vellichor",
        "hint": "The strange wistfulness of used bookstores."
    },
    {
        "word": "susurrus",
        "hint": "Whispering or rustling sound."
    },
    {
        "word": "eucatastrophe",
        "hint": "A sudden and favorable resolution of events in a story; a happy ending."
    },
    {
        "word": "palimpsest",
        "hint": "A manuscript or piece of writing material on which later writing has been superimposed on effaced earlier writing."
    },
    {
        "word": "crepuscular",
        "hint": "Relating to twilight."
    },
    {
        "word": "melancholia",
        "hint": "A deep, persistent sadness or depression."
    },
    {
        "word": "labyrinthine",
        "hint": "Complicated, maze-like."
    },
    {
        "word": "callipygian",
        "hint": "Having well-shaped buttocks."
    },
    {
        "word": "sesquipedalian",
        "hint": "Given to using long words."
    },
    {
        "word": "ataraxia",
        "hint": "A state of serene calmness."
    },
    {
        "word": "nefarious",
        "hint": "Wicked or criminal."
    },
    {
        "word": "anathema",
        "hint": "Something or someone that one vehemently dislikes."
    },
    {
        "word": "laconic",
        "hint": "Using very few words."
    },
    {
        "word": "somnambulist",
        "hint": "A person who sleepwalks."
    },
    {
        "word": "phantasmagoria",
        "hint": "A sequence of real or imaginary images like those seen in a dream."
    },
    {
        "word": "ineluctable",
        "hint": "Unable to be resisted or avoided; inescapable."
    },
    {
        "word": "gossamer",
        "hint": "Something light, delicate, or insubstantial."
    },
    {
        "word": "obfuscate",
        "hint": "To render obscure, unclear, or unintelligible."
    },
    {
        "word": "perspicacious",
        "hint": "Having keen mental perception and understanding."
    },
    {
        "word": "threnody",
        "hint": "A song of lamentation for the dead."
    },
    {
        "word": "mellifluous",
        "hint": "Sweet-sounding; pleasant to hear."
    },
    {
        "word": "lugubrious",
        "hint": "Looking or sounding sad and dismal."
    },
    {
        "word": "effulgent",
        "hint": "Shining brightly; radiant."
    },
    {
        "word": "cacophony",
        "hint": "Harsh discordant mixture of sounds."
    },
    {
        "word": "pugnacious",
        "hint": "Eager to argue or fight."
    },
    {
        "word": "pulchritude",
        "hint": "Physical beauty."
    },
    {
        "word": "pyrrhic",
        "hint": "Achieved at excessive cost."
    },
    {
        "word": "apocryphal",
        "hint": "Of doubtful authenticity."
    },
    {
        "word": "eldritch",
        "hint": "Weird and sinister."
    },
    {
        "word": "recondite",
        "hint": "Little known; abstruse."
    },
    {
        "word": "uxorious",
        "hint": "Excessively fond of one's wife."
    },
    {
        "word": "abstruse",
        "hint": "Difficult to understand; obscure."
    },
    {
        "word": "brobdingnagian",
        "hint": "Of gigantic size or scale."
    },
    {
        "word": "cynosure",
        "hint": "A person or thing that is the center of attention or admiration."
    },
    {
        "word": "ebullient",
        "hint": "Cheerful and full of energy."
    },
    {
        "word": "fugacious",
        "hint": "Tending to disappear; fleeting."
    },
    {
        "word": "halcyon",
        "hint": "Denoting a period of time in the past that was idyllically happy and peaceful."
    },
    {
        "word": "impecunious",
        "hint": "Having little or no money."
    },
    {
        "word": "jejune",
        "hint": "Naive, simplistic, and superficial."
    },
    {
        "word": "kakistocracy",
        "hint": "Government by the least qualified or most unprincipled citizens."
    },
    {
        "word": "lachrymose",
        "hint": "Tearful or given to weeping."
    },
    {
        "word": "misanthrope",
        "hint": "A person who dislikes humankind and avoids human society."
    },
    {
        "word": "nihilism",
        "hint": "The rejection of all religious and moral principles, often in belief that life is meaningless."
    },
    {
        "word": "obsequious",
        "hint": "Obedient or attentive to an excessive degree."
    },
    {
        "word": "penumbra",
        "hint": "The partially shaded outer region of a shadow."
    },
    {
        "word": "quagmire",
        "hint": "A soft boggy area of land that gives way underfoot; also used metaphorically for complex situations."
    },
    {
        "word": "raconteur",
        "hint": "A person skilled at telling stories."
    },
    {
        "word": "sagacious",
        "hint": "Having keen mental discernment and good judgment."
    },
    {
        "word": "torpid",
        "hint": "Mentally or physically inactive; lethargic."
    },
    {
        "word": "ululate",
        "hint": "Howl or wail as an expression of strong emotion."
    },
    {
        "word": "vexillology",
        "hint": "The study of flags."
    },
    {
        "word": "widdershins",
        "hint": "In a direction contrary to the sun's course; counterclockwise."
    },
    {
        "word": "xenophobia",
        "hint": "Dislike of or prejudice against people from other countries."
    },
    {
        "word": "yokel",
        "hint": "An uneducated and unsophisticated person from the countryside."
    },
    {
        "word": "zephyr",
        "hint": "A soft, gentle breeze."
    },
    {
        "word": "absquatulate",
        "hint": "To leave abruptly."
    },
    {
        "word": "bloviate",
        "hint": "To speak in a pompous manner."
    },
    {
        "word": "catachresis",
        "hint": "The use of a word in an incorrect or strained way."
    },
    {
        "word": "dystopia",
        "hint": "An imagined state or society where there is great suffering or injustice."
    },
    {
        "word": "equivocate",
        "hint": "Use ambiguous language so as to conceal the truth or avoid committing oneself."
    },
    {
        "word": "farrago",
        "hint": "A confused mixture."
    }
]