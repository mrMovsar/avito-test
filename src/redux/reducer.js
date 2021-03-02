const initialState = {
    images: [],
    bigImages: [],
    isOpen: false,
    comment: []
}

export default (state = initialState, action) => {
    switch (action.type) {

        case 'images/load/success':
            return {
                ...state,
                images: action.payload
            }

        case 'bigImages/load/success':
            return {
                ...state,
                bigImages: action.payload,
                comment: action.payload.comments,
                isOpen: true
            }    
            
        case 'close/modal/success':
            return {
                ...state,
                isOpen: false
            }        
            
        

        default:
            return state;
    }
}