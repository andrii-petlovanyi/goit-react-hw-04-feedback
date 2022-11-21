import styled from '@emotion/styled';

export const ButtonsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 10px;
`;
export const ListItem = styled.li``;
export const Button = styled.button`
  width: 65px;
  height: 25px;
  background-color: white;
  outline: none;
  border: 1px solid gainsboro;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    background-color: gainsboro;
  }
`;
