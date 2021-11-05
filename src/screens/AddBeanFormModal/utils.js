export const convertStringToArray = (text) => {
  let result = [];

  result = text.split(', ');

  return result;
};

export const convertToUsableData = (data) => {
  let result = {};

  for (const field in data) {
    if (field === 'notes') {
      let noteList = [];
      const notes = data[field].value;
      const list = notes.split(',');

      for (let i = 0; i < list.length; i++) {
        let note = list[i];
        note = note.replace(/^\s/g, '');
        note = note.replace(/\s$/g, '');

        if (note.length > 0) {
          console.log(note.length);
          noteList = [...noteList, note];
        }
      }

      result = {
        ...result,
        [field]: noteList,
      };
    } else {
      result = {
        ...result,
        [field]: data[field].value,
      };
    }
  }

  return result;
};
