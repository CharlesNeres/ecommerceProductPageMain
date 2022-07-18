import './App.css';
import Header from './components/header/Header';
import Content from './components/main/Content';
import Bottom from './components/bottom/Bottom';
import MobileMenu from './components/mobileMenu/MobileMenu';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Bottom />  
      <MobileMenu />    
    </div>
  );
}

export default App;
