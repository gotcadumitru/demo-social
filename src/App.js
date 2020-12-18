import './App.css';
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import MessagesContainer from './components/Messages/MessagesContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import s from './App'
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader';
import store from './redux/reduxStore';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


class App extends Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

    return (

      <div className="app-wrapper">
        <HeaderContainer className={s.header} />
        <NavbarContainer className={s.navbar} />
        <div className="app__content">
          <Route path="/messages" render={() => <MessagesContainer />} />
          <Route path="/profile/:userID?" render={() => <ProfileContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return ({
    initialized: state.app.initialized,
  })
}
let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }),
)(App)

let MyProjectApp = (props) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <AppContainer />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  )
}
export default MyProjectApp
