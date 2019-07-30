import { 
    OPEN_MODAL,
    CLOSE_MODAL,
    GET_REMINDERS,
    GET_REMINDERS_HAS_ERROR,
} from '../actions/types';

const initialState = {
    isModalOpen: false,
    selectedDay: undefined,
    reminders: [],
    getReminderHasError: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL: 
            return {
                ...state,
                isModalOpen: true,
                selectedDay: action.day
            };
        case CLOSE_MODAL: 
            return {
                ...state,
                isModalOpen: false
            };
        case GET_REMINDERS:
            return {
                ...state,
                reminders: action.reminders,
                getReminderHasError: false,
            };
        case GET_REMINDERS_HAS_ERROR:
            return {
                getReminderHasError: true
            }
        default:
            return state;
    }
}