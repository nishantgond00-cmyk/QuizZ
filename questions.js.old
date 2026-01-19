const questions = [
  // GK
  {
    q: "भारत की राजधानी क्या है?",
    options: ["दिल्ली", "मुंबई", "लखनऊ", "पटना"],
    answer: 0
  },
  {
    q: "भारत का राष्ट्रीय पशु कौन सा है?",
    options: ["शेर", "हाथी", "बाघ", "घोड़ा"],
    answer: 2
  },

  // Mathematics
  {
    q: "5 × 6 = ?",
    options: ["11", "30", "56", "60"],
    answer: 1
  },
  {
    q: "√64 का मान क्या है?",
    options: ["6", "7", "8", "9"],
    answer: 2
  },

  // Science
  {
    q: "पानी का रासायनिक सूत्र क्या है?",
    options: ["H2O", "CO2", "O2", "NaCl"],
    answer: 0
  }
];
// ===== QUESTION BANK (AUTO 1000+ QUESTIONS) =====

const allQuestions = [];

/* ---------- MATHS (400 QUESTIONS) ---------- */
for (let i = 1; i <= 400; i++) {
  allQuestions.push({
    subject: "Maths",
    question: `What is ${i} + ${i}?`,
    options: [
      `${i}`,
      `${i * 2}`,
      `${i + 1}`,
      `${i * 3}`
    ],
    answer: 1
  });
}

/* ---------- GK (300 QUESTIONS) ---------- */
const gkData = [
  ["Capital of India?", ["Delhi","Mumbai","Kolkata","Chennai"], 0],
  ["National animal of India?", ["Tiger","Lion","Elephant","Horse"], 0],
  ["National bird of India?", ["Peacock","Eagle","Crow","Parrot"], 0],
  ["Who is known as Father of Nation?", ["Gandhi","Nehru","Bose","Patel"], 0],
  ["Taj Mahal is in?", ["Agra","Delhi","Jaipur","Lucknow"], 0],
];

for (let i = 0; i < 300; i++) {
  const q = gkData[i % gkData.length];
  allQuestions.push({
    subject: "GK",
    question: q[0],
    options: q[1],
    answer: q[2]
  });
}

/* ---------- PHYSICS (200 QUESTIONS) ---------- */
const physicsData = [
  ["Unit of force?", ["Newton","Joule","Watt","Pascal"], 0],
  ["Speed formula?", ["D/T","T/D","D×T","T×D"], 0],
  ["SI unit of work?", ["Joule","Watt","Newton","Volt"], 0],
];

for (let i = 0; i < 200; i++) {
  const q = physicsData[i % physicsData.length];
  allQuestions.push({
    subject: "Physics",
    question: q[0],
    options: q[1],
    answer: q[2]
  });
}

/* ---------- CHEMISTRY (100 QUESTIONS) ---------- */
const chemistryData = [
  ["H2O is?", ["Water","Hydrogen","Oxygen","Helium"], 0],
  ["NaCl is?", ["Salt","Sugar","Acid","Base"], 0],
  ["pH of acid is?", ["<7",">7","7","0"], 0],
];

for (let i = 0; i < 100; i++) {
  const q = chemistryData[i % chemistryData.length];
  allQuestions.push({
    subject: "Chemistry",
    question: q[0],
    options: q[1],
    answer: q[2]
  });
}

/* ---------- TOTAL QUESTIONS CHECK ---------- */
console.log("Total Questions:", allQuestions.length);
// 👉 Output: 1000+

/* ---------- RANDOM 10 QUESTIONS FOR QUIZ ---------- */
function getRandomQuestions(count = 10) {
  const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// USE THIS IN YOUR QUIZ
const quizQuestions = getRandomQuestions(10);
