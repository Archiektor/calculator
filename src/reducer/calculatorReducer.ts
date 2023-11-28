enum Operations {
    Plus = '+',
    Minus = '-',
    Multiply = '*',
    Divide = '/'
}

export type CalcStateType = {
    screenInfo: number,
    additionalScreenInfo: number,
    lastOperation: string
}

type ActionObjType = {
    type: 'NUMBER-CLICK';
    payload: {
        isOperation: boolean;
        num: number;
    };
}


const makeCheckAndReturn = (stateObj: CalcStateType, actionObj: ActionObjType): CalcStateType => {
    return !stateObj.screenInfo ? {...stateObj, screenInfo: actionObj['payload']['num']} :
        {
            ...stateObj,
            screenInfo: Number(stateObj['screenInfo'].toString() + actionObj['payload']['num'])
        }
}

export const calculatorReducer = (state: CalcStateType, action: ActionsType): CalcStateType => {
    switch (action.type) {
        case 'NUMBER-CLICK':
            //todo refactor BLOCK SCOPE {}
            if (action.payload.isOperation) {
                state.screenInfo = 0;
                return makeCheckAndReturn(state, action);
            } else {
                return makeCheckAndReturn(state, action);
            }

        case 'RESET-CLICK':
            return {...state, screenInfo: action.payload.value, additionalScreenInfo: action['payload']['value']};
        case "ADD-NUMBER-ON-CLICK":
            state.lastOperation = Operations.Plus;
            return state.additionalScreenInfo === 0 ? {...state, additionalScreenInfo: action['payload']['num']} :
                {...state, additionalScreenInfo: state.additionalScreenInfo + action['payload']['num']}
        case "MINUS-NUMBER-ON-CLICK":
            state.lastOperation = Operations.Minus;
            return state.additionalScreenInfo === 0 ? {...state, additionalScreenInfo: action['payload']['num']} :
                {...state, additionalScreenInfo: state.additionalScreenInfo - action['payload']['num']}
        case "MULTIPLY-NUMBER-ON-CLICK":
            state.lastOperation = Operations.Multiply;
            return state.additionalScreenInfo === 0 ? {...state, additionalScreenInfo: action['payload']['num']} :
                {...state, additionalScreenInfo: state.additionalScreenInfo * action['payload']['num']}
        case "DIVIDE-NUMBER-ON-CLICK":
            state.lastOperation = Operations.Divide;
            return state.additionalScreenInfo === 0 ? {...state, additionalScreenInfo: action['payload']['num']} :
                {...state, additionalScreenInfo: state.additionalScreenInfo / action['payload']['num']}
        case "EQUAL-ON-CLICK": {
            if (state.lastOperation === '+') {
                state = {...state, screenInfo: state.screenInfo + state.additionalScreenInfo, additionalScreenInfo: 0}
            }
            if (state.lastOperation === '-') {
                state = {...state, screenInfo: state.screenInfo - state.additionalScreenInfo, additionalScreenInfo: 0}
            }
            if (state.lastOperation === '*') {
                state = {...state, screenInfo: state.screenInfo * state.additionalScreenInfo, additionalScreenInfo: 0}
            }
            if (state.lastOperation === '/') {
                state = {...state, screenInfo: state.screenInfo / state.additionalScreenInfo, additionalScreenInfo: 0}
            }
            return {...state}
        }
        default :
            return state;
    }
}

type ActionsType =
    onNumberClickType
    | onResetClickType
    | addNumberOnClickACType
    | equalNumberOnClickACType
    | minusNumberOnClickACType
    | multiplyNumberOnClickACType
    | divideNumberOnClickACType;

type onNumberClickType = ReturnType<typeof onNumberClickAC>
type onResetClickType = ReturnType<typeof onResetClickAC>
type addNumberOnClickACType = ReturnType<typeof plusNumberOnClickAC>
type equalNumberOnClickACType = ReturnType<typeof equalNumberOnClickAC>
type minusNumberOnClickACType = ReturnType<typeof minusNumberOnClickAC>
type multiplyNumberOnClickACType = ReturnType<typeof multiplyNumberOnClickAC>
type divideNumberOnClickACType = ReturnType<typeof divideNumberOnClickAC>

export const onNumberClickAC = (num: number, isOperation: boolean) => {
    return {
        type: 'NUMBER-CLICK',
        payload: {
            num,
            isOperation
        }
    } as const
}

export const onResetClickAC = () => {
    return {
        type: 'RESET-CLICK',
        payload: {
            value: 0,
        }
    } as const
}

export const plusNumberOnClickAC = (num: number) => {
    return {
        type: 'ADD-NUMBER-ON-CLICK',
        payload: {
            num,
        }
    } as const
}

export const minusNumberOnClickAC = (num: number) => {
    return {
        type: 'MINUS-NUMBER-ON-CLICK',
        payload: {
            num,
        }
    } as const
}

export const multiplyNumberOnClickAC = (num: number) => {
    return {
        type: 'MULTIPLY-NUMBER-ON-CLICK',
        payload: {
            num,
        }
    } as const
}

export const divideNumberOnClickAC = (num: number) => {
    return {
        type: 'DIVIDE-NUMBER-ON-CLICK',
        payload: {
            num,
        }
    } as const
}

export const equalNumberOnClickAC = () => {
    return {
        type: 'EQUAL-ON-CLICK',
        payload: {}
    } as const
}
