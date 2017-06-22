/**
 * Created by zhoutk on 17-4-25.
 */
import styled from 'styled-components';

const TodoInput = styled.input`
    padding: 10px;
    font-size: 16px;
    border: 2px solid #FFF;
`;

const TodoButton = styled.button`
    padding: 10px;
    font-size: 16px;
    margin: 10px;
    background-color: #0066FF;
    color: #FFF;
    border: 2px solid #0066FF;
    
    &:hover {
        background-color: #003399;
        border: 2px solid #003399;
        cursor: pointer;
    }
`;

const TodoClose = styled.button`
    padding: 0px;
    font-size: 8px;
    margin: 0px;
    background-color: #006600;
    color: #FFF;
    border: 2px solid #006600;
    
    &:hover {
        background-color: #003300;
        border: 2px solid #003300;
        cursor: pointer;
    }
`;

const TodoLi = styled.li`
    color: #333;
    background-color: rgba(255,255,255,.5);
    padding: 5px;
    margin-bottom: 5px;
    border-radius: 5px;
`;

const TodoUl = styled.ul`
    list-style: none;
    padding-left: 0;
    width: 255px;
`;

export {TodoInput, TodoButton, TodoLi, TodoUl, TodoClose};