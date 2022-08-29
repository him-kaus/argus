import React, { useState } from 'react'
import Menu from './Menu'
import Cards from './Cards'

const Resturent = () => {
    const[menuData, setMenuData] = useState(Menu);
    // console.log(menuData)
    return (
        <>
            <Cards menuData={menuData}/>
        </>
    )
}

export default Resturent;