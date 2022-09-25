import { ThemeProvider } from 'styled-components'

import { Container } from "./components/styles/Component.styled";
import Header from "./components/Header";
import GlobalStyles from './components/styles/Global';
import AddNote from './components/AddNote';
import { useState } from 'react';

const lightTheme = {
  colors: {
    body: '#fff',
    icon: '#1c1c1c'
  }
}
const darkTheme = {
  colors: {
    body: '#1c1c1c',
    icon: '#fff',
  }
}

function App() {
  const [theme, setTheme] = useState('light');
  const isDarkTheme = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark')
  }

  const [input, setInput] = useState(false)
  

  return (
    <ThemeProvider theme= {isDarkTheme ? darkTheme : lightTheme}>
      <>
      <GlobalStyles />
        <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} setInput={setInput} input={input} />
        <Container>
          <AddNote input={input} />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
