import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
import { FlatList } from 'react-native';

import Task from '../../components/Task';
import * as S from './style';
import todayImage from '../../../assets/imgs/today.jpg';


class TaskList extends Component {
  constructor(props) {
    super(props);

    this.handleToggleTask = this.handleToggleTask.bind(this);
  }

  // eslint-disable-next-line react/state-in-constructor
  state = {
    taskList: [
      {
        id: Math.random(),
        description: 'Criar App',
        estimateAt: new Date(),
        doneAt: new Date(),
      },
      {
        id: Math.random(),
        description: 'Publicar App',
        estimateAt: new Date(),
      },
      {
        id: Math.random(),
        description: 'Divulgar App',
        estimateAt: new Date(),
      },
    ],
  };

  handleToggleTask(taskId) {
    const { taskList } = this.state;
    const newTaskList = taskList;
    newTaskList.forEach((task) => {
      if (task.id === taskId) {
        // eslint-disable-next-line no-param-reassign
        task.doneAt = task.doneAt
          ? null
          : new Date();
      }
    });

    this.setState({ taskList: newTaskList });
  }

  render() {
    const today = moment().locale('pt-br').format('ddd, D [de] MMMM');
    const { taskList } = this.state;

    return (
      <S.Container>

        <S.Header source={todayImage}>
          <S.HeaderInfo>
            <S.HeaderTitle>Hoje</S.HeaderTitle>
            <S.HeaderSubtitle>{today}</S.HeaderSubtitle>
          </S.HeaderInfo>
        </S.Header>

        <S.TaskList>
          <FlatList
            data={taskList}
            keyExtractor={(_, i) => `${i}`}
            renderItem={({ item }) => <Task handleClick={this.handleToggleTask} data={item} />}
          />
        </S.TaskList>

      </S.Container>
    );
  }
}

export default TaskList;
