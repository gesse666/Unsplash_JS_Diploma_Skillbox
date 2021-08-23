import React from 'react'
import PropTypes from 'prop-types'

import { handleLogin } from "../actions/UserActions";
import { GetToken } from '../actions/AuthAction';
import { getPhotos } from '../actions/PageActions';

export class User extends React.Component {
 async componentDidMount() {
    await this.props.GetToken()
    await this.props.getPhotos(this.props.token)
    
  }

  renderTemplate = () => {
    const { name, error, isFetching, photos} = this.props

    if (photos){
      return <div className="ib user">{photos[0].id}
      
      </div>}
    else 
    return <p>загрузка</p>

    // if (error) {
    //   return <p>Во время запроса произошла ошибка, обновите страницу</p>
    // }

    // if (isFetching) {
    //   return <p>Загружаю...</p>
    // }

    // if (name) {
    //   return <p>Привет, {name}!</p>
    // } else {
      // return (
      //   <button className="btn" onClick={this.props.handleLogin}>
      //     Войти
      //   </button>
        
      // )


    // }
  }



  render() {
    const { name, error, isFetching, photos} = this.props
    debugger;
    if (!photos){
      return <p>загрузка</p>}
    else {
    // return <div>{photos[0].id}</div>}
        return this.props.photos.map(photo => (
      <div key={photo.id} >
        <p> name={photo.alt_description}</p>
        <img src={photo.urls.small}></img>
      </div>))}

  }
}


