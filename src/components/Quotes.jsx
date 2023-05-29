import React, { useState, useEffect } from 'react';
import '../Style/quotes.css';

const Quotes = () => {
  const category = 'movies';
  const [quotes, setQuotes] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
          headers: { 'X-Api-Key': 'cw1sCZ0TspAVMmL1VYR95A==qPbxZI6CH7KNYcWy' },
          contentType: 'application/json',
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setQuotes(data);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [category]);

  if (isLoading) {
    return <div className="alert alert-success loading" role="alert">Loading...</div>;
  }

  if (hasError || quotes.length === 0) {
    return <div className="alert alert-danger error" role="alert">Something went wrong!</div>;
  }

  return (
    <div className="Quoutes">
      {quotes.map((quote) => (
        <div className="quote-container" key={quote}>
          <h2 className="quotes-title">Stars Quotes</h2>
          <p className="quote"><q>{quote.quote}</q></p>
          <p className="author">{quote.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Quotes;
