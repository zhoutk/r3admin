/**
 * Created by zhoutk on 17-4-18.
 */

import React, { Component } from 'react';
import {TodoLi, TodoClose} from '../styled/Todo';

class Li extends Component {
    delete = () => {
        this.props.onDel({id:this.props.id,text:this.props.text})
    };
    render =() => {
        return (
            <div>
                <TodoLi>{this.props.text}  <TodoClose onClick={this.delete} type="submit">delete</TodoClose></TodoLi>
            </div>
        );
    }
};

export default Li;
