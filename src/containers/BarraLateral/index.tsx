import FiltroCard from '../../Components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <S.Div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard ativo />
      </S.Filtros>
    </S.Div>
  </S.Aside>
)

export default BarraLateral
