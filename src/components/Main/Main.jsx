import { Component } from 'react'

export class Main extends Component {
  render() {
    const actors = this.props.actors
    return (
      <>
      <h3>Main info about 'Gladiator'</h3>
      <p>Betrayed by the envious Prince Commodus after the emperor's death, the loyal Roman general Maximus loses his family and is sold into slavery. Forced to fight as a gladiator, Maximus rises through the ranks of the Colosseum, gaining the love of the people to exact revenge on the tyrant and restore freedom to Rome.</p>
      <h3>Actors</h3>
      <ol>
        {actors.map((actor) => {
              return (
                <li key={actor}>{actor}</li>
              )
        })}
      </ol>

      <h3>General Information</h3>
      <ul>
        <li>Release Year: 2000</li>
        <li>Country: United States, United Kingdom</li>
        <li>Studios: DreamWorks Pictures, Universal Pictures, Scott Free Productions</li>
        <li>Genre: Historical drama, Action, Adventure</li>
      </ul>
      </>
    )
  }
}

export default Main
