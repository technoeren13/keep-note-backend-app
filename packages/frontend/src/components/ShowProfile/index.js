

import React from 'react'

import './index.scss'

import { FaRegEye, FaStar, FaCalendar } from 'react-icons/fa';

const Notes = (props) => {

  return (
    <div className='container'>

      <article className="note-title">
        <h1>Your Added Notes</h1>

      </article>

      <article className="note">
        <div className='note-info'>
          <span><FaRegEye /> 1</span>
          <span><FaStar /> 10</span>
          <span><FaCalendar /> 13/02/19</span>
        </div>
        <hr />
        <div className='note-preview'>
          <p>Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!</p>
        </div>
        <div className='note-button'>
          <button className='view'>View</button>
          <button className='delete'>Delete</button>
        </div>
      </article>


    </div>
  )
}

export default Notes
