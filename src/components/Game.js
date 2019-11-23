import React, { Component } from 'react';

import Header from './Header/Header';
import * as Helper from './../helpers/GameHelper';
import Board from './Board/Board';
import GameOverModal from './GameOverModal/GameOverModal';
import { ReactComponent as X } from '../assets/img/x.svg';
import { ReactComponent as O} from '../assets/img/o.svg';

class Game extends Component {


    constructor(props) {
        super(props);

        this.movesPattern =

        this.state = {
            xScore: 0,
            oScore: 0,
            turn: true, // true:X, false: O
            gameOver: false,
            isShowingModal: false,
            winner: false,
            moves: Helper.deepCopy(Helper.defaultMoves),
            movesCount: 0
        };

        this.handleMove = this.handleMove.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
        this.setWinner = this.setWinner.bind(this);

        this.oSvg = <O style={{width: '40px'}}/>;
        this.xSvg = <X style={{width: '40px'}}/>;
    }

    /**
     * 
     * @param {Number} id 
     */
    handleMove(id) {
        const clickedID = Number(id);
        
        let newMoves = this.state.moves.map((move) => {
            if (move.id === clickedID) {
                move.player = this.state.turn;
                move.clicked = true;
            }
            return move;
        });

        this.setState(prevState => ({turn: !prevState.turn, moves: newMoves, movesCount: prevState.movesCount + 1}))

        // check for winner
        const win = Helper.isWin(this.state.moves, this.state.turn);

        if (win.o === true) {
            this.setWinner(this.oSvg, 0, 1);
            return;
        }
        if (win.x === true) {
            this.setWinner(this.xSvg, 1, 0)
            return;
        }

        // out of moves ?
        if (this.state.movesCount >= 8) {
            this.setWinner(false);
        }

    }

    /**
     * 
     * @param {ReactComponent} winner 
     * @param {Number} xScore 
     * @param {Number} oScore 
     */
    setWinner(winner, xScore=0, oScore=0) {

        this.setState( prevState => ({
            gameOver: true, 
            isShowingModal: true, 
            winner,
            oScore: prevState.oScore + oScore,
            xScore: prevState.xScore + xScore
        }));
    }

    handleModalClose() {
        this.setState({
            isShowingModal: false, 
            gameOver: false, 
            movesCount: 0,
            moves: Helper.deepCopy(Helper.defaultMoves)});
    }

    render() {

        const text = (this.state.winner) ? 'Winner' : 'Draw';
        const winner = (this.state.winner) ? this.state.winner : '';

        return (
        <div>
            <Header turn={this.state.turn} xScore={this.state.xScore} oScore={this.state.oScore}/>
            <Board moves={this.state.moves} turn={this.state.turn} click={this.handleMove}/>
            <GameOverModal closeHendler={this.handleModalClose} text={text} winner={winner} isShowingModal={this.state.isShowingModal} />
        </div>
        );
    }
}

export default Game;