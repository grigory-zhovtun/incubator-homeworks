import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: any): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let sortedState: UserType[];
            if (action.payload === 'up') {
                sortedState = state.sort((a: UserType, b: UserType) => {
                    if (a.name > b.name) return 1;
                    if (a.name < b.name) return -1;
                    return 0;
                });
            } else {
                sortedState = state.sort((a: UserType, b: UserType) => {
                    if (a.name < b.name) return 1;
                    if (a.name > b.name) return -1;
                    return 0;
                });
            }
            return sortedState;
        }
        case 'check': {
            return state.filter((user) => user.age >= action.payload);
        }
        default:
            return state;
    }
}
