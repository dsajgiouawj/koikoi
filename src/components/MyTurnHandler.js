import {send} from "@/components/GameUtil";


export class MyTurnHandler {
    oldPoint;
    selectedCard;
    turn;

    constructor(game, oldPoint) {
        this.game = game;
        this.oldPoint = oldPoint;
        this.turn = game.playerTurn;

        this.receive_step1 = (data) => {
            let l = game.tableCandidates(data.card.month).length;
            switch (l) {
                case 0:
                    game.addTable(data.card);
                    break;
                case 1:
                case 3:
                    game.match(data.card, undefined, true);
                    break;
                case 2:
                    console.assert(data.gameInfo !== undefined);
                    game.match(data.card, data.gameInfo, true);
                    break;
                default:
                    console.log('not implemented');
            }
            send('draw-and-discard-expose', this.turn);
        }
        this.receive_step2 = (data) => {
            this.selectedCard = data.card;
            let l = game.tableCandidates(data.card.month).length;
            if (l !== 2) {
                send('pass', this.turn)
            }
            //else wait to choose
        }
        this.receive_step3 = (data) => {
            let l = game.tableCandidates(this.selectedCard.month).length;
            switch (l) {
                case 0:
                    game.addTable(this.selectedCard);
                    break;
                case 1:
                case 3:
                    game.match(this.selectedCard, undefined, true);
                    break;
                case 2:
                    console.assert(data.gameInfo !== undefined);
                    game.match(this.selectedCard, data.gameInfo, true);
                    break;
                default:
                    console.log('not implemented');
            }
            //todo:役ができたらこいこいするか確認
            send('pass', 1 - this.turn);
        }
        this.receive_step4 = () => {
            game.endMyTurn();
        }
        this.protocol = [this.receive_step1, this.receive_step2, this.receive_step3, this.receive_step4];
    }

    receive(data) {
        this.protocol.shift()(data);
    }

    selectHand(card) {
        if (this.protocol[0] === this.receive_step1)
            this.selectedCard = card;
    }

    selectTable(card) {
        if (this.protocol[0] === this.receive_step1) {
            let cd = this.game.tableCandidates(this.selectedCard.month);
            if (cd.length !== 0 && this.selectedCard.month !== card.month) return;

            let gameInfo;
            if (cd.length === 2) {
                gameInfo = card;
            }
            send('discard-expose', this.turn, gameInfo, {"card": this.selectedCard});
        } else if (this.protocol[0] === this.receive_step3) {
            if (this.selectedCard.month !== card.month) return;
            send('pass', this.turn, card);
        }
    }
}

