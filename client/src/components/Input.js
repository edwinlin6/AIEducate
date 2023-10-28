import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class Input extends Component {
    render() {
        return (

            <form onSubmit={this.handleSubmit} method="post" >
                                <input type="text" id='startDate' />
                                <br></br>
                                <input type="text" id='endDate' />
                                <br></br>
                                <input type='submit' value='submit' />
            </form>
            );   
    }
}

export default Input;