import React from 'react';

const Screen = props => {
    
    const screenStyle = {
        display: 'flex',
        justifyContent: 'flex-end',
        color: 'white',
        fontSize: '90px',
        marginRight: '5px'
    };

    return(
        <div style={screenStyle}>
            {props.screenValue}
        </div>
    );
}

export default Screen;