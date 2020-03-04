import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background: rgba(0, 0, 0, 0.7);
`;

export const Container = styled.View`
  background: #fff;
`;

export const Header = styled.Text`
  /* font-family: ${(props) => props.theme.FontFamily}; */
  background: ${(props) => props.theme.Colors.today};
  color: ${(props) => props.theme.Colors.secondary};
  
  font-size: 20px;
  padding: 15px;
  
  text-align: center;
`;

export const Input = styled.TextInput`
  /* font-family: ${(props) => props.theme.FontFamily}; */
  height: 50px;

  margin: 15px;
  padding: 0 20px;

  background: #fff;
  border-width: 1px;
  border-color: #E3E3E3;
  border-radius: 6px;
`;

export const ButtonList = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const ButtonText = styled.Text`
  margin: 20px;
  margin-right: 30px;

  color: ${(props) => props.theme.Colors.today};
`;

export const DateText = styled.Text`
  /* font-family: ${(props) => props.theme.FontFamily} */
  text-align: center;
  font-size: 20px;
  margin: 15px 0;
`;
