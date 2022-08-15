import './App.css';
import Quiz from './Components/Quiz';
import questions from './Components/Questions';

function App() {
  return (
    <div className="App">
      <Quiz questions={questions}></Quiz>
    </div>
  );
}

export default App;
