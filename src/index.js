import React from 'react';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarning(['Unrecognized WebSocket']);

import Routes from './routes';

const App = () => <Routes />;

export default App;