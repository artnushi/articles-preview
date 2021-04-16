import React from 'react';

function SocialIcons(props) {
    return (
        <>
            <span className={"mr-3"}>Share:</span>
            <ul className={"social-icons"}>
                <li>
                    <a href="#">
                        <img src={"/assets/images/icons/facebook.svg"} alt="facebook image"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={"/assets/images/icons/linkedin.svg"} alt="linkedin image"/>
                    </a>
                </li>
            </ul>
        </>
    );
}

export default SocialIcons;