import React from 'react'
// import is like a C# using statement. - we can import single files or just single objects from a file that are available becuase they are their files

//CSS import
import './App.css'

//Components import
import Header from './components/Header'
import AboutReact from './components/AboutReact/AboutReact'
//Components are just JavaScript objects that return a portion of the UI
export default function App(){
//The export keyword above makes the App component available to be imported into any other file in this project. This of this like the access modifiers in C#

//above the return is the logic portion of a component. Blow the return is the UI that will display as part of that component.
  return (
    <div className = "site-container">
      <h1> hello from the app</h1>
      <Header/>
      <AboutReact/>
      </div>
  )
}

// eslint-disable-next-line no-lone-blocks
{/* import logo from './logo.svg';
import './App.css';

function App() 
   return (
     <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p>
           Edit <code>src/App.js</code> and save to reload.
         </p>
         <a */}
// eslint-disable-next-line no-lone-blocks
{/* //           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
// eslint-disable-next-line no-lone-blocks
{/* //       </header> */}
// eslint-disable-next-line no-lone-blocks
{/* //     </div>
//   );
// }

// export default App; */}
