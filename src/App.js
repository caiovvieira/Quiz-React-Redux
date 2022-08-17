import './App.css';
import Quiz from './components/Quiz';
import questions from './components/Questions';
import { legacy_createStore as createStore } from 'redux'
import allReducers from './reducers/index.js'
import { Provider } from 'react-redux'

function App() {
  const store = createStore(allReducers)

  return (
    <div className="App">
      <Provider store={store}>
        <Quiz questions={questions}></Quiz>
      </Provider>
    </div>
  );
}

export default App;



