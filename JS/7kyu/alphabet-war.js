/*There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. 
The tension between left side letters and right side letters was too high and the war began.

Write a function that accepts fight string consists of only small letters and return who wins the fight. 
When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.
*/

const LEFT_SIDE_LETTERS = {
    'w': 4,
    'p': 3,
    'b': 2,
    's': 1
};

const RIGHT_SIDE_LETTERS = {
    'm': 4,
    'q': 3,
    'd': 2,
    'z': 1
};

function alphabetWar(str) {
    let score = [...str].reduce((res, l) => (res[0] += LEFT_SIDE_LETTERS[l] || 0, res[1] += RIGHT_SIDE_LETTERS[l] || 0, res), [0,0]);
    return score[0] > score[1] ? 'Left side wins!' : score[0] < score[1] ? 'Right side wins!' : 'Let\'s fight again!';
}