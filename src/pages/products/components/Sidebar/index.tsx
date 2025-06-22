import * as React from 'react';
import * as S from './styles'

export interface ISideBarProps {
}

export function SideBar (props: ISideBarProps) {
  return (
    <S.Container>
      <input />
      <select>
        <option>teste</option>
        <option>teste2</option>
      </select>
    </S.Container>
  );
}
