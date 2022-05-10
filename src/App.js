import { Landing } from "./Landing/index";
import { HomeComponent } from "./Home/index";
import { Router } from "react-router";
import { Route } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  const history = createHistory();
  return (
    <div className="App">
      <Router history={history}>
        <Provider store={store}>
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/home" component={HomeComponent} />
        </Provider>
      </Router>
    </div>
  );
}

export default App;
