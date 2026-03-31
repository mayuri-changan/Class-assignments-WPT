// import logo from './logo.svg';
// import './App.css';
import Counter from './counter';
import LoginForm from './LoginForm';
import LifecycleDemo from './LifecycleDemo';
import TodoApp from './TodoApp';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Counter />
           <LoginForm />
            <LifecycleDemo />
            <TodoApp />
    </div>
  );
}

export default App;
