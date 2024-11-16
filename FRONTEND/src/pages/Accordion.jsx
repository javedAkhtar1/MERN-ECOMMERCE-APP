import React, { useState } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Accordion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" border-gray-300 py-2">
      <button 
        onClick={toggleAccordion} 
        className="flex justify-between items-center w-full text-left text-lg font-semibold text-gray-800"
      >
        {question}
        <span className="text-gray-500">{isOpen ? <ChevronRightIcon className="-rotate-90" /> : <ChevronRightIcon className="rotate-90" />}
        </span>
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
}

export default Accordion;
