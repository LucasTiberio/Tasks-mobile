import React, { Component } from 'react';
import { View, Text } from 'react-native';

class TaskList extends Component {
  componentDidMount() {
    console.log('mount exclude');
  }

  render() {
    return (
      <View>
        <Text>Componente tasklist</Text>
      </View>
    );
  }
}

export default TaskList;
