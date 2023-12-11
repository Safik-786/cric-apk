import React from 'react'
import ReactDOM from 'react-dom'

function MatchDetail({close}) {
  return ReactDOM.createPortal (
    <>
      <div className='modal-wrapper' onClick={close} >

      </div>
        <div className='modal-container'>
          <h3>India vs pakistan match details</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium suscipit,
            officiis consequatur voluptate veniam eveniet quo nihil ab molestias debitis eligendi iusto
            , praesentium tempora dolores non ullam quasi culpa? Molestiae sapiente omnis odit iste.
          </p>
          <button onClick={close}>close</button>
      </div>
    </>, document.querySelector('.appModal')
  )
}

export default MatchDetail
