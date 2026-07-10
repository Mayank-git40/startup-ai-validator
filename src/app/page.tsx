import Header from '../components/Header';
import Form from '../components/Form';
import Results from '../components/Results';
import { useState } from 'react';

const HomePage = () => {
  const [results, setResults] = useState(null);

  const handleAnalyze = async (idea) => {
    const response = await fetch('/api/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idea }),
    });
    const data = await response.json();
    setResults(data);
  };

  return (
    <div>
      <Header />
      <Form onAnalyze={handleAnalyze} />
      {results && <Results data={results} />}
    </div>
  );
};

export default HomePage;