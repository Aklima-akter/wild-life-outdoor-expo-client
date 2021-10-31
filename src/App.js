import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import AuthProvider from './context/AuthProvider'
import AddCamping from './page/AddCamping/AddCamping'
import Camping from './page/Camping/Camping'
import AllBooking from './page/Home/AllBooking/AllBooking'
import Footer from './page/Home/Footer/Footer'

import Header from './page/Home/Header/Header'
import Home from './page/Home/Home/Home'
import Login from './page/Login/Login/Login'
import ManageAllOrder from './page/ManageAllOrder/ManageAllOrder'
import MyOrder from './page/MyOrder/MyOrder'
import PrivateRoute from './PrivateRoute/PrivateRoute'
import NotFound from './NotFound/NotFound'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Header></Header>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path="/home">
              <Header></Header>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path="/login">
              <Header></Header>
              <Login></Login>
            </Route>
            <PrivateRoute path="/allBooking">
              <Header></Header>
              <AllBooking></AllBooking>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path="/myBooking">
              <Header></Header>
              <MyOrder></MyOrder>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path="/addcamping">
              <Header></Header>
              <AddCamping></AddCamping>
              <Footer></Footer>
            </PrivateRoute>
            <Route path="/camping">
              <Header></Header>
              <Camping></Camping>
              <Footer></Footer>
            </Route>
            <PrivateRoute path="/camp/:id">
              <Header></Header>
              <AllBooking></AllBooking>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path="/manageAllOrder">
              <Header></Header>
              <ManageAllOrder></ManageAllOrder>
              <Footer></Footer>
            </PrivateRoute>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  )
}

export default App
