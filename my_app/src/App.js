
//Restaurent simple website
/*
import React from 'react'
import Cards from './components/basics/Cards';
// import Nav from './components/basics/Nav'
import './components/basics/style.css'
// import Footer from './components/basics/Footer'
import Menu from './components/basics/Menu';

//ONLY IF-ELSE SELECT ONLY PIZZA PART
const favFood = "pizza";

// const Favs = () => {
//   if(favFood=="pizza"){
//     return (
//       <Cards
//         image={Menu[1].image}
//         title={Menu[1].name}
//         text={Menu[1].description}
//         btn="order now"
//       />
//     )
//   }else{

//   }
// }

//FOR GETTING ALL CARDS 

function ncard(val){
  return(
    <Cards
        image={val.image}
        title={val.name}
        text={val.description}
        btn="order now"
      />
  )
}

const App = () => {
  return (
    <>
      
      <h1 className='head'>Welcome to All</h1>
      
       {Menu.map(ncard)} 

      // <Favs /> 

    
    </>
  );
}

export default App

*/



//SLOT MACHINE 





import React from 'react'
import { Routes,Route } from 'react-router-dom'
// import Acc from './accordion/Acc.js'
// import Axios_Api from './components/basics/Axios_Api.js'
// import Todo from './components/TODO/Todo.js'
import SignUp from './Login_Signup/SignUp.js'
import Login from './Login_Signup/Login.js'
import Error from './Login_Signup/Error.js'
import Profile from './Login_Signup/Profile.js'
import Form_with_formik from './Form_with_formik.js'
// import CompA from './context/CompA.js'

// // import DigiClock from './components/basics/DigiClock.js'
// // import Form from './components/basics/Form.js'
// // import DigitalClock from './components/basics/DigitalClock'
// // import Form from './components/basics/Form'
// // import Hooks1 from './components/basics/Hooks1'
// // import Hooks2Time from './components/basics/Hooks2Time'
// // import Slot from './components/basics/Slot'
// // import Todo from './components/TODO/Todo.js'

const App = () => {
  

  return (
    <>
    <Form_with_formik />
    {/* <Routes>
      
      <Route exact path="/" element={<Login />}/>
      <Route exact path="/signup" element={<SignUp />}/>
      <Route path='/error' element={<Error />} />
      <Route path='/profile' element={<Profile />} />
    </Routes> */}
      {/* <SignUp /> */}
    </>
  )
}

export default App


// import React, { createContext } from 'react'
// import CompA from './context/CompA';
// const FirstName = createContext();
// const LastName = createContext();
// const App = () => {
    
//   return (
//     <>
//         <FirstName.Provider value={"himanshu"}>
//           <LastName.Provider value={"Kaushik"}>
//           <CompA />
//           </LastName.Provider>
            
//         </FirstName.Provider>
//     </>
//   )
// }

// export default App
// export {FirstName,LastName}