import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import { connect } from 'react-redux';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ClothesPage from './pages/ClothesPage';
import TechPage from './pages/TechPage';
import Modal from './components/Modal';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.close = this.close.bind(this);
        this.show = this.show.bind(this);
    }

    show() {
        this.setState({ show: true })
    }

    close() {
        this.setState({ show: false })
    }

    render() {
        const { items } = this.props;
        return (
            <>
                <div className='container'>
                    <Header show={this.show} items={items} />
                    <div className='wrapper'>
                        <Modal onClose={this.close} show={this.state.show} />
                    </div>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="cart" element={<CartPage />} />
                        <Route path="clothes" element={<ClothesPage />} />
                        <Route path="tech" element={<TechPage />} />
                        <Route path="product-details/:id" element={<ProductDetailsPage />} />
                        <Route
                            path="*"
                            element={
                                <main style={{ padding: "1rem" }}>
                                    <p>There's nothing here!</p>
                                </main>
                            }
                        />
                    </Routes>
                </div >
            </>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        items: state.products.length
    }
}

export default connect(mapStateToProps)(App);