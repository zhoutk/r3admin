/**
 * Created by zhoutk on 17-4-18.
 */

import React, { Component } from 'react';
import styled from 'styled-components';

const SquareDiv = styled.div`
    height: 150px;
    background-color: ${props => props.color};
    `;
class Square extends Component {
    render() {
        return (
            <SquareDiv {...this.props}></SquareDiv>
        );
    }
}

export default Square;
