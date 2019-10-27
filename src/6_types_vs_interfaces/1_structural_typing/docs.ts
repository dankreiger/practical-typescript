// TOPIC: types vs. interfaces

/**
 * @description types
 * used for aliasing other types to a resuable name
 */

/**
 * @description interfaces
 * used for more traditional OOP purposes
 *
 * i.e. they define the shape of an object and use that as a contract
 *
 * example usages:
 * - function parameters
 * - for classes to implement
 */

const initialData = {
  age: 4,
  eat: () => {},
  speak: () => 'woof'
};

// these two are mostly equivalent
let animalInterface: IAnimal = initialData;
let animalTypeAlias: AnimalTypeAlias = initialData;

// typescript uses structural typing
// as long as the types/interfaces used have the same
// structure, it doesn't matter if they are distinct
animalInterface = animalTypeAlias;

// --------------------------------------- //

// non-equivalent type: error

// for error example
interface IAnimalAlt {
  age: string;
  eat(): void;
  speak(): string;
}
let animalInterface1: IAnimalAlt;

// uncomment to show error
//
// animalInterface1 = animalTypeAlias;
