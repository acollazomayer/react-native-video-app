import React, {Component} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import Video from 'react-native-video';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
    }

    this.onLoadStart = this.onLoadStart.bind(this);
    this.onLoad = this.onLoad.bind(this);
  }

  onLoadStart() {
    this.setState({ loading: true });
  }

  onLoad() {
    this.setState({ loading: false });
  }

  render() {
    const { loading } = this.state;

    return (
      <View style={styles.container}>
        <Video
          source={{uri: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_20mb.mp4'}}
          style={styles.backgroundVideo}
          onLoadStart={this.onLoadStart}
          onLoad={this.onLoad}
        />
        { loading && <ActivityIndicator /> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
