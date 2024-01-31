import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard ativo={false} contador={1} legenda="pendentes" />
        <FiltroCard ativo={false} contador={2} legenda="concluidas" />
        <FiltroCard ativo={false} contador={3} legenda="urgentes" />
        <FiltroCard ativo={false} contador={4} legenda="importantes" />
        <FiltroCard ativo={false} contador={5} legenda="normal" />
        <FiltroCard ativo contador={10} legenda="todas" />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
