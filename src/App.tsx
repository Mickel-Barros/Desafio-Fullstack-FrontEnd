import './App.css';
import RoutesMain from './routes/routes';
import { GlobalStyle } from './styles/global';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <GlobalStyle/>
    <RoutesMain/>
    <ToastContainer/>
    </>
  )
}

export default App;
