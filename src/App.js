import Palette from './components/Palette'
import { Route, Switch } from 'react-router-dom'
import seedPalettes from './seedPalettes'
import { generatePalette } from './helpers/colorHelpers'

function App() {
  const findPalette = id => {
   return seedPalettes.find(palette => palette.id === id)
  }

  return (
    <Switch>
      <Route exact path="/" render={() => <h1>stuff</h1>} />
      <Route
        exact
        path="/palette/:id"
        render={routeProps => (
          <Palette
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
    </Switch>
    // <div className="App">
    //   <Palette palette={generatePalette(seedPalettes[4])} />
    // </div>
  )
}

export default App
