import './styles/App.css';
import Canvas from './pages/canvas/сanvas';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
	const theme = createTheme({
		palette: {
			primary: {
				main: '#000000',
			},
			secondary: {
				main: '#f50057',
			},
		},
	});
	
	return (
		<ThemeProvider theme={theme}>
			<Canvas />
		</ThemeProvider>
	);
}

export default App;
