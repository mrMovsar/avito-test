const initialState = {
    images: []
}

export default (state = initialState, action) => {
    switch (action.type) {

        case 'images/load/success':
            return {
                ...state,
                images: action.payload
            }
            

        default:
            return state;
    }
}