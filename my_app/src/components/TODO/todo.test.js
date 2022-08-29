import Todo from './Todo'
import React from 'react'

import '@testing-library/jest-dom/extend-expect';
import {render,screen} from '@testing-library/react'



it("When data is added",()=>{
    render(<Todo />)
    const res = screen.getByText(/CRUD - List/)
    // console.log(res.textContent)
    expect(res).toBeInTheDocument()
})


it("test input field",()=>{
    render(<Todo />)
    const inp = screen.getByPlaceholderText('✋ Write Your First Name')
    expect(inp).toBeInTheDocument()
})

it("Second Input Testing",()=>{
    render(<Todo />)
    const inp2 = screen.getByPlaceholderText("✋ Write Your Email")
    expect(inp2).toBeInTheDocument()
})


// describe("test cases",()=>{
//     it("check email function",()=>{
//         render(<Todo />)
//         const fun1 = 
//         // let data = handle1()
//         console.log(fun1)
//     })
// })
