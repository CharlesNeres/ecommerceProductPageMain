import styled from 'styled-components';

const NavCss = styled.nav`
    background-color: pink;
    padding: 1em;
    overflow: hidden;    

    .iconLeft{
        float: left;

        img:last-child{        
            margin-left: 1em;
        } 
    }

    .iconRight{
        float: right;

        img:last-child{
            height: 1.5em;
            margin-left: 1em;
        } 
    }    
`;

export default NavCss;