import React from 'react';
import { render} from 'react-dom';

import ShootingStarsBackground from '../../src/';

const App = () => (
  <ShootingStarsBackground />
);

render(<App />, document.getElementById("root"));