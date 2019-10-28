import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={12}
        initialCenter={{ lat: this.props.lat, lng: this.props.lng }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAq06l5RUVfib62IYRQacLc-KAy0XIWAVs'
})(MapContainer);
