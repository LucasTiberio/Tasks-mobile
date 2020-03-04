import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import 'moment/locale/pt-br';

import * as S from './style';

const getTaskView = (doneAt) => (
  doneAt != null
    ? (
      <S.TaskIsDone>
        <Icon name="check" size={15} color="white" />
      </S.TaskIsDone>
    )
    : <S.TaskIsPending />
);

const Task = ({ data, handleClick }) => {
  const isDone = data.doneAt != null;
  const date = data.doneAt || data.estimateAt;
  const formattedDate = moment(date).locale('pt-br').format('ddd, D [de] MMMM');

  return (
    <S.Container>
      <TouchableWithoutFeedback onPress={() => handleClick(data.id)}>
        <S.TaskInfo>
          {getTaskView(data.doneAt)}
        </S.TaskInfo>
      </TouchableWithoutFeedback>
      <View>
        <S.TaskDescription done={isDone}>{data.description}</S.TaskDescription>
        <S.TaskEstimated>{formattedDate}</S.TaskEstimated>
      </View>
    </S.Container>
  );
};

export default Task;
