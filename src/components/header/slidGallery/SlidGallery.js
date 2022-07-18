import React from "react";
// btn images
import btnPrevius from '../../../images/icon-previous.svg';
import btnNext from '../../../images/icon-next.svg';
// slid images
import img1 from '../../../images/image-product-1.jpg';
import img2 from '../../../images/image-product-2.jpg';
import img3 from '../../../images/image-product-3.jpg';
import img4 from '../../../images/image-product-4.jpg';
import SlidGalleryCss from "./SlidGalleryCss";

class SlidGallery extends React.Component{

    constructor(props){
        super(props);
        this.previusImage = this.previusImage.bind(this);
        this.nextImage = this.nextImage.bind(this);
        this.state = {
            cont: 0,
            imgs: [ img1, img2, img3, img4 ]
        }
    }

    previusImage(){
        this.setState({
            cont: this.state.cont == 0 ? 3 : this.state.cont - 1
        })
    }

    nextImage(){
        this.setState({
            cont: this.state.cont == 3 ? 0 : this.state.cont + 1
        })
    }

    render(){
        const mystyle = {
            backgroundImage: `url(${this.state.imgs[this.state.cont]})`
        }

        return(
            <SlidGalleryCss style={mystyle}>
                <div className="btn">
                    <button onClick={this.previusImage}>
                        <img src={btnPrevius} alt="previous button" />
                    </button>
                    <button onClick={this.nextImage}>
                        <img src={btnNext} alt="previous button" />
                    </button>
                </div>
            </SlidGalleryCss>
        )
    }
}

export default SlidGallery;