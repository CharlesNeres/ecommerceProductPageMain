import styled from "styled-components";
import img1 from '../../../images/image-product-1.jpg';

const SlidGalleryCss = styled.div`
    width: 100%;
    height: 20em;
    background-color: red;
    background-image: url(${img1});
    background-size: cover;
    background-position: center;

    .btn{
        position: relative;
        top: 50%;
        transform: translateY(-50%);        
        padding: 0 1em;
        overflow: hidden;

        button{
            border: none;
            outline: none;
            width: 2em;
            height: 2em;
            border-radius: 50%;
        
            img{
                height: 40%;          
            }
        }

        button:first-child{
            float: left;
        }

        button:last-child{
            float: right;
        }
    }
`;

export default SlidGalleryCss;