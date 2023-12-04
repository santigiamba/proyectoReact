import React, { useState } from 'react';

import '../css/cards.css';  // Ajusta la ruta según tu estructura de carpetas
	
function Card(props) {
	const [likes, setLikes] = useState(0);
	return (
		<div className="card">
			<h2 className='Titulo'>{props.title}</h2>
			<div className='Descripcion'>
				<p>{props.description}</p>
			</div>
			<img src={props.imageUrl} className='card-img' alt="Card" />
			<h4 className='TxtLikes' >Likes: {likes}</h4>
			<button className='BotonLikes' onClick={() => setLikes(likes + 1)} >
				Incrementar Like
			</button>
			<button className='BotonLikes' onClick={() => props.eliminarCarta(props.id)} >
				Eliminar
			</button>
		</div>
	);
}

export default Card;