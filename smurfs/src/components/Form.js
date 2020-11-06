import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { onInputChange, onFormSubmit } from '../actions/index'; 

const StyledForm = styled.div`

& {
 
}

.form {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
}

h1 {
    font-size: 5rem; 
}

.form * {
    margin: 2%; 
}


`

const Form = ({firstName, age, height,  onInputChange, onFormSubmit}) => {
    return (
        <StyledForm>
            <form onSubmit={() => onFormSubmit(firstName, age, height)} className="form">
                <h1>Create Your Own Smurf!</h1>
                <label>
                    Name: 
                    <input onChange={onInputChange} value={firstName} type="text" name="firstName" /> 
                </label>

                <label>
                    Age: 
                    <input onChange={onInputChange} value={age} type="text" name="age" /> 
                </label>

                <label>
                    Height: 
                    <input onChange={onInputChange} value={height} type="text" name="height" /> 
                </label>

                <button type="submit">Submit Smurf!</button>
            </form>
        </StyledForm>
    )
}

const mapStateToProps = state => {


    return {
        firstName: state.firstName, 
        age: state.age, 
        height: state.height, 
    }
}

export default connect(mapStateToProps, { onInputChange, onFormSubmit })(Form)
