import logo from './logo.svg';
import './App.css';
import { addTodo } from './components/redux/action';
import {useDispatch, useSelector} from "react-redux";

function App() {
  const [data,setData] = useState([]);

  const dispatch = useDispatch();

  const todoList = useSelector(store => store.count);
  
  const handleChange = (e) => {
    setData({...data,[e.target.name]:e.target.value});
  }

  const handleSubmit = () => {
    dispatch(addTodo(data));
  }

  return (
    <div className="App">
      <center>
        <input type="text" placeholder='enter the todo' name="todo" value={todo} onChange={handleChange} />
        <br />
        <br />
        <button onClick={handleSubmit}>submit</button>
        <br />
        <br />
        {todoList}
      </center>
    </div>
  );
}

export default App;
