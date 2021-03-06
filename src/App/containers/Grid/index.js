import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import * as actions from './actions';
import selectors from './selectors';
import {SimpleTable} from '../../components';

import './styles/style.css'

class Grid extends Component {
    constructor(props) {
        super(props);
        this.selectChangeHandler = this.selectChangeHandler.bind(this);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.headerClickHandler = this.headerClickHandler.bind(this);
        this.getPrevPage = this.getPrevPage.bind(this);
        this.getNextPage = this.getNextPage.bind(this);
        this.state = {
            sotred_key: null,
            filter_gender: false,
            search_string: null,
            current_page:1
        }
    }

    static propTypes = {
        users: PropTypes.array
    }

    static defaultProps = {
        users: []
    }

    componentWillMount() {
        let {actions: {
                getUsersDataRequest
            },users} = this.props;
            const { current_page }= this.state;
            if(users.length===0){
                getUsersDataRequest(current_page);
            }
    }

    selectChangeHandler(event) {
        this.setState({filter_gender: event.target.value})
    }

    inputChangeHandler(event) {
        let value = event.target.value.toLowerCase();
        this.setState({search_string: value})
    }

    headerClickHandler(event){
        let {actions: {
                sortUsers
            }} = this.props;
        const key = event.target.getAttribute('key-attr');
        sortUsers(key)
        this.setState({sorted_key:key})
    }
    getPrevPage(){
        let {current_page} = this.state
        let {actions: {
                getUsersDataRequest
            }} = this.props;
        current_page = current_page > 1 ? current_page - 1 : 1;
        getUsersDataRequest(current_page);
        this.setState({current_page})

    }
    getNextPage(){
        let {current_page} = this.state
        let {actions: {
                getUsersDataRequest
            }} = this.props;
        getUsersDataRequest(current_page++);
        this.setState({current_page})

    }

    render() {
        let {users} = this.props;
        const head_data = [
            {name:'Photo',key:'photo'},
            {name:'First name',key:'first_name'},
            {name:'Last name',key:'last_name'},
            {name:'Gender',key:'gender'},
        ]

        const {search_string, filter_gender,current_page} = this.state;

        if (search_string !== null) {
            users = users.filter(user => {
                return user.first_name.toLowerCase().includes(search_string) || user.last_name.toLowerCase().includes(search_string);
            })
        }

        if (filter_gender ) {
            users = users.filter(user => {
                return user.gender === filter_gender;
            })

        }
        return (<div>
            <div className="grid_constrolls">
                <TextField id="outlined-search" label="Search field" type="search" margin="normal" variant="outlined" className="grid_search" onChange={this.inputChangeHandler}/>
                <FormControl >
                    <InputLabel htmlFor="age-simple">Gender filter</InputLabel>
                    <Select value={this.state.filter_gender} onChange={this.selectChangeHandler} className="grid_filter" inputProps={{
                            name: 'gender',
                            id: 'gender-simple'
                        }}>
                        <MenuItem value={false}>
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'male'}>Male</MenuItem>
                        <MenuItem value={'female'}>Female</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                <Button onClick={this.getPrevPage} color="primary">
                    {'<'}
                </Button>
                <span className="grid_current__page">{current_page}</span>
                <Button onClick={this.getNextPage} color="primary">
                    {'>'}
                </Button>
            </div>
            <SimpleTable rows_data={users} head_data={head_data} headerClickHandler = {this.headerClickHandler}/>
        </div>);
    }
}

const mapStateToProps = (state) => {
    return { users: selectors.getUsersDate(state)}
}
const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default withStyles({})(connect(mapStateToProps, mapDispatchToProps)(Grid));
