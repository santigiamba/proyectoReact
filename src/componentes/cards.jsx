// Cards.js
import React, { useState, useContext } from 'react';
import Card from './Card'; 
import { Contexto } from '../context/MiProvider';
import '../css/cards.css'
import '../css/style.css'

function Cards() {
  const { receta, setReceta } = useContext(Contexto);
  const [nuevaReceta, setNuevaReceta] = useState({
    title: 'Nuevo Plato',
    description: 'Descripción del nuevo plato',
    imageUrl: 'URL de la imagen del nuevo plato',
  });

  const handleInputChange = (e) => {
    setNuevaReceta({ ...nuevaReceta, [e.target.name]: e.target.value });
  };

  const handleAgregarNuevaReceta = () => {
    setReceta([...receta, { ...nuevaReceta, id: receta.length + 1 }]);
    setNuevaReceta({
      title: '',
      description: '',
      imageUrl: '',
    });
  };

  return (
    <div className="cardGridStyle">
      {receta.map((receta) => (
        <Card
          key={receta.id}
          title={receta.title}
          description={receta.description}
          id={receta.id}
          imageUrl={receta.imageUrl}
        />
      ))}

      {/* Formulario para agregar una nueva tarjeta */}
      <div className="nueva-tarjeta">
        <label htmlFor="title" style={{ fontSize: '20px' }}>Título:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={nuevaReceta.title}
          onChange={handleInputChange}
        />

        <label htmlFor="description" style={{ fontSize: '20px' }}>Descripción:</label>
        <textarea
          id="description"
          name="description"
          value={nuevaReceta.description}
          onChange={handleInputChange}
        />

        <label htmlFor="imageUrl" style={{ fontSize: '20px' }}>URL de la imagen:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={nuevaReceta.imageUrl}
          onChange={handleInputChange}
        />

        <button onClick={handleAgregarNuevaReceta}>Agregar Nueva Tarjeta</button>
      </div>
    </div>
  );
}

export default Cards;
