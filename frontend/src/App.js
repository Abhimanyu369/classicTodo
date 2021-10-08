import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './views/home';
import Analytics from './views/analytics';
import Login from './views/login';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          <Layout>
            <Home />
          </Layout>
        </Route>
        <Route exact path="/analytics">
          <Layout>
            <Analytics />
          </Layout>
        </Route>
        <Route exact path="/" component={Login}></Route>
      </Switch>
    </Router>
  );
}

export default App;
