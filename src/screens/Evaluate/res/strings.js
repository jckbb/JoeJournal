export const summary = [
  {
    question: 'Next brew dial grinder by?',
    options: [
      {
        answer: 'Recommended: +2',
        value: 2,
      },
      {
        answer: '-1',
        value: -1,
      },
      {
        answer: '+1',
        value: 1,
      },
      {
        answer: 'Keep it',
        value: 0,
      },
    ],
  },
];

export const evaluationQuestions = [
  {
    question: 'Did you notice tangy, sour, or salty in the coffee?',
    options: [
      {
        answer: 'Yes',
        value: 1,
      },
      {
        answer: 'No',
        value: 0,
      },
    ],
  },
  {
    question: 'Was the coffee bitter?',
    options: [
      {
        answer: 'Yes',
        value: -1,
      },
      {
        answer: 'No',
        value: 0,
      },
    ],
  },
];
