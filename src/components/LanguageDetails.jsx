import React from "react";

const LanguageDetails = ({ selectedLanguage }) => {
  return (
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
  );
};

export default LanguageDetails;
