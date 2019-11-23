/**
 * Returns TRUE if the first specified array contains all elements
 * from the second one. FALSE otherwise.
 *
 * @param {array} superset
 * @param {array} subset
 *
 * @returns {boolean}
 */
const arrayContainsArray = (superset, subset) => {
    if (0 === subset.length) {
        return false;
    }
    return subset.every(function (value) {
        return (superset.indexOf(value) >= 0);
    });
};

/**
 * Array of default moves
 */
const defaultMoves = [
    {player: null, id: 1},
    {player: null, id: 2},
    {player: null, id: 3},
    {player: null, id: 4},
    {player: null, id: 5},
    {player: null, id: 6},
    {player: null, id: 7},
    {player: null, id: 8},
    {player: null, id: 9}
];

/**
 * Array of winning combinations
 */
const winCombinations = [
    [1,2,3],
    [1,4,7],
    [4,5,6],
    [7,8,9],
    [1,5,9],
    [3,5,7],
    [2,5,8],
    [3,6,9]
];


const deepCopy = arr => JSON.parse(JSON.stringify(arr));

const isWin = (moves, turn) => {
    let xMoves = [];
    let oMoves = [];
    const win ={
        x: false,
        o: false
    };

    moves.forEach(move => {
        if (move.player === true) {
            xMoves.push(move.id);
        }
        if (move.player === false) {
            oMoves.push(move.id);
        }
    });

    // x played 
    if (turn) {
        win.x = winningMoves(xMoves);
    } else {
        // O played
        win.o = winningMoves(oMoves);
    }

    return win;

};

const winningMoves = (moves) => {
    let win = false;
    winCombinations.forEach(combination => {
        if (arrayContainsArray(moves, combination)) {
            win = true;
            return;
        }
    });

    return win;

}

export {arrayContainsArray, defaultMoves, winCombinations, deepCopy, isWin};