
import { Action } from '@ngrx/store';

export enum ActionTypes {
    GetCount = 'todo/get_count'
}

export class GetCount implements Action {
    readonly type = ActionTypes.GetCount;
}
