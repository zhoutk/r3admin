import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import InputAndButton from '../components/InputAndButton';
import LiList from '../components/LiList';
import * as TodoActions from '../actions';

class App extends Component {
    // static propTypes = {
    //     todos: PropTypes.array.isRequired,
    //     actions: PropTypes.object.isRequired
    // };
    componentDidMount (){
        this.InputComponent.focus();
    };
    render() {
        var {todos,actions} = this.props;
        return (
            <div>
                <InputAndButton ref={comp => { this.InputComponent = comp; }} onSave={actions.addTodo}/>
                <LiList items={todos} onDel={actions.delTodo}/>
            </div>
        );
    };
}

App.propTypes = {
    todos: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    todos: state.get('todos').get('items')
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
