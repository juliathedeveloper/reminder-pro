/**********************************************************
   Setup action creators which return action objects for 
   add, delete, and clear reminders actions.
**********************************************************/

import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';

export const addReminder = (text, dueDate) => {
    const action = {
        type: ADD_REMINDER,
        text,
        dueDate
    }

    console.log('adding reminder in action', action);
    return action;
}

export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id
    }

    console.log('deleting reminder in action', action);
    return action;
}

export const clearReminders = () => {
    return {
        type:CLEAR_REMINDERS
    }
}

