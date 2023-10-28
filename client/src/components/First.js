import React, { Component } from 'react';
import image from "../img/first.png"
class First extends Component {
    render() {
         return <img src={image} alt="Logo" width="100%"/>;
    }
}

export default First;