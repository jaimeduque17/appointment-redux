const initialState = {
    appointments: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'ADD_APPOINTMENT':
            return {
                ...state,
                appointments: [...state.appointments, action.payload]
            }
        default:
            return state;
    }
}