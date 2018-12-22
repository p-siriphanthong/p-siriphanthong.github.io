import React, { Component } from 'react'

// Components
import Info from './info'
import Working from './working'

class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        <Info educations={this.props.educations} />
        <Working workings={this.props.workings} />
      </React.Fragment>
    )
  }
}

export default Profile
