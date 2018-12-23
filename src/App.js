import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

class App extends Component {

  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {    
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Matrix",
            poster: "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L.jpg"
          },
          {
            title: "The Shawshank Redemption",
            poster: "https://t1.daumcdn.net/cfile/tistory/214B5B4658266BBE28"
          },
          {
            title: "The Hitman's Bodyguard",
            poster: "https://upload.wikimedia.org/wikipedia/ko/thumb/4/48/%ED%82%AC%EB%9F%AC%EC%9D%98_%EB%B3%B4%EB%94%94%EA%B0%80%EB%93%9C.jpg/250px-%ED%82%AC%EB%9F%AC%EC%9D%98_%EB%B3%B4%EB%94%94%EA%B0%80%EB%93%9C.jpg"
          },
          {
            title: "Edge of Tomorrow",
            poster: "https://images-na.ssl-images-amazon.com/images/G/01/digital/video/hero/Movies/2014/EdgeofTomorrow_4926700_883316896709._V344884602_RI_SX940_.jpg"
          },
          {
            title: "Snowpiercer",
            poster: "https://pmcdeadline2.files.wordpress.com/2014/07/snowpiercer-train-scene.png?w=446&h=299&crop=1"
          }
        ]
      })
    }, 3000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render() {
    console.log('render')
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}  
      </div>
    );
  }
}

export default App;
