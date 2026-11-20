import './App.css';
import Header from './Header.jsx';
import Card from './Card.jsx';
import Footer from './Footer.jsx';

function App() {
  return (
    <div className="page">
      <Header />

      <main className="content">
        <Card />
      </main>

      <Footer />
    </div>
  );
}

export default App;