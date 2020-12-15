import { Route, Switch } from 'react-router-dom';
import {Col,Row} from 'reactstrap'
import './App.css';
import Header from './components/Header';
import Orders from './screens/Orders';
import Customers from './screens/Customers'
import Sidebar from './components/Sidebar';
import Dashboard from './screens/Dashboard';

function App() {
  return (
    <div>
      {/*<Container fluid={true} noGutters>*/}
        <Row noGutters>
            <Col md="3" lg="2">
              <Sidebar />
            </Col>
            <Col md="9" lg="10">
              <Header />
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/orders" component={Orders} />
                <Route path="/customers" component={Customers} />
              </Switch>
            </Col>
        </Row> 
      {/*</Container>*/}     
    </div>
  );
}

export default App;
