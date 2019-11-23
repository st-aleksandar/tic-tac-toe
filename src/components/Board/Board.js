import React from 'react';
import './Board.css';

import '../Square/Square';
import Square from '../Square/Square';


const Board = (props) => {

    return <div className="Board">
            <table className="Table">
                <tbody>
                    <tr className="Row">
                        <td className="Row-top-left">
                        <Square moves={props.moves} id="1" turn={props.turn}  click={props.click}/>
                        </td>
                        <td className="Row-top-center">
                            <Square moves={props.moves} id="2" turn={props.turn}  click={props.click}/>
                        </td>
                        <td className="Row-top-right">
                            <Square moves={props.moves} id="3" turn={props.turn}  click={props.click}/>
                        </td>
                    </tr>
                    <tr className="Row">
                        <td className="Row-center-left">
                            <Square moves={props.moves} id="4"  turn={props.turn} click={props.click}/>
                        </td>
                        <td className="Row-center-center">
                            <Square moves={props.moves} id="5" turn={props.turn}  click={props.click}/>
                        </td>
                        <td className="Row-center-right">
                            <Square moves={props.moves} id="6" turn={props.turn}  click={props.click}/>
                        </td>
                    </tr>
                    <tr className="Row">
                        <td className="Row-bottom-left">
                            <Square moves={props.moves} id="7" turn={props.turn}  click={props.click}/>
                        </td>
                        <td className="Row-bottom-center">
                            <Square  moves={props.moves} id="8"  turn={props.turn} click={props.click}/>
                        </td>
                        <td className="Row-bottom-right">
                            <Square moves={props.moves} id="9" turn={props.turn}  click={props.click}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>;

}

export default Board;