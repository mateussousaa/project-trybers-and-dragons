import Race from './Race';

class Orc extends Race {
  private _maxLifePoints = 74;
  private static _createdRacesInstances = 0;

  constructor(name: string, dexterity:number) {
    super(name, dexterity);
    Orc.incrementInstances();
  }

  private static incrementInstances() {
    this._createdRacesInstances += 1;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static createdRacesInstances():number {
    return this._createdRacesInstances;
  }
}

export default Orc;