import React, { useState } from "react";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse__dropdown__container">
      <div className="collapse__dropdown__title">
        <h2>{title}</h2>
        <p onClick={toggleCollapse}>
          <i className={`fa-solid ${isOpen ? 'fa-chevron-up arrow-animate-up' : 'fa-chevron-down arrow-animate-down'}`}></i>
        </p>
      </div>
      {/* Si le collapse est à TRUE alors il affichera la description */}
      <div className={`collapse__dropdown__content ${isOpen ? 'content-visible' : ''}`}>
        {isOpen && <p>{content}</p>}
      </div>
    </div>
  );
};

export default Collapse;
