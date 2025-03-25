import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Languages from "./components/Languages";

const LearnWebDev = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  return (
    <div className="container py-4">
      <h1 className="mb-4">Learn Web Development</h1>
      <div className="d-flex gap-2 mb-4">
        {Languages.map((lang) => (
          <button
            key={lang.name}
            className={`btn ${
              selectedLanguage?.name === lang.name
                ? "btn-warning"
                : "btn-primary"
            }`}
            onClick={() => setSelectedLanguage(lang)}
          >
            {lang.name}
          </button>
        ))}
      </div>
      <div className="card p-4 shadow">
        {selectedLanguage ? (
          <>
            <h2 className="card-title">{selectedLanguage.name}</h2>
            <p className="card-text">{selectedLanguage.description}</p>
          </>
        ) : (
          <p className="card-text">Nessun linguaggio selezionato</p>
        )}
      </div>
    </div>
  );
};

export default LearnWebDev;
