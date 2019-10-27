import { IPet } from './5.interfaces';

export type ReadonlyPet = {
  readonly [K in keyof IPet]: IPet[K];
};

// can also remove optional flags and add readonly like so:

// export type ReadonlyPet = {
//   +readonly [K in keyof IPet]-?: IPet[K];
// };
