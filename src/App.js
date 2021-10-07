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
      <Route exact path="/" render={() => <PaletteList palettes={seedPalettes} />} />
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
  )
}

export default App
