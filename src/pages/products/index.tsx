import * as S from './styles';
import SidebarFilter from '../../components/SidebarFilter';

export default function Products() {

  return (
    <S.Container>
      <h1>Product Listing</h1>

      <S.Wrapper>

        <SidebarFilter 
          onSearch={(value) => {
            // Aqui você vai filtrar os produtos com base no valor de busca
          }}
          onCategoryChange={(value) => {
            // Aqui você vai filtrar os produtos com base na categoria selecionada
          }}
        />
        
        {/* Botões de troca de visualização */}
        <div>
          <div>
            <button onClick={() => null}>List</button>
            <button onClick={() => null}>Grid</button>
            <button onClick={() => null}>Table</button>
          </div>
          <section>
          </section>
        </div>
      </S.Wrapper>


      {/* Aqui você renderiza os produtos com base na viewType */}
    </S.Container>
  );
}
