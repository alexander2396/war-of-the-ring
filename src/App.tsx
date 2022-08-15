import './App.css';
import { AppMenu } from './components/menu/AppMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Board } from './pages/board/Board';


export const App = () => {

  return (
    <div className="App">
      <AppMenu/>
      <Board/>
    </div>
  );
}

export default App;
