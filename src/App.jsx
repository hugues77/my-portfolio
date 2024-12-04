import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Title from "./components/partials/title/Title";
import Realisations from "./components/realisations/Realisations";
import Outils from "./components/outils/Outils";

function App() {
  

  return (
    <>
      <div>
          <Navbar />
          <Header />
          <div className="container">
            <Title title='A propos de Moi'/>
            <About/>
            <Title title='Mes Réalisations'/>
            <Realisations />
            <Title title="Mes Outils" />
          </div>
          <Outils />
      </div>
    </>
  )
}

export default App
