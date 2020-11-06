import axios from 'axios'; 
import  { initialState } from '../reducers/index'; 

console.log(initialState); 


export const fetchSmurfs = () => async dispatch => {

 

    const response = await axios.get('http://localhost:3333/smurfs'); 

    console.log(response.data)


    dispatch({type: "FETCH_SMURFS", payload: response.data})
     
}


export const onInputChange = (e) => {

    return {
        type: "FETCH_FIELDS", 
        payload: {
            name: e.target.name, 
            value: e.target.value, 
        }
    }
}

export const onFormSubmit = (name, age, height) => async dispatch =>{


    const response = await axios.post('http://localhost:3333/smurfs', {
        name: name, 
        age: age, 
        height: height,
    }); 
    


   return {
       type: "ON_SUBMIT",  
   }
}