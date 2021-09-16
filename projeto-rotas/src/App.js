import { HashRouter as BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <BrowserRouter>
          <Switch>
            <Route path='/' exact={true}>
              <MainPage/>
            </Route>

            <Route path='/harley'  exact={true}>
              
            </Route>

            <Route path="/suzuky"  exact={true}>
             
            </Route>

            <Route path="/honda"  exact={true}>
              
            </Route>

            <Route path="/yamaha"  exact={true}>
              
            </Route>

            <Route path="/lambreta"  exact={true}>
              
            </Route>

            <Route path='/honda/city'>

            </Route>

            <Route path='/honda/trail'>

            </Route>
            <Route path='/honda/off-road'>

            </Route>
            <Route path='/honda/sport'>

            </Route>

            <Route path='/honda/scooter'>

            </Route>
            
          </Switch>
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
