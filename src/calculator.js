import React from 'react';
import Screen from './screen';
import Keypad from './keypad';
import { useDispatch, useSelector } from 'react-redux';

const Calculator = () =>{

    const dispatch = useDispatch();
    const screenValue = useSelector(state => state.screenValue);

    const calStyle = {
        width: '350px',
        height: '600px',
        backgroundColor: 'black',
        marginTop: '70px'
    }
    
    return(
        <div style={calStyle}>
            <Screen screenValue={screenValue}/>
            <Keypad dispatch={dispatch}/>
        </div>
    );
}

export default Calculator;