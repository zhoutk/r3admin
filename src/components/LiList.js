/**
 * Created by zhoutk on 17-4-18.
 */

import React from 'react';
import {TodoUl} from '../styled/Todo';
import Li from './Li';

const LiList = (props)=>{
    return (
        <TodoUl>
            {props.items.map((item)=>{
                return <Li {...item} onDel={props.onDel}></Li>;
            })}
        </TodoUl>
    );
};

export default LiList;
