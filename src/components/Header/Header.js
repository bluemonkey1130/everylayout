import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <header id="header" className="grid-row">
                <div className="grid-layout standard has-one-column">
                    <div className="cluster">
                        <img className="logo" src={this.props.img} alt="Text"/>
                        <nav className="cluster">
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Shop</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Accessibility</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

Header.propTypes = {};

export default Header;
