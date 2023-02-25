export type ThemeStateType = {
    themeId: number
}

export type ThemeActionType = ReturnType<typeof changeThemeId>

const initState: ThemeStateType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ThemeActionType): ThemeStateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): {type:'SET_THEME_ID', id: number} => ({ type: 'SET_THEME_ID', id } as const) // fix any
