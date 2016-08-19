import Ember from 'ember';

export function bingoLogic(modifier, rowAdd, colAdd, diagAdd) {
  function winState(conviction) {
    const highlight = document.getElementsByClassName(conviction);

    let i;
    for (i = 0; i < 5; i++) {
      highlight[i].className += ' win-tile';
      setTimeout('', 800);
    }
    window.confirm(winning);
  }
  const rowa = { value: 0 };
  const rowb = { value: 0 };
  const rowc = { value: 1 };
  const rowd = { value: 0 };
  const rowe = { value: 0 };

  const colOne = { value: 0 };
  const colTwo = { value: 0 };
  const colThree = { value: 1 };
  const colFour = { value: 0 };
  const colFive = { value: 0 };

  const horOne = { value: 1 };
  const horTwo = { value: 1 };

  // let mod = modifier;
  const row = rowAdd;
  const col = colAdd;
  const diag = diagAdd;
  let winning;
  let conviction;

  if (modifier.checked) {
    row.value++;
    col.value++;

  // Special case for free space
    if (diagAdd === true) {
      horOne.value++;
      horTwo.value++;
    } else {
      diag.value++;
    }

  // These nested if statements detect bingos.
    if (row.value === 5) { // Searches for a winning ROW
      if (rowa.value === 5) {
        conviction = 'a';
        winning = 'Bingo on Row A';
      } else if (rowb.value === 5) {
        conviction = 'b';
        winning = 'Bingo on Row B';
      } else if (rowc.value === 5) {
        conviction = 'c';
        winning = 'Bingo on Row C';
      } else if (rowd.value === 5) {
        conviction = 'd';
        winning = 'Bingo on Row D';
      } else if (rowe.value === 5) {
        conviction = 'e';
        winning = 'Bingo on Row E';
      } else {
        winning = "You're a cheater";
      }

      winState(conviction);
    }
    if (col.value === 5) { // Searches for a winning COLUMN
      if (colOne.value === 5) {
        conviction = 'one';
        winning = 'Bingo on Column 1';
      } else if (colTwo.value === 5) {
        conviction = 'two';
        winning = 'Bingo on Column 2';
      } else if (colThree.value === 5) {
        conviction = 'three';
        winning = 'Bingo on Column 3';
      } else if (colFour.value === 5) {
        conviction = 'four';
        winning = 'Bingo on Column 4';
      } else if (colFive.value === 5) {
        conviction = 'five';
        winning = 'Bingo on Column 5';
      } else {
        winning = "You're a cheater";
      }

      winState(conviction);
    }

  // Detects a diagonal win (and a free space win if someone feels like being a fucking contrarian)
    if (diag.value === 5 || diag === true) {
      if (horOne.value === 5) {
        winning = 'Bingo on the Backslash';
        conviction = 'h-1';
        winState(conviction);
      } else if (horTwo.value === 5) {
        winning = 'Bingo on the Forwardslash';
        conviction = 'h-2';
        winState(conviction);
      }
    }
  } else {
    row.value--;
    col.value--;

  // Special case for free space
    if (diag === true) {
      horOne.value--;
      horTwo.value--;
    } else {
      diag.value--;
    }
  }
}

export default Ember.Helper.helper(bingoLogic);




