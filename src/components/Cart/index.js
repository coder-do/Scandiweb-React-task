import React, { Component } from 'react';
import './style.sass'

export default class Cart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1 className='cart-header'>Cart</h1>
                {this.props.children}
            </>
        )
    }
}