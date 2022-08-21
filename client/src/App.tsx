import './App.css';
import { AppMenu } from './pages/menu/AppMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Board } from './pages/board/Board';
import { io } from 'socket.io-client';
import { Lobby } from './pages/lobby/Lobby';

function App() {
    const socket = process.env.NODE_ENV == 'development' ? io("http://localhost:3001", { autoConnect: false }) : io({ autoConnect: false });

    // socket.onAny((event, ...args) => {
    //     console.log(event, args);
    // });

    return (
        <div className="App">
            <AppMenu/>
            <Board/>
            <Lobby socket={socket}/>
        </div>
    );
}

export default App;
