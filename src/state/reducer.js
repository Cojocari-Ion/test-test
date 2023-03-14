
const initialState =  {
    date: null
}

const dateReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_DATE":
            return {... state, date: action.payload}
        case "CLEAR_DATE":
            return {... state, date: null}
        default:
            return state
    }
}

export default dateReducer