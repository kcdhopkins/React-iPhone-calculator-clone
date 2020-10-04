
const reducer = (state, action) =>{
    if(!state){
        return{
            screenValue : 0,
            num1: [],
            num2: [],
            symbol: "",
            total:0,
            floatingNumber: 0,
            toggleNumbers: 'num1'
        }
    }

    switch(action.type){
        case 'reset':
            return{
                screenValue : 0,
                num1: [],
                num2: [],
                symbol: "",
                total:0,
                floatingNumber: 0,
                toggleNumbers: 'num1'
            }
        case 'setNumber':
            if(state.toggleNumbers === 'num1'){
                return{
                    ...state,
                    num1: [...state.num1, action.number],
                    screenValue: [...state.num1, action.number].join("")
                }
            } else {
                return{
                    ...state,
                    num2: [...state.num2, action.number],
                    screenValue: [...state.num2, action.number].join("")
                }
            }
        case 'expression' :
            if(state.toggleNumbers === 'num1'){
                return{
                    ...state,
                    toggleNumbers: 'num2',
                    symbol: action.symbol
                }
            } else {
                if(state.num2.length === 0){
                    return{
                        ...state,
                        symbol: action.symbol
                    }
                } else {
                    const newScreenValue = eval(`${state.num1.join("")}${state.symbol}${state.num2.join("")}`);
                    return {
                        ...state,
                        screenValue : newScreenValue,
                        num1: [newScreenValue],
                        num2: [],
                        symbol: action.symbol,
                        toggleNumbers: "num2"
                    }
                }
            }
        case 'evaluate':
            if(state.num1.length && state.num2.length){
                const newScreenValue = eval(`${state.num1.join("")}${state.symbol}${state.num2.join("")}`);
                return {
                    ...state,
                    screenValue: newScreenValue,
                    num1: [],
                    num2:[],
                    toggleNumbers: 'num1',
                    floatingNumber: `${state.num2.join("")}`,
                    total: newScreenValue
                }
            } else if( state.num1.length && !state.num2.length && state.symbol ){
                const newScreenValue = eval(`${state.num1.join("")}${state.symbol}${state.num1.join("")}`);
                return{
                    ...state,
                    screenValue: newScreenValue,
                    num1:[newScreenValue]
                }
            } else if (state.total){
                const newScreenValue = eval(`${state.total}${state.symbol}${state.floatingNumber}`);
                return{
                    ...state,
                    screenValue: newScreenValue,
                    total: newScreenValue 
                }
            } else {
                return{
                    screenValue : 0,
                    num1: [],
                    num2: [],
                    symbol: "",
                    total:0,
                    floatingNumber: 0,
                    toggleNumbers: 'num1'
                }
            }
        case 'posOrNeg' :
            
            const newState = Object.assign({}, state);

            if(!state.num1.length && !state.num2.length && state.screenValue){
                if(state.screenValue[0] === "-"){
                    return {
                        ...state,
                        num1: [...newState.num1.shift()],
                        screenValue: newState.num1.shift().join(""),
                        ttoggleNumbers: 'num2'
                    }
                } else {
                    return {
                        ...state,
                        num1: ["-", state.screenValue],
                        screenValue: ["-", state.screenValue].join(""),
                        toggleNumbers: 'num2'
                    }
                }
            } else if(state.toggleNumbers === 'num2' && !state.num2.length){
                if(state.num1[0] === "-"){
                    newState.num1.shift();
                    return{
                        ...state,
                        num1: [...newState.num1],
                        screenValue: newState.num1.join("")
                    }
                } else {
                    return {
                        ...state,
                        num1: ["-", ...state.num1],
                        screenValue: `-${newState.num1.join("")}`
                    }
                }
                
            } else if(state.toggleNumbers === 'num1'){
                
                if(newState.num1[0] === "-"){
                    newState.num1.shift();
                      
                    return{
                        ...state,
                        num1:[...newState.num1],
                        screenValue: newState.num1.join("")
                    }
                } else {
                    return {
                        ...state,
                        num1:[ "-", ...state.num1],
                        screenValue: `-${newState.num1.join("")}`
                    }
                }
            } else {
                
                if(newState.num2[0] === "-"){
                    newState.num2.shift();
                      
                    return{
                        ...state,
                        num2:[...newState.num1],
                        screenValue: newState.num2.join("")
                    }
                } else {
                    return {
                        ...state,
                        num2:[ "-", ...state.num2],
                        screenValue: `-${newState.num2.join("")}`
                    }
                }
            }
        case 'percentage':
            console.log("@TODO percentage value");
            break;
        default : 
            return {
                ...state
            }
    }
}

export default reducer;