import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType:EnergyType = 'stamina';
  private static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    Ranger.incrementInstance();
  }

  private static incrementInstance(): void {
    this._createdArchetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this._createdArchetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;  
  }
}

export default Ranger;