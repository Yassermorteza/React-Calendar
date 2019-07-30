import { 
    OPEN_MODAL,
    CLOSE_MODAL,
    GET_REMINDERS,
    GET_REMINDERS_HAS_ERROR,
} from './types';

export const openModal = day => ({
    type: OPEN_MODAL,
    day
});

export const closeModal = () => ({
    type: CLOSE_MODAL
});

export const fetchReminders = url => {
    return dispatch => {
        fetch(url)
            .then(res => res.json()) 
            .then(reminders => dispatch(getReminders(reminders)))
            .catch(err => dispatch(showError(err)))
    }
}

export const getReminders = reminders => ({
    type: GET_REMINDERS,
    reminders
});

export const showError = err => ({
    type: GET_REMINDERS_HAS_ERROR
})