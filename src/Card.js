import React from 'react';

const Card = (props) => {
	return (
		<div className='dib br3 pa3'>
		<div className='mw5 tc bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5'>
			<img src='photo'  src={`https://robohash.org/${props.id}?200x200`} />
			<div>
				<h2>{props.name}</h2>
				<p>{props.email}</p>
			</div>
		</div>
		</div>
		)
}

export default Card;