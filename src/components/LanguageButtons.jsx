import React from "react";

const LanguageButtons = ({ languages, selectedLanguage, onSelectLanguage }) => {
  return (
    <div className="d-flex gap-2 mb-4">
      {languages.map((lang) => (
        <button
          key={lang.name}
          className={`btn ${
            selectedLanguage?.name === lang.name ? "btn-warning" : "btn-primary"
          }`}
          onClick={() => onSelectLanguage(lang)}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
};

export default LanguageButtons;
