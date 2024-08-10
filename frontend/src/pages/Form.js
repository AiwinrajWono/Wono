import React from 'react'
import NewForm from '../components/NewForm'
const Form = () => {
  return (
    <div>
      <div className='grid2-form'>
        <div className="col">
          <input type="text" className="form-control" placeholder="Name" aria-label="name" />
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="Email" aria-label="email" />
        </div>
      </div>
      <div className="button_space">
        <button  className='submit-button'>Submit</button>
      </div>
    </div>
  )
}

export default Form
