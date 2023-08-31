import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.text())
      .then(setGreeting);
  }, []);

  return (
    <>
      <h3>{greeting}</h3>
    </>
  );
}

export default App;
