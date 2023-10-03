import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <S.Div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard contador={3} legenda="pendentes" />
        <FiltroCard contador={4} legenda="concluídas" />
        <FiltroCard contador={5} legenda="urgentes" />
        <FiltroCard contador={6} legenda="importantes" />
        <FiltroCard contador={7} legenda="normal" />
        <FiltroCard ativo contador={8} legenda="todas" />
      </S.Filtros>
    </S.Div>
  </S.Aside>
)

export default BarraLateral
