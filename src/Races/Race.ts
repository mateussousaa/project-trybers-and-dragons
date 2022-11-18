abstract class Race {
  constructor(
    private _name: string,
    private _dexterity: number,
  ) {}

  get name() {
    return this._name;
  }

  get dexterity() {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints():number;
}

export default Race;