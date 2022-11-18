import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints = 80;
  private static _createdRacesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.incrementInstances();
  }

  private static incrementInstances() {
    this._createdRacesInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._createdRacesInstances;
  }
}

export default Dwarf;