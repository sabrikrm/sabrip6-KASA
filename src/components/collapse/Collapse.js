import React, { useState } from "react";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen); // Change l'état isOpen entre true et false
  };

  return (
    <div className="collapse__dropdown__container">
      <div className="collapse__dropdown__title" onClick={toggleCollapse}>
        <h2>{title}</h2>
        {/* Ic les classes sont appliquées conditionnellement en fonction de isOpen */}
        <p>
          <i className={`fa-solid ${isOpen ? 'fa-chevron-up arrow-animate-up' : 'fa-chevron-down arrow-animate-down'}`}></i>
        </p>
      </div>
      {/* Le contenu du dropdown est affiché si isOpen est true */}
      <div className={`collapse__dropdown__content ${isOpen ? 'content-visible' : ''}`}>
        {isOpen && <p>{content}</p>}
      </div>
    </div>
  );
};

export default Collapse;
