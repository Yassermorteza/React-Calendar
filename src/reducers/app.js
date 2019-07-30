import { 
    OPEN_MODAL,
    CLOSE_MODAL
} from '../actions/types';

const initialState = {
    isModalOpen: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL: 
            return {
                ...state,
                isModalOpen: true
            };
        case CLOSE_MODAL: 
            return {
                ...state,
                isModalOpen: false
            };
        default:
            return state;
    }
}