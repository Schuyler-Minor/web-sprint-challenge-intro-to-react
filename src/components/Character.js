// Write your Character component here
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';

const StyledCharacter = styled.div`
    color: white;
`

const Character = (props) => {
    return(
        <StyledCharacter>
            <h3>Details</h3>

        </StyledCharacter>

    )
}

export default Character;