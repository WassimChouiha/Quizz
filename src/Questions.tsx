export interface Question {
    question: string;
    options: string[];
    correctAnswer: string;
}

const questions: Question[] = [
    {
        question: 'What is the capital of France?',
        options: ['Berlin', 'Paris', 'Madrid', 'Rome'],
        correctAnswer: 'Paris',
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
        correctAnswer: 'Mars',
    },
    {
        question: 'What is the the biggest country?',
        options: ['Russia', 'Brazil', 'China', 'Canada'],
        correctAnswer: 'Russia',
    },
    
    {
        question: 'What is the biggest continent?',
        options: ['Africa', 'Europ', 'Asia', 'Antarctica'],
        correctAnswer: 'Asia',
    },
    {
        question: 'How many moons does jupiter have?',
        options: ['3', '69', '1', '95'],
        correctAnswer: '95',
    },
];

export default questions;
