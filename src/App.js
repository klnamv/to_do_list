import './App.css';
import TodoList from './components/TodoList';
import { motion } from 'framer-motion';
import star1 from './assets/star1.svg';
import star2 from './assets/star2.svg';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='hero-container'>
          <motion.img
            src={star1}
            animate = {{ scale: 1.5 }}
            transition= {{ duration: 1, repeat: Infinity, }}
            className='star-1 star'
            alt='star1'
          />
          <motion.img
            src={star2}
            animate = {{ scale: 1.5 }}
            transition= {{ duration: 1, repeat: Infinity, }}
            className='star-2 star'
            alt='star'
          />
          <TodoList />
        </div>
      </header>
    </div>
  );
}

export default App;
