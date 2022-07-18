import styled from "styled-components";

const PopupCartCss = styled.div`
    background-color: var(--White);
    width: 95%;
    height: 18em;
    position: absolute;
    left: 50%;
    margin-top: 1em;
    transform: translateX(-50%);
    border-radius: 0.4em;
    padding: 0.4em;
    z-index: 1;
    display: none;

    header{
        font-weight: bold;
        border-bottom: 1px solid black;
        padding: 1em 0;
    }

    .body{
        text-align: center;
        position: relative;
        top: 50%;
        transform: translateY(-50%);        
    }
`;

export default PopupCartCss;