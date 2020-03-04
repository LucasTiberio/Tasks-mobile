import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  border-bottom-color: #aaa;
  border-bottom-width: 1px;
  padding: 10px 0;
`;

export const TaskInfo = styled.View`
  width: 20%;
  align-items: center;
  justify-content: center;
`;

const TaskCircle = styled.View`
  height: 25px;
  width: 25px;
  border-radius: 13px;
`;

export const TaskIsPending = styled(TaskCircle)`
  border-color: #555;
  border-width: 1px;
`;

export const TaskIsDone = styled(TaskCircle)`
  align-items: center;
  justify-content: center;

  background: #378752;
`;

export const TaskText = styled.Text`
  /* font-family: ${(props) => props.theme.FontFamily}; */
`;

export const TaskDescription = styled(TaskText)`
  color: ${(props) => props.theme.Colors.MainText};
  text-decoration: ${(props) => (props.done && 'line-through')}; 
`;

export const TaskEstimated = styled(TaskText)`
  color: ${(props) => props.theme.Colors.SubText};
`;
