import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <>
      <h3>Contact Details</h3>

      <div>
        <p>Studio Address (Universal Pictures):</p>
        <a href="#">100 Universal City Plaza, Universal City, CA 91608, United States</a>
      </div>

      <div>
        <p>Director's Email (Ridley Scott):</p>
        <a href="email:ridley.scott@scottfreeproductions.com">ridley.scott@scottfreeproductions.com</a>
      </div>

      <div>
        <p>Website Author's Phone:</p>
        <a href="tel:+15550192834">+1 (555) 019-2834</a>
      </div>
      </>
    )
  }
}

export default Footer