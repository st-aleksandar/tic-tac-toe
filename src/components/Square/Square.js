import React from  'react';
import './Square.css';
import { ReactComponent as X } from '../../assets/img/x.svg';
import { ReactComponent as O} from '../../assets/img/o.svg';

const Square = props =>  {

    let found = false;
    
    props.moves.some((move) => {
        if (move.id === Number(props.id)) {
            if (move.player !== null) {
                const sign = move.player ? <X /> : <O />;
                found =  (
                    <div className="Square">
                            {sign}
                        </div>
                );  
            } else {
                found = <div className="Square" onClick={() => props.click(props.id)}/>
            }
        }

        return found;
        
    });

    return found;
        
    
};

export default Square;