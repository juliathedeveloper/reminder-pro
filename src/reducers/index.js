/*
Reducer to handle the action creator in actions
*/

import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS} from '../constants';
import { bake_cookie, read_cookie } from 'sfcookies';

// Return an object as a reminder
const reminder = (action) => {
    let { text, dueDate } = action;
    return {
        id: Math.random(),
        text,
        dueDate
    }
}

const removeById = (state =[ ], id) => {
    const reminders = state.filter(reminder => reminder.id !== id);
    //console.log('new reduced reminders', reminders);
    return reminders;
}

// The Reducer simply takes a state and an action and return a new state.
const reminders = (state = [], action) => {
    let reminders = null;
    state = read_cookie('reminders');

    switch (action.type){
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            bake_cookie ('reminders', reminders);
            return reminders;
        case DELETE_REMINDER:
            reminders = removeById(state, action.id);
            bake_cookie ('reminders', reminders);
            return reminders;
        case CLEAR_REMINDERS:
            reminders = [];
            bake_cookie ('reminders', reminders);
            return reminders;
        default:
            return state;
    }
}

export default reminders;