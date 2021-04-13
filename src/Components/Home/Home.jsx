import React from "react"
import Nav from "../Nav/Nav"
import { StyledButton } from "../../StyledComponents/styledComponents"

import "./Home.css"

const Home = (props) => {

    return (
        <div>
            <div>
                <p>Home page</p>
                <StyledButton dark={true}>Sign up</StyledButton>
            </div>
        </div>
    )
}

export default Home;