import React from 'react';

const Rainbow = (WrappedContent) => {
    const colours = ['red','pink','orange','blue','pink','yellow'];
    const randomColour = colours[Math.floor(Math.random()*5)];
    const className = randomColour + '-text';

    return (props) => {
        return (
            <div className={className}>
                <WrappedContent {...props} />
            </div>
        )     
    }
        
}

export default Rainbow;