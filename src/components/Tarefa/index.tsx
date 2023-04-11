import { useState } from 'react'
import * as S from './styles'

import * as enums from '../../utils/enums/Tarefa'

type Props = {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string
}

const Tarefa = ({ descricao, prioridade, status, titulo }: Props) => {
  const [estaEditando, setestaEditando] = useState(false)

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao value={descricao} />
      <S.BarraDeAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={() => setestaEditando(false)}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setestaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover>Remover</S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraDeAcoes>
    </S.Card>
  )
}

export default Tarefa
