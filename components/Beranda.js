import React, { Component } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import axios from 'axios'
import Article from '../components/News'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setNews } from '../store/actions'

class Home extends React.Component {

  componentDidMount() {
    this.getNews();
  }

  getNews() {
    const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=14a294ac0b1a487486c876ac93c4bd9c"

    axios.get(url)
      .then(resp => {
          this.props.setNews(resp.data.articles)
      })
      .catch(err => {
          console.log(err)
      })
  }

  handleRefresh() {
    this.props.redux.refresPage = true
    this.getNews()
  }

  render() {
		const {news, refresPage} = this.props.redux
		const {navigate} = this.props.navigate

    return (
      <FlatList
        data={ news }
        renderItem={({ item }) => <Article article={item} navigate={navigate} />}
        keyExtractor={(item,index) => index.toString()}
        refreshing={refresPage}
        onRefresh={ this.handleRefresh.bind(this) }
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    redux: state
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({setNews}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
