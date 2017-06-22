/**
 * Created by zhoutk on 17-4-18.
 */

import React, { Component } from 'react';
import {TodoButton, TodoInput} from '../styled/Todo';

class InputAndButton extends Component {
    focus = () => {
        this.el.focus();
    };
    addItem = e => {
        if(e.which === 13 || e.type === 'click'){
            if(e.target.value.trim().length > 0 || this.el.value.trim().length > 0) {
                this.props.onSave({text: e.target.value.trim() || this.el.value.trim()});
                e.target.value = '';
                this.el.value = '';
            }
            this.focus();
        }
    };
    render = () => {
        return (
            <div>
                <TodoInput innerRef={el=> { this.el = el; }}
                           onKeyUp={this.addItem}
                           placeholder="enter name" >
                </TodoInput>
                <TodoButton onClick={this.addItem} type="submit">add</TodoButton>
            </div>
        );
    }
}

export default InputAndButton;
