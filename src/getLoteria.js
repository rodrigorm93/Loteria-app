export const getLoteria = (total_num, tamaño) => {
  const arrayLoteria = [];

  while (arrayLoteria.length < tamaño) {
    let numRandom = Math.floor(Math.random() * (total_num - 1) + 1);
    let rep = false;

    for (let i = 0; i < arrayLoteria.length; i++) {
      if (arrayLoteria[i] === numRandom) {
        rep = true;
        break;
      }
    }

    if (!rep) {
      arrayLoteria[arrayLoteria.length] = numRandom;
    }
  }

  const array1 = [];
  for (let i = 0; i < 4; i++) {
    array1.push(arrayLoteria[i]);
  }

  const array2 = [];
  for (let i = 4; i < 8; i++) {
    array2.push(arrayLoteria[i]);
  }

  const array3 = [];
  for (let i = 8; i < 12; i++) {
    array3.push(arrayLoteria[i]);
  }

  return { arrayLoteria, array1, array2, array3 };
};
