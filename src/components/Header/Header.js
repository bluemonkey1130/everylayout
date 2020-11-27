import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

class Header extends Component {

    render() {
        let rowWidth =  this.props.content.width;
        return (
            <header id="header" className="grid-row fixed">
                <div className={["grid-layout", rowWidth, "has-one-column"].join(' ')}>
                    <div className="cluster">
                        <img className="logo" src={this.props.content.img} alt="Text"/>
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
