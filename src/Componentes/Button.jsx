import React from "react";

const Button = ({ setFilters }) => {
  return (
    <div>
      <button onClick={() => setFilters(null)} className="btn-filter">
        Todas
      </button>
      <button onClick={() => setFilters(true)} className="btn-filter">
        Completas
      </button>
      <button onClick={() => setFilters(false)} className="btn-filter">
        Incompletas
      </button>
    </div>
  );
};

export default Button;
