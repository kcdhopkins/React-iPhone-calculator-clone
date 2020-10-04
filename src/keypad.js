import React from 'react';

const Keypad = props => {

    const container = {
        display:'flex',
        justifyContent: 'center'
    };
    
    const buttonStyle = {
        color: 'white',
        textAlign: 'center',
        background : 'grey',
        borderRadius: '50px',
        height: '75px',
        width: '75px',
        lineHeight: '75px' ,
        margin: '5px',
        fontSize: '25px'
    };
    
    const firstButtons = {
        ...buttonStyle,
        color : 'black',
        background: '#D3D3D3'
    };
    
    const lastButtonStyle = {
        ...buttonStyle,
        fontSize: '30px',
        background: 'orange'
    }

    const largeButtonStyle = {
        ...buttonStyle,
        width: '160px',

    }

    const left = {
        position: 'relative',
        right: '40px'
    }


    return(
        <div>
            <div style={container}>
                <div style={firstButtons} onClick = { ()=> props.dispatch({type: 'reset'})}><span>C</span></div>
                <div style={firstButtons} onClick = { ()=> props.dispatch({type: 'posOrNeg'})}><span>+/-</span></div>
                <div style={firstButtons}><span>%</span></div>
                <div style={lastButtonStyle} onClick={()=> props.dispatch({type:"expression", symbol: "/"})}><span>&#247;</span></div>
            </div>
            <div style={container}>
                <div style={buttonStyle} onClick={ ()=> props.dispatch({type:'setNumber', number: '7'})}><span>7</span></div>
                <div style={buttonStyle} onClick={ ()=> props.dispatch({type:'setNumber', number: '8'})}><span>8</span></div>
                <div style={buttonStyle} onClick={ ()=> props.dispatch({type:'setNumber', number: '9'})}><span>9</span></div>
                <div style={lastButtonStyle} onClick={ ()=> props.dispatch({type:"expression", symbol: "*"})}><span>&#215;</span></div>
            </div>
            <div style={container}>
                <div style={buttonStyle} onClick={ ()=> props.dispatch({type:'setNumber', number: '4'})}><span>4</span></div>
                <div style={buttonStyle} onClick={ ()=> props.dispatch({type:'setNumber', number: '5'})}><span>5</span></div>
                <div style={buttonStyle} onClick={ ()=> props.dispatch({type:'setNumber', number: '6'})}><span>6</span></div>
                <div style={lastButtonStyle} onClick={ ()=> props.dispatch({type:"expression", symbol: "-"})}><span>-</span></div>
            </div>
            <div style={container}>
                <div style={buttonStyle} onClick={ ()=> props.dispatch({type:'setNumber', number: '1'})}><span>1</span></div>
                <div style={buttonStyle} onClick={ ()=> props.dispatch({type:'setNumber', number: '2'})}><span>2</span></div>
                <div style={buttonStyle} onClick={ ()=> props.dispatch({type:'setNumber', number: '3'})}><span>3</span></div>
                <div style={lastButtonStyle} onClick={ ()=> props.dispatch({type:"expression", symbol: "+"})}><span>+</span></div>
            </div>
            <div style={container}>
                <div style={largeButtonStyle} onClick={ ()=> props.dispatch({type:'setNumber', number: '0'})}><span style={left}>0</span></div>
                <div style={buttonStyle} onClick={ ()=> props.dispatch({type:'setNumber', number: '.'})}><span>.</span></div>
                <div style={lastButtonStyle} onClick={ ()=> props.dispatch({type: "evaluate"})}><span>=</span></div>
            </div>
        </div>
    );
}

export default Keypad;