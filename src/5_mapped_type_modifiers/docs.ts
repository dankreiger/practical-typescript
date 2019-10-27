import { IPet } from './5.interfaces';
import { ReadonlyPet } from './5.types';

const pet: IPet = { name: 'Buttons', age: 5 };
const readonlyPet: ReadonlyPet = { name: 'Buttons', age: 5 };

pet.age = 6;

// typescript guards readonly properties
// uncomment for error
//
//readonlyPet.age = 6;
