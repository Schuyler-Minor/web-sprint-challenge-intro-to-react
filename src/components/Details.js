import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const StyledDetails = styled.div`
    color: black;
    text-align: center;
`


export default function Details (props) {
    const { characterId, close } = props
    const [details, setDetails] = useState(null)
    
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people`)
        .then(res => {
          console.log(res.data)
          setDetails(res.data)
          
        })
        .catch(err => console.error(err))
      }, [characterId])


    return (
        <StyledDetails>
            <h3>Details</h3>
            
          
            <button onClick={close}>Close</button>
        </StyledDetails>
    )
}

