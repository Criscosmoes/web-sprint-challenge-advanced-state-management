import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components'; 
import { fetchSmurfs } from './../actions/index';

const StyledSmurfsList = styled.div`

& {
    display: flex; 
    justify-content: space-around; 
    align-items: center; 
    flex-wrap: wrap; 
}


.smurfs {
    border: 1px solid black; 
}

`

const SmurfsList = ({ smurfs, fetchSmurfs }) => {


    useEffect(() => {

        fetchSmurfs(); 

    }, [])

    const renderedList = smurfs.map(cur => {
        return (
            <div key={cur.id} className="smurfs">
                <h1>{cur.name}</h1>
                <h2>Age: {cur.age}</h2>
                <h2>Height: {cur.height}</h2>
            </div>
        )
    })

    return (
        <StyledSmurfsList>
            {renderedList}
        </StyledSmurfsList>
    )
}

const mapStateToProps = state => {

    return {
        smurfs: state.smurfs, 
    }
}

export default connect(mapStateToProps, { fetchSmurfs })(SmurfsList)
