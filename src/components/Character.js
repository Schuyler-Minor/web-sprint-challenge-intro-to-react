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

export default function Character ({info, action}) {

 

    return(
        <StyledCharacter>
            {info.name}
            <button onClick={() => action(info.id)}>
                See details
            </button>

        </StyledCharacter>

    )
};

