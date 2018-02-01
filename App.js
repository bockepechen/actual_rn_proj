/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
let popularIcon = require('./res/images/ic_polular.png');
let trendingIcon = require('./res/images/ic_trending.png');
let favoriteIcon = require('./res/images/ic_favorite.png');
let myIcon = require('./res/images/ic_my.png');
const staticProp = {
  popular: 'Popular',
  trending: 'Trending',
  favorite: 'Favorite',
  my: 'My'
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: staticProp.popular
    };
  }
  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item 
          selected={this.state.selectedTab === staticProp.popular}
          selectedTitleStyle={{color:'#436EEE'}}
          title={staticProp.popular}
          renderIcon={() => <Image style={styles.tabIcon} source={popularIcon} />}
          renderSelectedIcon={() => <Image style={[styles.tabIcon,{tintColor:'#436EEE'}]} source={popularIcon} />}
          onPress={() => this.setState({selectedTab:staticProp.popular})} >
          <View style={{flex:1, justifyContent:'center'}}><Text>Popular</Text></View>
        </TabNavigator.Item>
        <TabNavigator.Item 
          selected={this.state.selectedTab === staticProp.trending}
          selectedTitleStyle={{color:'#436EEE'}}
          title={staticProp.trending}
          renderIcon={() => <Image style={styles.tabIcon} source={trendingIcon} />}
          renderSelectedIcon={() => <Image style={[styles.tabIcon,{tintColor:'#436EEE'}]} source={trendingIcon} />}
          onPress={() => this.setState({selectedTab:staticProp.trending})} >
          <View style={{flex:1, justifyContent:'center'}}><Text>Trending</Text></View>
        </TabNavigator.Item>
        <TabNavigator.Item 
          selected={this.state.selectedTab === staticProp.favorite}
          selectedTitleStyle={{color:'#436EEE'}}
          title={staticProp.favorite}
          renderIcon={() => <Image style={styles.tabIcon} source={favoriteIcon} />}
          renderSelectedIcon={() => <Image style={[styles.tabIcon,{tintColor:'#436EEE'}]} source={favoriteIcon} />}
          onPress={() => this.setState({selectedTab:staticProp.favorite})} >
          <View style={{flex:1, justifyContent:'center'}}><Text>Favorite</Text></View>
        </TabNavigator.Item>
        <TabNavigator.Item 
          selected={this.state.selectedTab === staticProp.my}
          selectedTitleStyle={{color:'#436EEE'}}
          title={staticProp.my}
          renderIcon={() => <Image style={styles.tabIcon} source={myIcon} />}
          renderSelectedIcon={() => <Image style={[styles.tabIcon,{tintColor:'#436EEE'}]} source={myIcon} />}
          onPress={() => this.setState({selectedTab:staticProp.my})} >
          <View style={{flex:1, justifyContent:'center'}}><Text>My</Text></View>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  page: {
    flex: 1,
    backgroundColor: 'red',
  },
  tabIcon: {
    width: 22,
    height: 22
  }
});
