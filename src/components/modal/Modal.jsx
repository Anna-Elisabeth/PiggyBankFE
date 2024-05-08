import piggy1 from "./piggy1.png";
import './modal.css';

// Modal component definition
const Modal = ({ open, onClose, message, onNavigate }) => {
  // If the modal is not open, return null
  if (!open) return null;

  // Render the modal
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation(); // Prevent closing the modal when modal content is clicked
        }}
        className='modalContainer' // Main container for the modal
      >
        <img src={piggy1} alt='piggy logo' />
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='content' style={{ fontSize: "20px", fontFamily: "Verdana, sans-serif", fontWeight: "bold"  }}>
            {message} {/* Dynamically display the message */}
          </div>
          <div className='btnContainer'>
            <button className='btnPrimary' onClick={onNavigate}>
              <span className='bold'>Continue</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;