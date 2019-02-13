
import { Action } from '@ngrx/store';
import { ActionTypes } from './todo.actions';

const initialState = {
    count: 10
};

export const todoReducer = (state = initialState, action: Action) => {
    switch(action.type) {
        case ActionTypes.GetCount:
            return {
                ...state,
                count: 20
            };
        default:
            return state;
    }
};

