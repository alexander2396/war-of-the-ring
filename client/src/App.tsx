import './App.css';
import { AppMenu } from './pages/menu/AppMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Board } from './pages/board/Board';
import { Lobby } from './pages/lobby/Lobby';
import { useAppDispatch } from './tools/hooks/hooks';
import { openSocket } from './redux/game/gameSlice';

function App() {
    const dispatch = useAppDispatch();

    dispatch(openSocket());

    return (
        <div className="App">
            <AppMenu/>
            <Board/>
            <Lobby/>
        </div>
    );
}

export default App;
