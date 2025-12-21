export interface Algorithm {
  step: (arr: number[]) => Generator<number[], number[], number[]>;
}

// export interface Algorithm {
//   arrs: number[][];
//   get: (i: number) => number[];
//   step: (arr: number[]) => Generator<number[], number[], number[]>; // each single sort step should be 2 real steps: a comparison (yellow) and a move (green)
//   // the final move should also be broken up (a move, then finally all green)
// }
