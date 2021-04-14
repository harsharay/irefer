import styled from "styled-components"

const darkBlueShade = '#0D3140';
const blueShade = '#0F497A';
const whiteShade = '#EDF2F7';
const trueWhite = '#FFFFFF';


const darkShadow = "6px 3px 10px #0d3e68, -4px -2px 8px #11548c";
const lightShadow = "4px 3px 10px #D9D9D9, -2px -2px 8px #ffffff";


export const StyledButton = styled.button`
    width: 120px;
    height: 37px;
    
    font-size: 16px;
    font-weight: 700;

    border-radius: 5px;
    border: none;
    outline: none;

    padding: 5px 10px;

    background-color: ${(props) => props.dark ? blueShade : whiteShade};
    color: ${props => props.dark ? whiteShade : blueShade};

    font-family: 'Raleway', sans-serif;

    cursor: pointer;
`

export const NeuButton = styled.button`
    width: 120px;
    height: 37px;

    font-size: 16px;
    font-weight: 700;

    border-radius: 5px;
    border: none;
    outline: none;

    background-color: ${(props) => props.dark ? blueShade : whiteShade};
    color: ${props => props.dark ? whiteShade : blueShade};

    box-shadow: ${(props) => props.dark ? darkShadow : lightShadow};

    font-family: 'Raleway', sans-serif;

    cursor: pointer;
`

export const StyledInput = styled.input`
    width: 277px;
    height: 47px;

    border-radius: 3px;
    border: 2px solid #0F497A;
    outline: 0;

    color: ${darkBlueShade};

    font-size: 18px;
    font-family: 'Raleway', sans-serif;
    
    padding: 0 10px;
`