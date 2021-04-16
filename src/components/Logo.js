import React from 'react';
import {NavLink} from "react-router-dom";

function Logo() {

    return (
        <>
            <div className="d-flex justify-content-center my-5">
                <NavLink to={'/'}>
                    <img src={"/assets/images/clover-labs-logo.svg"} alt="Clover labs logo"/>
                </NavLink>
            </div>
        </>
    );

}

export default Logo;