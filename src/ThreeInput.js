// create a form that take a input in real time from user and display also in real time.

import React, { useState } from 'react'

const ThreeInput = () => {

     const [value, setValue] = useState('');
  return (
    <div>
        <h1>Input Form</h1>
        <label>Enter: </label>
        <input type='text' placeholder='Enter something' onChange={(e)=>
            setValue(e.target.value)
        }  />
        <p>You Entered: {value}</p>

    </div>
  )
}

export default ThreeInput
