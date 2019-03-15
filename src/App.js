import React from 'react';

import data from './movies-data';
import MoviesList from './Components/Movies/List';

const App = (props => <MoviesList data={data} />);
export default App;
