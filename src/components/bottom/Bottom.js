import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import plus from '../../images/icon-plus.svg';
import minus from '../../images/icon-minus.svg';
import BottomCss from "./BottomCss";
import iconCart from "../../images/icon-cart.svg";

class Bottom extends React.Component{
    constructor(props){
        super(props);
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.state = {
            value: 0
        }
    }

    decrease(){
        if(this.state.value > 0){
            this.setState({
                value: this.state.value - 1
            })
        }
    }

    increase(){
        this.setState({
            value: this.state.value + 1
        })
    }

    render(){
        return(
            <BottomCss>                
                <div className="increaseDecreaseUnit">
                    <button onClick={this.decrease}>
                        <img src={minus} alt="minus" />
                    </button>
                    <span>{this.state.value}</span>
                    <button onClick={this.increase}>
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