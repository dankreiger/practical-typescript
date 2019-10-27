interface IPet {
  pose(): void;
}

interface IFeline {
  nightvision: boolean;
}

// intersection equivalent with interface
interface ICat extends IPet, IFeline {}
