import React, { useState } from 'react'

const Hooks1 = () => {
  // const state = useState();
  const [count, setCount] = useState(0);

  function incVal() {
    setCount(count + 1);
    // console.log("Clicked")
  }

  function reVal() {
    setCount(count - count)
  }

  function inc10() {
    setCount(count + 10)
  }

  function reduce1() {
    if (count !== 0) {
      setCount(count - 1)
    }

  }

  const myStyle = {
    textAlign: "center",
    marginTop: "20px",
  }

  return (
    <>
      <div style = {myStyle} className="container">
        <h1 style={myStyle}>
          {count}
        </h1>
        <button className="btn btn-success" onClick={incVal} style={{ margin: "20px" }}>By 1</button>
        <button className="btn btn-success" onClick={inc10}>By 10</button>
        <button className="btn btn-danger" onClick={reduce1} style={{ margin: "20px" }}>Reduce 1</button>
        <button className="btn btn-alert" onClick={reVal}>Reset</button>

      </div>
    </>
  )
}

export default Hooks1