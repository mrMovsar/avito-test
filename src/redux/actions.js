export const loadImages = () => {
    return dispatch => {
        dispatch({
            type: 'images/load/start'
        });

        fetch("https://boiling-refuge-66454.herokuapp.com/images")
        .then(response => response.json())
        .then((json) => {
            dispatch ({
                type: 'images/load/success',
                payload: json
            })
        })
    }
}

export const bigImage = (id) => {
    return dispatch => {
        
        fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
        .then(response => response.json())
        .then((json) => {
            dispatch ({
                type: 'bigImages/load/success',
                payload: json
            })
        })
    }
}

export const closeModal = () => {
    return dispatch => {
        dispatch ({
            type: 'close/modal/success'
        })
    }
}


