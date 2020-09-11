import {assert} from "@/components/GameUtil";


export class OpTurnHandler {
    oldPoint;
    drawCard;

    constructor(game, oldPoint) {
        this.game = game;
        this.oldPoint = oldPoint;

        this.receive_step1 = (data) => {
            console.log('receive_step1:' + JSON.stringify(data));
            assert(data, 'discard-expose', 1 - game.playerTurn);
            let l = game.tableCandidates(data.card.month).length;
            switch (l) {
                case 0:
                    game.addTable(data.card);
                    break;
                case 1:
                case 3:
                    game.opTurn_match(data.card);
                    break;
                case 2:
                    console.assert(data.gameInfo !== undefined);
                    game.opTurn_match(data.card, data.gameInfo);
                    break;
                default:
                    console.log('not implemented');
            }
        }
        this.receive_step2 = (data) => {
            console.log('receive_step2:' + JSON.stringify(data));
            assert(data, 'draw-and-discard-expose', 1 - game.playerTurn);
            this.drawCard = data.card;
        }
        this.receive_step3 = (data) => {
            console.log('receive_step3:' + JSON.stringify(data));
            assert(data, 'pass', 1 - game.playerTurn);
            let d = this.drawCard
            let l = game.tableCandidates(d.month).length;
            switch (l) {
                case 0:
                    game.addTable(d);
                    break;
                case 1:
                case 3:
                    game.opTurn_match(d);
                    break;
                case 2:
                    console.assert(data.gameInfo !== undefined);
                    game.opTurn_match(d, data.gameInfo);
                    break;
                default:
                    console.log('not implemented');
            }
        }
        this.receive_step4 = (data) => {
            console.log('receive_step4:' + JSON.stringify(data));
            assert(data, 'pass', game.playerTurn);
            game.endOpTurn();
        }
        this.protocol = [this.receive_step1, this.receive_step2, this.receive_step3, this.receive_step4];
    }

    receive(data) {
        this.protocol.shift()(data);
    }
}

