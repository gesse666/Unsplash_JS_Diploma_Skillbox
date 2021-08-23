import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { User } from '../components/User'
import { Page } from '../components/Page'
import {Home } from '../components/Home'
// import { getPhotos } from '../actions/PageActions'
import { handleLogin } from '../actions/UserActions'
import {fetchCode, GetToken, getPhotos} from '../actions/AuthAction'


class App extends Component {
  render() {
    const { user, page, auth, getPhotosAction, handleLoginAction, fetchCode, GetToken, getPhotos } = this.props
    return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/auth">Auth</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/auth">
          <User
          token={user.token}
          photos={user.photos}
          getPhotos={getPhotos}
          GetToken={GetToken}
          name={user.name}
          error={user.error}
          isFetching={user.isFetching}
          handleLogin={handleLoginAction}
        />
          </Route>
          <Route path="/users">
          <User
          name={user.name}
          error={user.error}
          isFetching={user.isFetching}
          handleLogin={handleLoginAction}
        />
          </Route>
          <Route path="/">
          <Home
          fetchCode={fetchCode}
          code={auth.code}
        />
          </Route>
        </Switch>
      </div>
    </Router>
      // <div className="app">
        // <Page
        //   photos={page.photos}
        //   year={page.year}
        //   isFetching={page.isFetching}
        //   error={page.error}
        //   getPhotos={getPhotosAction}
        // />
        // <User
        //   name={user.name}
        //   error={user.error}
        //   isFetching={user.isFetching}
        //   handleLogin={handleLoginAction}
        // />
      // </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    user: store.auth,
    page: store.page,
    auth: store.auth,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPhotosAction: year => dispatch(getPhotos(year)),
    handleLoginAction: () => dispatch(handleLogin()),
    fetchCode: (url) => dispatch(fetchCode(url)),
    GetToken:() => dispatch(GetToken()),
    getPhotos: token  => dispatch(getPhotos(token))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
