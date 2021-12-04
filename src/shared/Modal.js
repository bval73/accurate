

import React, {useState} from 'react';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";


const AccModal = ({
  title='Modal Title', 
  subTitle='Sub Title', 
  onSubmit,
  openBtn: OpenBtn,
  children
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        type="submit"
        className="btn acc-btn btn-form" 
        onClick={() => setIsOpen(true)}>Submit
      </button>

      <Modal focusTrapped={false} 
            showCloseIcon={false}
            open={isOpen} 
            onClose={() => setIsOpen(false)} 
//            classNames={{ modal: 'booking-modal' }}
      >
     
        <h4 className='modal-title title'>{title}</h4>
        <p className='modal-subtitle'>{subTitle}</p>
        <div className='modal-body'>
          {children}
        </div>
        <div className='modal-footer'>
          {/* <button onClick={onSubmit} type='button' className='btn btn-bwm-main'>Confirm</button> */}
          <button onClick={() => setIsOpen(false)} type='button' className='btn btn-alert'>Ok</button>
        </div>
      </Modal>
    </>
  );
}

export default AccModal;
