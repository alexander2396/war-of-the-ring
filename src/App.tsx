import './App.css';
import { AppMenu } from './features/menu/AppMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { selectRegions } from './features/gameSlice';
import { Region } from './models/region';
import { UnitType } from './models/unitType';
import { Board } from './features/board/Board';

function App() {
  
  



  return (
    <div className="App">
      <AppMenu/>
      <Board/>
    </div>
  );
}

export default App;
