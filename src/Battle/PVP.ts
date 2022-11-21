import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(
    private _player1: Fighter,
    private _player2: Fighter,
  ) {
    super(_player1);
  }

  fight(): number {
    let hasAWinner = false;
    while (hasAWinner === false) {
      this._player1.attack(this._player2); 
      this._player2.attack(this._player1);

      const winner = this.verifyHasAWinner();
      if (winner !== 0) {
        hasAWinner = true;
        return winner;
      }
    }
    return 0;
  }
  
  private verifyHasAWinner(): number {
    if (this._player1.lifePoints === -1) {
      return -1;
    }
    if (this._player2.lifePoints === -1) {
      return 1;
    }
    return 0;
  }
}

export default PVP;