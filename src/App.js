import { Button, Container } from 'react-bootstrap';
import './App.css';
import ContributionGraph from './components/ContributionGraph';
import Example from './components/Example';

function App() {
 

  return (
    <Container style={{fontSize: "12px"}} className="App">
      <div style={{width: "720px",display: "flex", justifyContent: "space-between", marginTop: "200px", marginLeft: "50px", color: "#959494", lineHeight: "0px"}}>
        <p>Янв.</p>
        <p>Фев.</p>
        <p>Мар.</p>
        <p>Апр.</p>
        <p>Май</p>
        <p>Июнь</p>
        <p>Июль</p>
        <p>Авг.</p>
        <p>Сен.</p>
        <p>Окт.</p>
        <p>Ноя.</p>
        <p>Дек.</p>
      </div>
      <div style={{display: 'flex'}}>
      <div style={{color: "#959494"}}>
        <p>Пн</p>
        <p>Ср</p>
        <p>Пт</p>
      </div>
      <ContributionGraph/>
      </div>
      <Example/>
    </Container>
  );
}

export default App;
