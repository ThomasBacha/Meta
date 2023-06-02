import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';
import Nav from './components/Nav.js';

function App() {
  return (
 <>
      <Header />
      <Nav />
      <Main>
        <h1>HomePage</h1>
        {/* Adding some text to fill in the page */}
        <p>This is the home page of the website.</p>
        <p>This is a default text.</p>
      </Main>
      <Footer />
    </>
  );
}

export default App;
