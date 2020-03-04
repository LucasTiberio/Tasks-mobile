import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import GlobalTheme from './src/GlobalTheme';
import TaskList from './src/containers/TaskList';

export default function App() {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <TaskList />
    </ThemeProvider>
  );
}
