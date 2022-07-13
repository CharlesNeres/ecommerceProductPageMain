import React from "react";
import btnPrevius from '../../../images/icon-previous.svg';
import btnNext from '../../../images/icon-next.svg';
import SlidGalleryCss from "./SlidGalleryCss";

class SlidGallery extends React.Component{
    render(){
        return(
            <SlidGalleryCss>
                <div className="btn">
                    <button>
                        <img src={btnPrevius} alt="previous button" />
                    </button>
                    <button>
                        <img src={btnNext} alt="previous button" />
                    </button>
                </div>
            </SlidGalleryCss>
        )
    }
}

export default SlidGallery;