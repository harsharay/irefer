import styled from "styled-components"

const bludShade = '#0F497A';
const whiteShade = '#EDF2F7';
const trueWhite = '#FFFFFF';

const neuShadow = "6px 3px 10px #0d3e68, -4px -2px 8px #11548c"


export const StyledButton = styled.button`
    width: 120px;
    height: 37px;
    
    font-size: 16px;
    font-weight: 700;

    border-radius: 5px;
    border: none;
    outline: none;

    box-shadow: ${props => props.neuButton ? neuShadow : "" };

    padding: 5px 10px;

    background-color: ${(props) => props.neuButton ? bludShade : whiteShade};
    color: ${props => props.neuButton ? whiteShade : bludShade};

    font-family: 'Raleway', sans-serif;

    cursor: pointer;

`

// export const NeuButton = styled.button`
//     box-shadow:  6px 3px 10px #0d3e68,
//     -4px -2px 8px #11548c !important;
// `

export const StyledInput = styled.input`
    width: 277px;
    height: 47px;

    border-radius: 3px;
    border: 0;
    outline: 0;

    font-size: 18px;
    font-family: 'Raleway', sans-serif;
    
    padding: 0 10px;
`