import styled from "styled-components";

const MobileMenuCss = styled.div`

    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;

    a {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        color: #818181;
        display: block;
        transition: 0.3s;
    }

    a:hover {
        color: #f1f1f1;
    }

    .closebtn {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
    }

    span{
        font-size:30px;
        cursor:pointer;
    }

    /* background-color: var(--White);
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    padding: 1em;
    transition: 0.3s;
    ul{
        margin-top: 1.5em;
    }

    ul li{
        text-transform: capitalize;
          padding: .5em 0;
    } */
`;

export default MobileMenuCss;