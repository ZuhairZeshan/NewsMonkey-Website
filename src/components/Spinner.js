import React from 'react'
import loading from './loading.gif'

const SPinner=() => {
    return (
      <div className='text-center'>
        <img src={loading} alt='Loading'/>
      </div>
    )
}

export default SPinner;