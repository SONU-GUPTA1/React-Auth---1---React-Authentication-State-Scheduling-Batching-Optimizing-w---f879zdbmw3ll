// import React from 'react'
// import { AppRoutes } from '../Routes';
// import '../styles/App.css';
// const App = () => {

//   return (
//     <div id="main">
//       <AppRoutes />
//     </div>
//   )
// }


// export default App;


import React from 'react'
import { AppRoutes } from '../Routes';
import '../styles/App.css';
import { AuthProvider } from './loginAuth';
const App = () => {

  return (
    <div id="main">
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </div>
  )
}


export default App;
