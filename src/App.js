import { Text } from './components/wording/Text.js'
import { Button } from './components/bud/Button.js'
import { Title } from './components/headline/Title.js'

function App() {
  return (
    <>
      <Title value='Desafio 1' />
      <Text color='#c527d7' value='Hi Barbie, vamos ver Oppenheimer !?' />

      <Title value='Desafio 2' />
      <Button label='Hi Ken, Vamos  sim hihi' />
    </>
  );
}

export default App;
