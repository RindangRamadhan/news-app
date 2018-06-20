import React from 'react'
import Deskripsi from '../components/DeskripsiBerita'

export default class ArticlePage extends React.Component {

  static navigationOptions = {
    title: 'News App - Deskripsi Berita'
  }

  constructor(props) {
    super(props)
  }

  render() {
      return <Deskripsi article={ this.props.navigation.getParam('items') }> </Deskripsi>
  }
}
