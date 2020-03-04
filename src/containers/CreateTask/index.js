import React, { Component } from 'react';
import {
  Modal, TouchableWithoutFeedback, TouchableOpacity, Platform, View, Text,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import * as S from './style';

class CreateTask extends Component {
  constructor(props) {
    super(props);

    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.getDatePicker = this.getDatePicker.bind(this);
  }

  // eslint-disable-next-line react/state-in-constructor
  state = {
    description: '',
    date: new Date(),
    showAndroidDatepicker: false,
  };

  getDatePicker() {
    const { date, showAndroidDatepicker } = this.state;
    const dateString = moment(date).format('dddd, D [de] MMMM [de] YYYY');
    const handleShowAndroidDatepicker = () => this.setState({ showAndroidDatepicker: true });

    let datePicker = (
      <DateTimePicker
        value={date}
        onChange={(_, newDate) => this.setState({ date: newDate, showAndroidDatepicker: false })}
        mode="date"
      />
    );

    if (Platform.OS === 'android') {
      datePicker = (
        <View>
          <TouchableOpacity onPress={handleShowAndroidDatepicker}>
            <S.DateText>{dateString}</S.DateText>
          </TouchableOpacity>

          {showAndroidDatepicker && datePicker}
        </View>
      );
    }

    return datePicker;
  }

  handleChangeDescription(value) {
    this.setState({ description: value });
  }

  render() {
    const { onCancel, isVisible } = this.props;
    const { description } = this.state;

    return (
      <Modal transparent visible={isVisible} onRequestClose={onCancel} animationType="fade">
        <TouchableWithoutFeedback onPress={onCancel}>
          <S.Background />
        </TouchableWithoutFeedback>

        <S.Container>
          <S.Header> Nova Tarefa </S.Header>
          <S.Input
            placeholder="Insira a descrição..."
            value={description}
            onChangeText={this.handleChangeDescription}
          />

          {this.getDatePicker()}

          <S.ButtonList>

            <TouchableOpacity onPress={onCancel}>
              <S.ButtonText>Cancelar</S.ButtonText>
            </TouchableOpacity>

            <TouchableOpacity>
              <S.ButtonText>Salvar</S.ButtonText>
            </TouchableOpacity>

          </S.ButtonList>
        </S.Container>

        <TouchableWithoutFeedback onPress={onCancel}>
          <S.Background />
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

export default CreateTask;
