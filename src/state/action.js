export const setDate = (date) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_DATA',
            payload: date
        })
    }
}

export const clearDate = () => {
    return (dispatch) => {
        dispatch({
            type: 'CLEAR_DATA',
            payload: null
        })
    }
}