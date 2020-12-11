import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/works" exact component={Works} />
          <Route path="/contact" exact component={Contact} />
          {/* <Route component={Notfound} /> */}
        </Switch>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;