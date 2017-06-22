/**
 * Created by zhoutk on 17-5-18.
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {HeaderUl, HeaderLi, HeaderA} from '../styled/Header';
import {ContentDiv} from '../styled/Content';
import {queryTodo} from '../actions';

class App extends Component {
    // componentDidMount (){
    //     this.props.actions.queryTodo();
    // };
    render() {
        const activeStyle = {backgroundColor: "#0099FF"};
        return (
            <div>
                <h1>Simple SPA</h1>
                <HeaderUl className="header">
                    <HeaderLi><HeaderA exact to="/" activeStyle={activeStyle}>Home</HeaderA></HeaderLi>
                    <HeaderLi><HeaderA to="/stuff" activeStyle={activeStyle}>Stuff</HeaderA></HeaderLi>
                    <HeaderLi><HeaderA to="/contact" activeStyle={activeStyle}>Contact</HeaderA></HeaderLi>
                </HeaderUl>
                <ContentDiv>
                    {this.props.children}
                </ContentDiv>
            </div>
        );
    }
}

// const mapStateToProps = state => ({})
//
// const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators({queryTodo}, dispatch)
// })
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(App)
//
export default App