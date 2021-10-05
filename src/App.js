import Palette from './components/Palette'
import { Route, Switch } from 'react-router-dom'
import seedPalettes from './seedPalettes'
import { generatePalette } from './helpers/colorHelpers'

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>stuff</h1>} />
      <Route exact path="/palette/:id" render={() => <h1>more stuff</h1>} />
    </Switch>
    // <div className="App">
    //   <Palette palette={generatePalette(seedPalettes[4])} />
    // </div>
  )
}

export default App
