import React, { useState } from 'react';
import NounInput from './NounInput';
import AdjectiveInput from './AdjectiveInput';
import VerbInput from './VerbInput';

function MadlibForm() {
    const [noun1, setNoun1] = useState('');
    const [noun2, setNoun2] = useState('');
    const [adjective, setAdjective] = useState('');
    const [verb, setVerb] = useState('');
    const [madlib, setMadlib] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (!noun1 || !noun2 || !adjective || !verb) {
        setMadlib('');
        setError('All inputs are required');
        return;
      }
      const newMadlib = `The ${adjective} ${noun1} ${verb} over the ${noun2}.`;
      setMadlib(newMadlib);
      setError('');
    };
  
    const handleRestart = () => {
      setNoun1('');
      setNoun2('');
      setAdjective('');
      setVerb('');
      setMadlib('');
      setError('');
    };
  
    if (madlib) {
      return (
        <div>
          <p>{madlib}</p>
          <button onClick={handleRestart}>New Story!</button>
        </div>
      );
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <NounInput value={noun1} onChange={(e) => setNoun1(e.target.value)} />
        <br />
        <NounInput value={noun2} onChange={(e) => setNoun2(e.target.value)} />
        <br />
        <AdjectiveInput value={adjective} onChange={(e) => setAdjective(e.target.value)} />
        <br />
        <VerbInput value={verb} onChange={(e) => setVerb(e.target.value)} />
        <br />
        {error && <div className="error">{error}</div>}
        <button type="submit">Make a Story!</button>
      </form>
    );
  }

export default MadlibForm;