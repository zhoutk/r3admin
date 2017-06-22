/**
 * Created by zhoutk on 17-4-18.
 */

import React, { Component } from 'react';
import {ContentDivH2} from '../styled/Content';

class Contact extends Component {
    render() {
        return (
            <div>
                <ContentDivH2>GOT QUESTIONS?</ContentDivH2>
                <p>The easiest thing to do is post on
                    our <a href="#/stuff">forums</a>.
                </p>
            </div>
        );
    }
}

export default Contact;
