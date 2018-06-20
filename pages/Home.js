import React from 'react'
import { Text, View } from 'react-native'
import Beranda from '../components/Beranda'

export default class HomePage extends React.Component {

  static navigationOptions = {
    title: 'News App - Beranda'
  }

  render() {
      return <Beranda navigate={ this.props.navigation }> </Beranda>
  }
}
