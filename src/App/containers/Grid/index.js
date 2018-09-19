import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './actions';
import selectors from './selectors';
import { SimpleTable } from '../../components';



class Grid extends Component {
    componentWillMount() {
        let {actions:{ getUsersDateResponce}} = this.props;
        getUsersDateResponce('test_data');
    }

    render() {
        return (
            <div>
                <SimpleTable/>
            </div>
        );
    }

}
const mapStateToProps = (state)=>{
    return  {userIsAuth:selectors.getUsersDate(state)}
}
const mapDispatchToProps = dispatch => { return {actions:bindActionCreators(actions,dispatch)}}

export default connect(mapStateToProps,mapDispatchToProps)( Grid);
