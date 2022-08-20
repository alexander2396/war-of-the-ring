import './App.css';
import { AppMenu } from './pages/menu/AppMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Board } from './pages/board/Board';
import { io } from 'socket.io-client';

function App() {
  
    const sock = io("http://localhost:3000");
    sock.on('message', (text) => console.log(text));

    return (
        <div className="App">
            <AppMenu/>
            <Board/>
        </div>
    );
}

export default App;
