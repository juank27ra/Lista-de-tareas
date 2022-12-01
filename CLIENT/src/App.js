import { BrowserRouter, Route, Routes} from 'react-router-dom'
import '../src/assets/App.css';
import Task from './components/Task';
import Create from './components/CreateTask';
import Edit from './components/Edit';

function App() {
  return (
    <BrowserRouter>
  <div className='App'>
    <Routes>
      <Route exact path='/' element={<Task/>}/>
      <Route exact path='/create' element={<Create/>}/>
      <Route exact path='/edit/:id' element={<Edit/>}/>
    </Routes>
  </div>
  </BrowserRouter>
  );
}

export default App;
