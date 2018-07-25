import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="header-container">
                <div className="header-tittle">
                	<p>USD - United State Dollars</p>
                </div>
                <div className="header-content">
                	<span>USD</span>
                	<span>100.000</span>
                </div>
            </div>
        );
    }
}

export default Header;
