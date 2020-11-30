import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Cluster from "../every-layout/Cluster/Cluster";
import Sidebar from "../every-layout/Sidebar/Sidebar";

class Header extends Component {

    render() {
        let rowWidth = this.props.content.width;
        return (
            <header id="header" className="grid-row fixed">
                <grid-l min="calc(var(--measure)*3)">
                    <sidebar-l space="var(--s2)" side="left" sideWidth="10ch">
                        <div>
                            <img className="logo" src={this.props.content.img} alt="Text"/>
                            <cluster-l justify="space-around" align="center">
                                <ul>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Shop</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Accessibility</a></li>
                                </ul>
                            </cluster-l>
                        </div>
                    </sidebar-l>
                </grid-l>
            </header>
        );
    }
}

Header.propTypes = {};

export default Header;
