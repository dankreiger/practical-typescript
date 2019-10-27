class HouseCat implements IFeline, Pet {
  public nightvision = true;
  public pose = () => {
    console.log('I am posing, do not pet me');
  };
}
