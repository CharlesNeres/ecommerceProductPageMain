import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import plus from '../../images/icon-plus.svg';
import minus from '../../images/icon-minus.svg';
import BottomCss from "./BottomCss";
import iconCart from "../../images/icon-cart.svg";

class Bottom extends React.Component{
    render(){
        return(
            <BottomCss>                
                <div className="increaseDecreaseUnit">
                    <button>
                        <img src={minus} alt="minus" />
                    </button>
                    <span>0</span>
                    <button>
                        <img src={plus} alt="plus" />
                    </button>
                </div>
                <button className="addItem">
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span>Add to cart</span>
                </button>
            </BottomCss>
        )
    }
}

export default Bottom;