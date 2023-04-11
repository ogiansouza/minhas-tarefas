import BarraLateral from './containers/BarraLateral'
import ListadeTarefas from './containers/ListaDeTarefa'
import EstiloGlobal, { Container } from './style'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListadeTarefas />
      </Container>
    </>
  )
}

export default App
