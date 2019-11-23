import React from 'react';
import './Header.css';

import Score from '../Score/Score';
import { ReactComponent as X } from '../../assets/img/x.svg';
import { ReactComponent as O} from '../../assets/img/o.svg';

const Header = (props) => {

    const turn = props.turn === true ? <X /> : <O />;

    return <div className="Header">
        <Score xScore={props.xScore} oScore={props.oScore} />
        <div className="Turn">
            {turn} <span>Turn</span>
        </div>
    </div>
}

export default Header;