// Write your Character component here
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

import Details from './Details';

const StyledCharacter = styled.div`
    color: white;
    width: 500px;
    background-color : midnightblue;
    opacity: 85%;
    border-radius : 20%;
    
   

`
const Button = styled.button`
     &:hover {
        background-color: gray;
        transition: 0.5s ease-in-out;
    }
    transition: 0.5s ease-in-out;
    button {
        color: purple;
    }
`

const Character = props => {
    let {data , open} = props;

    return(
        <div>
            {data.map(starWars => {
                return (
                    <StyledCharacter>
                        <div>
                            <h3>{starWars.name}</h3>
                            <Button onClick={open}>Open</Button>
                                
                            
                        </div>

                    </StyledCharacter>
                )
            })}
        </div>
    )
}


export default Character;