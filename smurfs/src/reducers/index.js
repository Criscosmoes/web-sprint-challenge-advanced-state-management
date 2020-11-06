export const initialState = {
    smurfs: [], 
    firstName: '', 
    age: '', 
    height: '',
}

export default (state = initialState, action) => {


    switch(action.type) {
        case "FETCH_SMURFS": 

            return {
                ...state, 
                smurfs: action.payload, 
            }
        case "FETCH_FIELDS": 

            return {
                ...state, 
                [action.payload.name]: action.payload.value, 
            }
        case "ON_SUMBIT": 


            return {
                ...state, 
                firstName: '', 
                age: '', 
                height: ''
            }
        default: 
            return state; 
    }
}