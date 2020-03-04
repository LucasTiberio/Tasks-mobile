import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.ImageBackground`
  flex: 3;
`;

export const HeaderInfo = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const HeaderDefault = styled.Text`
  /* font-family: ${(props) => props.theme.FontFamily}; */
  color: ${(props) => props.theme.Colors.secondary};
`;

export const HeaderTitle = styled(HeaderDefault)`
  font-size: 50px;
  margin-left: 20px;
  margin-bottom: 20px;
`;

export const HeaderSubtitle = styled(HeaderDefault)`
  font-size: 20px;
  margin-left: 20px;
  margin-bottom: 30px;
`;

export const TaskList = styled.View`
  flex: 7;
`;
