import { useState } from 'react';
import './App.scss';
import Footer from './components/Footer';
import Main from './components/Main';
import Menu from './components/Menu';


function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const switchPage = namePage => setCurrentPage(namePage);

  return (
    <div className="App">
      <Menu switchPage={switchPage}></Menu>
      <Main currentPage={currentPage}></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
