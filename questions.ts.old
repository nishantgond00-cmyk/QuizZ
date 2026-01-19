
import { Question, SubjectId } from '../types';

/**
 * In a production app, this would be a large JSON file or an API.
 * For this high-performance prototype, we use a deterministic generator
 * that produces unique, consistent questions for every level.
 */
export const getQuestionsForLevel = (subject: SubjectId, level: number): Question[] => {
  const q: Question[] = [];
  
  for (let i = 1; i <= 10; i++) {
    const id = `${subject}-${level}-${i}`;
    let text = "";
    let options: string[] = [];
    let correct = 0;

    // Use level and index to create deterministic "randomness"
    const seed = level * 10 + i;

    switch (subject) {
      case 'MATH':
        const num1 = (level * 2) + i;
        const num2 = level + (i * 3);
        const op = seed % 2 === 0 ? '+' : '*';
        const result = op === '+' ? num1 + num2 : num1 * num2;
        text = `Mathematics Level ${level}: Solve the expression: ${num1} ${op} ${num2}`;
        options = [
          result.toString(),
          (result + 5).toString(),
          (result - 2).toString(),
          (result * 2).toString()
        ].sort(() => (seed % 4) - 2);
        correct = options.indexOf(result.toString());
        break;
      
      case 'PHYSICS':
        const force = level * 10;
        const area = i;
        const pressure = force / area;
        text = `Physics Level ${level}: If a force of ${force}N is applied to an area of ${area}m², what is the pressure?`;
        options = [
          `${pressure.toFixed(1)} Pa`,
          `${(pressure + 10).toFixed(1)} Pa`,
          `${(pressure / 2).toFixed(1)} Pa`,
          `${(pressure * 1.5).toFixed(1)} Pa`
        ];
        correct = 0;
        break;

      case 'GK':
        const topics = ["History", "Geography", "Civics", "Current Affairs"];
        const topic = topics[seed % topics.length];
        text = `General Knowledge (${topic}) Level ${level}: Which significant event is associated with the value ${2000 + level}?`;
        options = ["Economic Reform", "Infrastructure Launch", "Technological Milestone", "None of the above"];
        correct = seed % 4;
        break;

      case 'SSC':
        text = `SSC Exam Prep - Reasoning Level ${level}: If 'APPLE' is coded as ${100 + level}, what would 'ORANGE' be?`;
        options = [`${150 + level}`, `${120 + level}`, `${200 + level}`, `${90 + level}`];
        correct = 1;
        break;

      default:
        text = `${subject} Challenge - Level ${level}, Q${i}: Identify the most accurate statement regarding this discipline.`;
        options = ["Statement Alpha", "Statement Beta", "Statement Gamma", "Statement Delta"];
        correct = (seed * 7) % 4;
    }

    q.push({ id, subject, level, text, options, correctAnswer: correct });
  }
  
  return q;
};
