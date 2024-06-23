import { useState } from 'react'
import '../../../assets/css/common/message.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Message({className, msg = null, callback}) {
  return (
    <>
        {
            (msg) ? 
                <div className={`message-container ${className}`}>
                    <FontAwesomeIcon icon="fa-solid fa-circle-exclamation"  size='lg'/>
                    <span>{msg}</span>
                    <FontAwesomeIcon onClick={()=> callback()} icon="fa-solid fa-xmark" style={{cursor: "pointer"}}/>
                </div>
            :
            <></>
        }
    </>
  )
}

export default Message