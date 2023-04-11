import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

import * as enums from '../../utils/enums/Tarefa'

const tarefas = [
  {
    titulo: 'Estudar Typescript',
    descricao: 'Ver aula 3 da EBAC',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Pagar conta de internet',
    descricao: 'Baixar fatura no Gmail',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Ir para a academia',
    descricao: 'Fazer treino B',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  }
]

const ListadeTarefas = () => (
  <Container>
    <p>2 Tarefas marcadas como: categoria e termo</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            prioridade={t.prioridade}
            status={t.status}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListadeTarefas
