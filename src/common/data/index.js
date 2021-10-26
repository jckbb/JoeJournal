export const grinderModelData = {
  encore_baratza: {
    displayName: 'Encore Baratza',
    name: 'encore_baratza',
    model: 'Encore',
    brand: 'Baratza',
    maxDial: 40,
    step: 1,
  },
};

export const grinderModelByName = ['encore_baratza'];

export const methodData = {
  pour_over: {
    displayName: 'Pour Over',
  },
};

export const brewModelData = {
  harioV60: {
    displayName: 'Hario v60 pour-over',
    model: 'v60',
    brand: 'hario',
    method: 'pour over',
  },
};

export const brewModelByName = ['harioV60'];

export const evaluateScale = {
  aroma: {
    name: 'Aroma',
    from: 'Low',
    to: 'High',
  },
  acidity: {
    name: 'Acidity',
    from: 'Low',
    to: 'High',
  },
  sweetness: {
    name: 'Sweetness',
    from: 'Low',
    to: 'High',
  },
  body: {
    name: 'Body',
    from: 'Light',
    to: 'Heavy',
  },
  finish: {
    name: 'Finish',
    from: 'Short',
    to: 'Long',
  },
};
