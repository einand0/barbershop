import { useEffect } from 'react'
import Container from './components/container/Container'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Main from './components/main/Main';
import Book from './components/book/Book';

function App() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className='container-principal'>
    <Container />
    <Main />
    <Book />
    </div>
  )
}

export default App
