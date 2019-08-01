import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followRequest: ['Camilo', 'Laura', 'Daniela', 'Chia'],
      following: ['Diego']
    };
  }

  doFollow = index => {
    const { followRequest, following } = this.state,
          followNew = followRequest.splice(index, 1);

    following.push(followNew);
    this.setState({
      followRequest,
      following
    });
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>You are following {this.state.following.length} friends</Text>
        <Button
          title='Go to Follow screen'
          onPress={() => {
            this.props.navigation.navigate('Follow', {
              followRequest: this.state.followRequest,
              following: this.state.following,
              doFollow: this.doFollow
            });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
