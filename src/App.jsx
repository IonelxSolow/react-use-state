import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Languages from "./components/Languages";
import LanguageDetails from "./components/LanguageDetails";

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
      <LanguageDetails selectedLanguage={selectedLanguage} />
    </div>
  );
};

export default LearnWebDev;
