import {Store} from './store/components/store'
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Store/>
        </Route>
        <Route exact path="/cart">
          <Store page="cart"/>
        </Route>
        <Route exact path="/membership">
          <Store page="membership"/>
        </Route>
        <Route >
        <Store notFound={true}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
