import Palette from './components/Palette'
import { Route, Switch } from 'react-router-dom'
import PaletteList from './components/PaletteList'
import seedPalettes from './seedPalettes'
import { generatePalette } from './helpers/colorHelpers'

function App() {
  const findPalette = id => {
    return seedPalettes.find(palette => palette.id === id)
  }

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={routeProps => (
          <PaletteList palettes={seedPalettes} {...routeProps} />
        )}
      />
      <Route
        exact
        path="/palette/:id"
        render={routeProps => (
          <Palette
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        render={() => <h1>Color stuff</h1>}
      />
    </Switch>
  )
}

export default App
