import React, { useState, useEffect } from 'react';
import './quotes.css';

function Quotes() {
  const category = 'movies';
  const [quotes, setQuotes] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
          headers: { 'X-Api-Key': 'YMtuGdG5UXWjRab+D8cK6Q==2z8CCTPqpNffUtUY' },
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

  if (hasError || Number(quotes.length) === 0) { return <div className="error">Something went wrong!</div>; }

  if (isLoading) return <div>Loading...</div>;

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
}

export default Quotes;
