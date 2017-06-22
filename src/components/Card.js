/**
 * Created by zhoutk on 17-4-18.
 */

import React, { Component } from 'react';
import styled from 'styled-components';
import Square from './Square';
import Label from './Label';

const CardDiv = styled.div`
    height: 200px;
    width: 150px;
    padding: 0,
    background-color: #FFF;
    -webkit-filter: drop-shadow(0px 0px 5px #666);              //这行可以删除
    filter: drop-shadow(0px 0px 5px #666);
`;
class Card extends Component {
    render() {
        return (
            <CardDiv>
                <Square color={this.props.color}/>
                <Label color={this.props.color}/>
            </CardDiv>
        );
    }
}

export default Card;
