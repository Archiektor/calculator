export type CalcStateType = {
    screenInfo: number,
    additionalScreenInfo: number,
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

// TODO Why it doesn't work ???
// const makeCheckAndReturn2 = (stateObj: CalcStateType, actionObj: ActionsType): CalcStateType => {
//     return !stateObj.screenInfo ? {...stateObj, screenInfo: actionObj['payload']['num']} :
//         {
//             ...stateObj,
//             screenInfo: Number(stateObj['screenInfo'].toString() + actionObj['payload']['num'])
//         }
// }

export const calculatorReducer = (state: CalcStateType, action: ActionsType): CalcStateType => {
    switch (action.type) {
        case 'NUMBER-CLICK':
            //debugger;
            if (action.payload.isOperation) {
                state.screenInfo = 0;
                return makeCheckAndReturn(state, action);
                // !state.screenInfo ? {...state, screenInfo: action['payload']['num']} :
                //     {
                //         ...state,
                //         screenInfo: Number(state['screenInfo'].toString() + action['payload']['num'])
                //     }
            } else {
                return makeCheckAndReturn(state, action);
                // !state.screenInfo ? {...state, screenInfo: action['payload']['num']} :
                //     {
                //         ...state,
                //         screenInfo: Number(state['screenInfo'].toString() + action['payload']['num'])
                //     }
            }

        case 'RESET-CLICK':
            return {...state, screenInfo: action['payload']['value'], additionalScreenInfo: action['payload']['value']};
        case "ADD-NUMBER-ON-CLICK":
            return {...state, additionalScreenInfo: action['payload']['num']};
        case "EQUAL-ON-CLICK":
            return {...state, screenInfo: state.screenInfo + state.additionalScreenInfo};
        default :
            return state;
    }
}

type ActionsType = onNumberClickType | onResetClickType | addNumberOnClickACType | equalNumberOnClickACType;

type onNumberClickType = ReturnType<typeof onNumberClickAC>
type onResetClickType = ReturnType<typeof onResetClickAC>
type addNumberOnClickACType = ReturnType<typeof plusNumberOnClickAC>
type equalNumberOnClickACType = ReturnType<typeof equalNumberOnClickAC>

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

export const equalNumberOnClickAC = () => {
    return {
        type: 'EQUAL-ON-CLICK',
    } as const
}
