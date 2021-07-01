import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className="header__nav">
                <a className="home-nav" href="/">home</a>
                <div>
                    <a href="/">rooms</a>
                    <a href="/">login</a>
                </div>

            </div>
        </div>
    )
}

export default Header;