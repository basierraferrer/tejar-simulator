import React from 'react';
import { Container, Row } from 'reactstrap';
import Floor from '../components/floor';
import Header from '../components/common/header';
import Wall from '../components/wall';
import '../styles/App.css';
import Enviorement from '../components/enviorement';

function App() {
  const [floorSelected, setFloorSelected] = React.useState(0)
  const [wallSelected, setWallSelected] = React.useState(0)
 
  return (
    <div className="App">
      <Header />
      <Container className="d-flex justify-content-around m-2">
        <div className="d-flex flex-column m-2">
          <Enviorement imageSelected={`${floorSelected}-${wallSelected}`} />
          <Floor onClick={(value) => setFloorSelected(value)} />
        </div>
        <Wall onClick={(value) => setWallSelected(value)} />
      </Container>
    </div>
  );
}

export default App;
