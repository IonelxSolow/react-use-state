import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Languages from "./components/Languages";
import LanguageDetails from "./components/LanguageDetails";
import LanguageButtons from "./components/LanguageButtons";

const LearnWebDev = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  return (
    <div className="container py-4">
      <h1 className="mb-4">Learn Web Development</h1>
      <LanguageButtons
        languages={Languages}
        selectedLanguage={selectedLanguage}
        onSelectLanguage={setSelectedLanguage}
      />
      <LanguageDetails selectedLanguage={selectedLanguage} />
    </div>
  );
};

export default LearnWebDev;
