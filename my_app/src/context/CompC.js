// import React from 'react'
// import { FirstName,LastName} from '../App'

// const CompC = () => {
//   return (
//     <>
//     <FirstName.Consumer>
//         {(fname) => {
//             return(
//                 <LastName.Consumer>
//                     {(lname) => {
//                         return(
//                             <h1>My Name Is {fname} {lname}</h1>
            
//                         )
//                     }}
//                 </LastName.Consumer>
//        ) }}
//     </FirstName.Consumer>
    
//     </>
//   )
// }

// export default CompC

import React from 'react'
import {useParams} from 'react-router-dom'

const CompC = () => {
  const {name} = useParams();
  return (
    <div>Hii ! This Is About Page {name} </div>
  )
}

export default CompC