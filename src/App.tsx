import { Provider } from 'react-redux'
import BarraLateral from './containers/BarraLateral'
import ListadeTarefas from './containers/ListaDeTarefa'
import EstiloGlobal, { Container } from './style'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListadeTarefas />
      </Container>
    </Provider>
  )
}

export default App
