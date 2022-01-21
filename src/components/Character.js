// Write your Character component here
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import Details from './Details';

const StyledCharacter = styled.div`
    color: white;
    width: 60%;
    display: flex;
    justify-content: space-between;
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
    let {data} = props;

    return(
        <div>
            {data.map(starWars => {
                return (
                    <StyledCharacter>
                        <div>
                            <h3>Name: {starWars.name}</h3>
                        </div>

                    </StyledCharacter>
                )
            })}
        </div>
    )
}


export default Character;