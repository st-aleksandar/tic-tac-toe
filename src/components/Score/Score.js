import React from 'react';
import './Score.css';

import { ReactComponent as X } from '../../assets/img/x.svg';
import { ReactComponent as O} from '../../assets/img/o.svg';

const Score = (props) => {
    return (
        <div className="Score">
            <div className="Score-inner">
                <X /> <div>{props.xScore}</div>
            </div>
            <div className="Score-inner">
                <O /> <div>{props.oScore}</div>
            </div>
        </div>
    );
}

export default Score;