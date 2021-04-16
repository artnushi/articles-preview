import React from 'react';

function SocialIcons() {
    return (
        <>
            <span className={"mr-3"}>Share:</span>
            <ul className={"social-icons"}>
                <li>
                    <a target="_blank" href="https://www.facebook.com/cloverlabsio">
                        <img src={"/assets/images/icons/facebook.svg"} alt="facebook image"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://www.linkedin.com/company/clover-labs/">
                        <img src={"/assets/images/icons/linkedin.svg"} alt="linkedin image"/>
                    </a>
                </li>
            </ul>
        </>
    );
}

export default SocialIcons;