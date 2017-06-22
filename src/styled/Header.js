/**
 * Created by zhoutk on 17-4-25.
 */
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const HeaderUl = styled.ul`
    background-color: #111;
    padding: 0;
`;

const HeaderLi = styled.li`
    display: inline;
    list-style-type: none;
    margin: 0;
`;

const HeaderA = styled(NavLink)`
    color: #FFF;
    font-weight: bold;
    text-decoration: none;
    padding: 20px;
    display: inline-block;
    
    &:hover {
    color: yellow;
  }
`;

export {HeaderUl, HeaderLi, HeaderA};