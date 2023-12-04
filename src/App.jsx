import './App.css';
import Cards from './componentes/cards';
import MiProvider from './context/MiProvider';


function App() {
	return (
		<MiProvider>
			<Cards />
		</MiProvider>
	);
}

export default App;
