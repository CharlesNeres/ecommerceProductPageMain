import styled from "styled-components";

const BottomCss = styled.footer`
    margin: 1em 0;
    padding: 0 1em;
        
    .increaseDecreaseUnit{
        background-color: var(--LightGrayishBlue);
        padding: 1em 1em;
        border-radius: 0.4em;    
        text-align: center;
        overflow: hidden;
        font-weight: bold;
    }

    .increaseDecreaseUnit button:first-child{
        float: left;
        border: none;
        outline: none;
        background-color: var(--LightGrayishBlue);
        cursor: pointer;
    }

    .increaseDecreaseUnit button:last-child{
        float: right;
        border: none;
        outline: none;
        background-color: var(--LightGrayishBlue);
        cursor: pointer;
    }

    .addItem{
        background-color: var(--Orange);
        border: none;
        outline: none;
        border-radius: 0.4em;
        color: var(--White);
        width: 100%;
        padding: 1em 0;
        margin-top: 1em;
        font-weight: bold;
        cursor: pointer;
        
        span{
            margin-left: 1em;
        }
    }
`;

export default BottomCss;