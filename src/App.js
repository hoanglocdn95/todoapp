import './styles/index.css';
import TodoItem from './components/todoItem';
import Header from './layout/Header';

function App() {
  return (
    <div className="layout">
      <Header />
      <TodoItem />
    </div>
  );
}

export default App;
