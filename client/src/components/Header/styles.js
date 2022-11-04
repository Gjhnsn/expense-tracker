import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    padding: 10px 0;
    line-height: 36px;

    a {
        
        position: absolute;
        right: 0;
        margin-right: 20px;
        opacity: .5;
        transition: opacity .5s ease;
        cursor: pointer;

        &:hover {
        opacity: 1;
    }
    }
`