import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
import { FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import CreateTask from '../CreateTask';
import Task from '../../components/Task';
import * as S from './style';
import todayImage from '../../../assets/imgs/today.jpg';


class TaskList extends Component {
  constructor(props) {
    super(props);

    this.handleToggleTask = this.handleToggleTask.bind(this);
    this.handleShowNonDoneTasks = this.handleShowNonDoneTasks.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.createTask = this.createTask.bind(this);
  }

  // eslint-disable-next-line react/state-in-constructor
  state = {
    onlyNonDone: false,
    createTaskIsVisible: false,
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

  handleShowNonDoneTasks() {
    const { onlyNonDone } = this.state;
    this.setState({ onlyNonDone: !onlyNonDone }, this.handleToggleTask());
  }

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

  handleCloseModal() {
    this.setState({ createTaskIsVisible: false });
  }

  handleOpenModal() {
    this.setState({ createTaskIsVisible: true });
  }

  createTask(description, date) {
    const { taskList } = this.state;
    const newTaskList = [
      ...taskList,
      {
        id: Math.random(),
        description,
        estimateAt: date,
      },
    ];
    this.setState({ taskList: newTaskList, createTaskIsVisible: false });
  }

  render() {
    const today = moment().locale('pt-br').format('ddd, D [de] MMMM');
    let { taskList } = this.state;
    const { onlyNonDone, createTaskIsVisible } = this.state;
    if (onlyNonDone) {
      taskList = taskList.filter((task) => task.doneAt == null);
    }

    return (
      <S.Container>
        <CreateTask
          isVisible={createTaskIsVisible}
          createTask={this.createTask}
          onCancel={this.handleCloseModal}
        />

        <S.Header source={todayImage}>
          <S.HeaderInfo>
            <S.ToggleDone>
              <TouchableOpacity onPress={this.handleShowNonDoneTasks}>
                <Icon name={onlyNonDone ? 'eye-slash' : 'eye'} size={25} color="#fff" />
              </TouchableOpacity>
            </S.ToggleDone>
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

        <S.CreateTaskButton activeOpacity={0.85} onPress={this.handleOpenModal}>
          <Icon name="plus" size={25} color="#fff" />
        </S.CreateTaskButton>

      </S.Container>
    );
  }
}

export default TaskList;
