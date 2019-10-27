type Pet = {
  pose(): void;
};

// intersection of interface and type
type Cat1 = IFeline & Pet;
