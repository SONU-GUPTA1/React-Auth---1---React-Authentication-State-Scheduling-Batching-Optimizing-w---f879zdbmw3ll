// import React from 'react';

// export const Home = () =>{

//     return(
//         <div id="home-page">
//             Home page
//         </div>
//     )
// }

import React from 'react';
import { useAuth } from '../components/loginAuth';

export const Home = () =>{
    const auth = useAuth();
    return(
        <div id="home-page">
            <button id='logout-btn' onClick={() => auth.logout()}>Logout</button>
        </div>
    )
}
