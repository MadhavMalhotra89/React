import React from 'react';

class GoogleMap extends React.Component {

    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    componentDidMount() {
        new window.google.maps.Map(this.ref.current, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        return (
            <div ref={this.ref}/>
        );
    }
}

export default GoogleMap;