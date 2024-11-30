import { useState } from 'react';
import './App.css';

function App() {
	const [isEven, setIsEven] = useState(true);

	const liContent = ['Home', 'Photos', 'Videos', 'Contacts']

	const filteredContent = liContent.filter((undefined, i) => (
		isEven ? (i + 1) % 2 === 0 : (i + 1) % 2 !== 0)
	)

	const handleClick = () => { setIsEven(!isEven) }

	return (
		<div>
			<header>
				<h1
				style={{ color: isEven ? "blue" : "green" }}>
					Este es el título principal del sitio web
				</h1>
			</header>
			<nav>
				<ul>
					{filteredContent.map((elem, index) => (
						<li
						key={index}>
							{elem}
						</li>
					))}
				</ul>
				<button
				onClick={handleClick}>
					Mostrar elmentos {isEven ? 'impares' : 'pares'}
				</button>
				<p>
					Mostrando elementos {isEven ? 'pares' : 'impares'}
				</p>
			</nav>
		</div >
	);
}

export default App;
