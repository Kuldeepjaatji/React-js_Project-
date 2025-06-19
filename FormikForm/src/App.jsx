import React, { useState } from "react";
import FormikForm from "./components/FormikForm";
import "./index.css";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "app dark" : "app"}>
      <div className="theme-toggle">
        <button onClick={() => setDark(!dark)}>
          {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
      <FormikForm />
    </div>
  );
}

export default App;
