/*
Red Knight is chasing two pawns. Which pawn will be caught, and where?

Input / Output
Input will be two integers:
- N vertical position of Red Knight (0 or 1).
- P horizontal position of two pawns (between 2 and 1000000).

Output has to be a tuple (python, haskell), an array (javascript), or a structure (C) with:
- "Black" or "White" - which pawn was caught
- Where it was caught (horizontal position)
*/

const redKnight = (n, p) => [(n + p) % 2 ? 'Black' : 'White', 2 * p];