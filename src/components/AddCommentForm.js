import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './addCommentForm.css'

class AddCommentForm extends Component {
    static propTypes = {
        rows: PropTypes.string.isRequired,
        cols: PropTypes.string.isRequired,
    };

    state = {
        username: '',
        commnetText: '',
        usernameError: false,
        commnetTextError: false
    }

    render() {
        return (
            <div>
                Name: <input className = {this.state.usernameError ? 'error' : ''} type = 'text' value = {this.state.username} onChange = {this.handleUserChange} />
                Comment: <textarea className = {this.state.commnetTextError ? 'error' : ''} name='commenttext' value = {this.state.commnetText} onChange = {this.handleCommentChange} rows={this.props.rows} cols={this.props.cols}></textarea>
            </div>
        )
    }

    handleUserChange = (ev) => {
        this.setState({
            username: ev.target.value,
            usernameError: isNotValid(ev.target.value)
        })

        function isNotValid(value){
            return value.length < 5 || value.length > 15;
        }
    }

    handleCommentChange = (ev) => {
        this.setState({
            commnetText: ev.target.value,
            commnetTextError: isNotValid(ev.target.value)
        })

        function isNotValid(value){
            return value.length < 20 || value.length > 50;
        }
    }

}

export default AddCommentForm