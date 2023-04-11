import * as S from './styles'

const Tarefa = () => (
  <S.Card>
    <S.Titulo>Nome da ListadeTarefas</S.Titulo>
    <S.Tag>Importante</S.Tag>
    <S.Tag>Pendente</S.Tag>
    <S.Descricao />
    <S.BarraDeAcoes>
      <S.Botao>Editar</S.Botao>
      <S.Botao>Remover</S.Botao>
    </S.BarraDeAcoes>
  </S.Card>
)

export default Tarefa
