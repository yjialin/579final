import React, { useState, useEffect } from "react";

function Motivation() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        setQuote(data.content);
      } catch (error) {
        setQuote(
          "Life always gives you another chance, and that chance is called tomorrow."
        );
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="motivation">
      <blockquote>{quote}</blockquote>
    </div>
  );
}

export default Motivation;
