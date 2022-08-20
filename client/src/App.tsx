import './App.css';
import { AppMenu } from './pages/menu/AppMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Board } from './pages/board/Board';

function App() {
  
  return (
    <div className="App">
      <AppMenu/>
      <Board/>
    </div>
  );
}

export default App;
