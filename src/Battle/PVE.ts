import Fighter, { SimpleFighter } from '../Fighter';
import getRandomInt from '../utils';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    private _player1: Fighter,
    private _monsters: SimpleFighter[],
  ) {
    super(_player1);
  }

  fight(): number {
    let hasAWinner = false;
    while (hasAWinner === false) {
      this.playerAttacksMonster();
      this.monstersAttackPlayer();
      const winner = this.verifyHasAWinner();

      if (winner !== 0) {
        hasAWinner = true;
        return winner;
      }
    }
    return 0;
  }

  private playerAttacksMonster() {
    const randomIndex = getRandomInt(1, this._monsters.length) - 1;
    const randomMonster = this._monsters[randomIndex];
    this._player1.attack(randomMonster);
  }

  private monstersAttackPlayer() {
    this._monsters.forEach((m) => {
      if (m.lifePoints !== -1) {
        m.attack(this._player1);
      }
    });
  }

  private verifyHasAWinner(): number {
    if (this._player1.lifePoints === -1) {
      return -1;
    }
    const monstersDefeated = this._monsters.every((m) => m.lifePoints === -1);
    if (monstersDefeated) return 1;
    return 0;
  }
}

export default PVE;