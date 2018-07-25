import React from 'react';

class Content extends React.Component {
    render() {
        return (
            <div className="content-container">
                <div className="content-left"> 
                    <div className="content-left-first">
                        <span>USD</span>
                        <span>{10000 * 14410.45}</span>
                    </div>
                    <div className="content-left-second">
                        <p>USD - United State Dollars</p>
                    </div>
                    <div className="content-left-third">
                        <span>1 USD = IDR 14,410.45</span>
                    </div>
                </div>
                <div className="content-right"> 
                    <div className="content-del">
                        <span>(-)</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
