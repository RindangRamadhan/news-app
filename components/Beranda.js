import React, { Component } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import axios from 'axios'
import Article from '../components/News'

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      refresPage: true
    }
  }

  componentDidMount() {
    this.getNews();
  }

  getNews() {
    const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=14a294ac0b1a487486c876ac93c4bd9c"

    axios.get(url)
      .then(resp => {
          this.setState({ articles : resp.data.articles, refresPage : false })
      })
      .catch(err => {
          console.log(err)
          this.setState({ refresPage: false })
      })
  }

  handleRefresh() {
    this.setState({ refresPage: true }, () => this.getNews());
  }

  render() {
		const {articles, refresPage} = this.state
		const {navigate} = this.props.navigate

    return (
      <FlatList
        data={ articles }
        renderItem={({ item }) => <Article article={item} navigate={navigate} />}
        keyExtractor={(item,index) => index.toString()}
        refreshing={ refresPage }
        onRefresh={ this.handleRefresh.bind(this) }
      />
    );
  }
}
