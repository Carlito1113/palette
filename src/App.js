import Palette from './components/Palette'
import seedPalettes from './seedPalettes'
import {generatePalette} from './helpers/colorHelpers'

function App() {
  return (
    <div className="App">
      <Palette palette={generatePalette(seedPalettes[4])} /> 
    </div>
  );
}

export default App;
