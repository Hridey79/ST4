import React from 'react'
import Card from './Card'
import './Record.css'
function Record() {
  return (
    <div className='parent'>
      <div className='heading_1'><h1>Customer Reviews</h1></div>
      <div className='Record'>
        <Card></Card>
      </div>
    </div>
  )
}

export default Record