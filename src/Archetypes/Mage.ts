import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType:EnergyType = 'mana';
  private static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    Mage.incrementInstance();
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

export default Mage;