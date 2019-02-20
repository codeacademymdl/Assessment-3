import React, { Component } from 'react';
import './Header.css';

class Header extends Component {


  
    render() {
        
        return (
            <div className="header">
                <div className="sideDesign" />
                <div className="headerLogo">

                    <div className="mainLogo" >
                        <div className="logo" >
                            <span className="logoAbv" onClick={this.props.click}>BS</span>
                        </div>
                    </div>
                    <span className="logoName"> The Book Shelf</span>

                </div>
                <div className="sideDesign"></div>

            </div>

        );
    }
}

export default Header;
