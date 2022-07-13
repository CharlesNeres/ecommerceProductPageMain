import styled from "styled-components";

const PricesCss = styled.div`
    margin: .5em 0;
    padding: 0 1em;
    overflow: hidden;

    span:first-child{
        font-size: 180%;
        font-weight: 700;
        float: left;
    }

    span:nth-child(2){
        float: left;
        margin-left: 1em;
        background-color: var(--PaleOrange);
        color: var(--Orange);
        font-weight: bold;
        padding: .4em;
        border-radius: .4em;
    }

    span:last-child{
        float: right;
        color: var(--DarkGrayishBlue);
        text-decoration: line-through;
    }
`;

export default PricesCss;