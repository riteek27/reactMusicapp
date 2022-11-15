import logo from './logo.svg';
import './App.css';
import FooterBottom from './footer';
import HeaderTop from './header';
import MainContent from './main';

function App() {
  return (
    <div className="App">
      <HeaderTop title="Header Message"></HeaderTop>
        <MainContent></MainContent>
      <FooterBottom message="Footer Content"></FooterBottom>
    </div>
  );
}

export default App;
