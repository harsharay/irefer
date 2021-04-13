import React,{ useState } from "react";
import {StyledButton} from "../../StyledComponents/styledComponents";
import { useHistory } from "react-router-dom";


import "./Nav.css";

const Nav = () => {

    const history = useHistory()
    // const [isLoggedIn, setIsLoggedIn] = useState(false)

    
    const handleSignupClick = () => {
        console.log("Signup redirect")
        history.push("/signup")
    }

    return (
        <div className="nav-root">
            <div className="nav-content">
                <div className="nav-logo">
                    <p>iRefer</p>
                </div>

                <div className="nav-menu">
                    <StyledButton dark={false} onClick={handleSignupClick}>Sign up</StyledButton>
                </div>
            </div>
        </div>
    )
}

export default Nav;