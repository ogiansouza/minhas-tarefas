import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { BotaoSalvar } from '../../styles'

import { remover, editar } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'

type Props = TarefaClass

const Tarefa = ({
  descricao: descricaoOriginal,
  titulo,
  prioridade,
  status,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      />
      <S.BarraAcoes />
      {estaEditando ? (
        <>
          <BotaoSalvar
            onClick={() => {
              dispatch(
                editar({
                  descricao,
                  id,
                  prioridade,
                  status,
                  titulo
                })
              )
              setEstaEditando(false)
            }}
          >
            Salvar
          </BotaoSalvar>
          <S.BotaoCancelarRemover onClick={cancelarEdicao}>
            Cancelar
          </S.BotaoCancelarRemover>
        </>
      ) : (
        <>
          <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
          <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
            Remover
          </S.BotaoCancelarRemover>
        </>
      )}
    </S.Card>
  )
}

export default Tarefa
