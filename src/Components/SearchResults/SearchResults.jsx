import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import contentIndex from './contentIndex';
import './SearchResults.css';

function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      const lowerCaseQuery = query.toLowerCase();
      const filteredResults = contentIndex.filter((page) =>
        page.title.toLowerCase().includes(lowerCaseQuery) ||
        page.content.toLowerCase().includes(lowerCaseQuery)
      );
      setResults(filteredResults);
    }
  }, [query]);

  return (
    <div className="search-results-container">
      <h1 className="search-results-header">Résultat(s) de recherche de "{query}"</h1>
      <ul className="search-results-list">
        {results.length > 0 ? (
          results.map((result, index) => (
            <li key={index} className="search-results-item">
              <a href={result.url}>
                <h2>{result.title}</h2>
                <p>{result.content}</p>
              </a>
            </li>
          ))
        ) : (
          <p>Aucun résultat trouvé !</p>
        )}
      </ul>
    </div>
  );
}

export default SearchResults;
