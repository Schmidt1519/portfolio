// import { Link } from "@chakra-ui/react"
// import { Link as ReachLink } from "@reach/router"

// function navBar() {

//     return(
//         <Link as={ReachLink} to="/projects">Projects</Link>
//     );
// }

import React from 'react';
import { Link } from 'react-router-dom';

function navBar() {

    return(
        <nav>
            <ul>
            <Link to='/skills'>
                    <li>Technologies</li>
                </Link>
                <Link to='/projects'>
                    <li>Projects</li>
                </Link>
            </ul>
        </nav>
    )
}

export default navBar;