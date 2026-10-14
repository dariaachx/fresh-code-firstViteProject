import { Component } from 'react'

export class Header extends Component {
  render() {
    console.log(this.props)
    const count = this.props.count
    const movies = this.props.movies
    return (
      <>
      <h2>Header</h2>
      <p>{count}</p>
      {/* <p>{count === 0 ? 'Ok' : 'No'}</p> */}
      <ul>
        {movies.map((movie) => {
            return (
                <li key={movie}>{movie}</li>
            )
        })}
      </ul>
      </>
    )
  }
}

export default Header