import React from 'react';

function NavigationDots( {active} ) {
    return (
        <div className="app__navigation">
            {['home', 'about', 'work', 'contact'].map((item, index) => (
                <a
                    href={`#${item}`}
                    key={item + index}
                    className="app__navigation-dot"
                    style={active === item
                        ? {backgroundColor: '#000'}
                        : {backgroundColor: '#cecece'}}
                />
            ))}
        </div>
    );
}

export default NavigationDots;
