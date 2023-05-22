import './stylesheets/App.css';
import { Header } from './components/Header';
import { SectionIni } from './components/SectionIni';
import { SectionSobre } from './components/SectionSobre';
import { Destaques } from './components/Destaques';
import { Qualificacoes } from './components/Qualificacoes';
import { Servicos } from './components/Servicos';
import { Conhecimentos } from './components/Conhecimentos';
import { Contato } from './components/Contato';
import { BotaoVoltar } from './components/BotaoVoltar';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <SectionIni />
      <SectionSobre />
      <Destaques />
      <Qualificacoes />
      <Servicos />
      <Conhecimentos />
      <Contato />
      <BotaoVoltar />
      <Footer />
    </div>
  );
}

export default App;
