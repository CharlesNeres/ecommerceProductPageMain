import styled from "styled-components";

const DescriptionProductCss = styled.div`

    padding: 1em;

    p:first-child{
        color: var(--Orange);
        text-transform: uppercase;
        font-size: 70%;
        font-weight: bold;
    }

    h1{
        text-transform: capitalize;
        font-size: 160%;
        font-weight: 700;
        margin: .5em 0;
    }

    p:last-child{
        line-height: 1.5;
    }
`;

export default DescriptionProductCss;