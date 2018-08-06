import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class FlexDirectionBasics extends Component {
  render() {
    return (
      // Try setting `flexDirection` to 'column'/'column-reverse'/'row'/'row-reverse'
      <View style={styles.container}>
        
        <View style={[{flex:1}, styles.elementsContainer]}>
          <View style={{flex: 2, backgroundColor: '#EE2C38'}} />
          <View style={{flex: 2, backgroundColor: '#FAA030'}} />
          <View style={{flex:1,  backgroundColor: '#32B76C'}} />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    marginTop: 48,
    flex: 1
  },
  headerStyle: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '100',
    marginBottom: 24
  },
  elementsContainer: {
    flex: 1,
    backgroundColor: '#ecf5fd',
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24
  }
}
