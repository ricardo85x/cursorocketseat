import React, { useState, useEffect, useMemo } from 'react';

function App() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTech([...tech, newTech]);
    setNewTech('');
  }

  useEffect(() => {
    const techstr = localStorage.getItem('tech');
    if (techstr) {
      setTech(JSON.parse(techstr));
    }

    // return () => {};
  }, []);

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <strong>Voce tem {techSize} tecnologias</strong>
      <input
        type="text"
        value={newTech}
        onChange={e => setNewTech(e.target.value)}
        name=""
        id=""
      />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
