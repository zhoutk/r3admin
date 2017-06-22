/**
 * Created by zhoutk on 17-4-18.
 */

import React, { Component } from 'react';
import {ContentDivH2, ContentDivLi} from '../styled/Content';

class Stuff extends Component {
    render() {
        return (
            <div>
                <ContentDivH2>STUFF</ContentDivH2>
                <p>Mauris sem velit, vehicula eget sodales vitae,
                    rhoncus eget sapien:</p>
                <ol>
                    <ContentDivLi>Nulla pulvinar diam</ContentDivLi>
                    <ContentDivLi>Facilisis bibendum</ContentDivLi>
                    <ContentDivLi>Vestibulum vulputate</ContentDivLi>
                    <ContentDivLi>Eget erat</ContentDivLi>
                    <ContentDivLi>Id porttitor</ContentDivLi>
                </ol>
            </div>
        );
    }
}

export default Stuff;
