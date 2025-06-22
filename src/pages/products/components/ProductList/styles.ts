import styled from "styled-components";

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`

export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid #cecece;
  border-radius: 8px;
  padding: 16px;
  flex: 1 1 30%;
`
export const Image = styled.img`
  width: 100%;
  height: 100px;
  object-fit: contain;
`
export const Title = styled.h2`
  font-size: 24px;
`
export const Price = styled.p`
  font-size: 12px;
`