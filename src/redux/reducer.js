const initialState = {
    images: [],
    bimages: {}
}

export default (state = initialState, action) => {
    switch (action.type) {

        case 'images/load/success':
            return {
                ...state,
                images: action.payload
            }

        case 'bimages/load/success':
            return {
                ...state,
                bimages: action.payload
            }    
            
        

        default:
            return state;
    }
}