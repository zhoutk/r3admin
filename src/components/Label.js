/**
 * Created by zhoutk on 17-4-18.
 */

import React, { Component } from 'react';
import styled from 'styled-components';

const P = styled.p`
        font-family: sans-serif;
        font-weight: bold;
        padding: 13px;
        margin: 0;
    `;

class Label extends Component {
    render() {
        return (
            <P>{this.props.color}</P>
        );
    }
}

export default Label;
