import * as React from 'react';
import * as S from './styles'

export interface IListViewProps {
}

export function ListView (props: IListViewProps) {
  return (
    <S.Container>
      <button>lista</button>
      <button>grid</button>
    </S.Container>
  );
}
