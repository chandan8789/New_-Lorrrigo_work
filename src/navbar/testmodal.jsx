import { Translate } from '@mui/icons-material';
import React, { useState } from 'react'

const ModalTest = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
  return (
    <div>
      <div><button onClick={()=> setIsModalOpen(true)}>Open modal</button></div>
      {
        isModalOpen && <div style={{height: "100px", width: "100px", position: 'absolute', top: "50%", left: '50%', transform: "translate(-50%, -50%)", background: 'red'}}>this is modal
        
        <button onClick={()=>setIsModalOpen(false)}>Close modal</button>
        </div>
      }
    </div>
  )
}

export default ModalTest
