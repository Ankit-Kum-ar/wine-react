import React from 'react';
import { Button } from './ui/button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ModalProps {
  onConfirm: () => void;
}

const Modal: React.FC<ModalProps> = ({ onConfirm }) => {
  const handleCancel = () => {
    toast.error('You must be 18 years or older to enter this site.', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-[#164328] p-6 md:p-8 rounded-lg shadow-lg text-center w-10/12 md:w-1/3">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Age Verification</h2>
        <p className="mb-6 text-sm md:text-base text-white">You must be 18 years or older to enter this site. Please verify your age.</p>
        <div className="flex justify-center space-x-4">
          <Button
            onClick={onConfirm}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Yes, I am 18+
          </Button>
          <Button
            onClick={handleCancel}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            No
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;