export type CalcStateType = {
    screenInfo: number
}

export const calculatorReducer = (state: CalcStateType, action: ActionsType): CalcStateType => {
    switch (action.type) {
        case 'NUMBER-CLICK':
            return !state.screenInfo ? {...state, screenInfo: action['payload']['value']} :
                {
                    ...state,
                    screenInfo: Number(state['screenInfo'].toString() + action['payload']['value'])
                }
        case 'RESET-CLICK':
            return {...state, screenInfo: action['payload']['value']};
        default :
            return state;
    }
}

type ActionsType = onNumberClickType | onResetClickType;

type onNumberClickType = ReturnType<typeof onNumberClickAC>
type onResetClickType = ReturnType<typeof onResetClickAC>

export const onNumberClickAC = (num: number) => {
    return {
        type: 'NUMBER-CLICK',
        payload: {
            value: num,
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
