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

      const winner = PVP.verifyHasAWinner(this._player1, this._player2);
      if (winner !== 0) {
        hasAWinner = true;
        return winner;
      }
    }
    return 0;
  }
  
  private static verifyHasAWinner(player1: Fighter, player2: Fighter): number {
    if (player1.lifePoints === -1) {
      return -1;
    }
    if (player2.lifePoints === -1) {
      return 1;
    }
    return 0;
  }
}

export default PVP;