import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType:EnergyType = 'mana';
  private static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    Necromancer.incrementInstance();
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

export default Necromancer;