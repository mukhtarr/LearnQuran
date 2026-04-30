export const tajweedRules = [
  {
    id: 1,
    name: "Ghunna",
    arabic: "غُنَّة",
    color: "#22c55e",
    colorName: "green",
    description: "Nasalization - a nasal sound produced through the nose. Applied when Noon (ن) or Meem (م) has a Shadda.",
    duration: "2 counts (harakaat)",
    letters: ["نّ", "مّ"],
    example: {
      arabic: "إِنَّا",
      transliteration: "Innā",
      translation: "Indeed We",
      highlight: "نّ",
      source: "Surah Al-Qadr 97:1"
    }
  },
  {
    id: 2,
    name: "Ikhfa",
    arabic: "إِخْفَاء",
    color: "#3b82f6",
    colorName: "blue",
    description: "Concealment - hiding the Noon Sakin or Tanwin before 15 letters. The sound is partially hidden.",
    duration: "2 counts (harakaat)",
    letters: ["ت", "ث", "ج", "د", "ذ", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ف", "ق", "ك"],
    example: {
      arabic: "مَن كَانَ",
      transliteration: "Man Kāna",
      translation: "Whoever was",
      highlight: "نك",
      source: "Surah Al-Baqarah 2:20"
    }
  },
  {
    id: 3,
    name: "Idgham",
    arabic: "إِدْغَام",
    color: "#a855f7",
    colorName: "purple",
    description: "Merging - the Noon Sakin or Tanwin merges into the following letter. The first sound is absorbed.",
    duration: "With or without Ghunna",
    letters: ["ي", "ر", "م", "ل", "و", "ن"],
    example: {
      arabic: "مَن يَقُولُ",
      transliteration: "May Yaqūlu",
      translation: "Who says",
      highlight: "ني",
      source: "Surah Al-Baqarah 2:8"
    }
  },
  {
    id: 4,
    name: "Iqlab",
    arabic: "إِقْلَاب",
    color: "#f97316",
    colorName: "orange",
    description: "Conversion - the Noon Sakin or Tanwin is converted to a Meem sound before the letter Ba (ب).",
    duration: "2 counts (harakaat)",
    letters: ["ب"],
    example: {
      arabic: "أَنبِئْهُم",
      transliteration: "Ambi'hum",
      translation: "Inform them",
      highlight: "نب",
      source: "Surah Al-Baqarah 2:33"
    }
  },
  {
    id: 5,
    name: "Qalqala",
    arabic: "قَلْقَلَة",
    color: "#ef4444",
    colorName: "red",
    description: "Echoing/bouncing sound - a slight bouncing or echoing sound produced with certain letters when they have a Sukoon.",
    duration: "Brief vibration",
    letters: ["ق", "ط", "ب", "ج", "د"],
    example: {
      arabic: "قُلْ",
      transliteration: "Qul",
      translation: "Say",
      highlight: "قل",
      source: "Surah Al-Ikhlas 112:1"
    }
  },
  {
    id: 6,
    name: "Madd",
    arabic: "مَدّ",
    color: "#14b8a6",
    colorName: "teal",
    description: "Elongation - lengthening the sound of a vowel. There are different types with varying durations.",
    duration: "2-6 counts depending on type",
    letters: ["ا", "و", "ي"],
    example: {
      arabic: "الرَّحْمَٰنُ الرَّحِيمُ",
      transliteration: "Ar-Rahmāni Ar-Rahīmi",
      translation: "The Most Gracious, the Most Merciful",
      highlight: "ـا",
      source: "Surah Al-Fatiha 1:3"
    }
  }
];
