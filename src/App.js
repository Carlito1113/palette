import Palette from './components/Palette'
import seedPalettes from './seedPalettes'
import {generatePalette} from './helpers/colorHelpers'

function App() {
    console.log(generatePalette(seedPalettes[4]))
  return (
    <div className="App">
      <Palette {...seedPalettes[4]} /> 
    </div>
  );
}

export default App;
