import React, {Component} from 'react'
import { View, TouchableNativeFeedback, Dimensions } from 'react-native';
import { Text, Button, Card, Divider } from 'react-native-elements';
import moment from 'moment';
import { connect } from 'react-redux'

class ArticlePage extends React.Component {

  render() {
    const article = this.props.redux.news.filter(news => news.title === this.props.article.title)
    const { footer, judul } = styles;
    const {height} = Dimensions.get('window')
    const waktu = moment(article[0].publishedAt || moment.now()).fromNow();
    const defaultImg = 'https://ieltsonlinetests.com/sites/default/files/News-Image.jpg';

    return(
      <View style={{flex:1, alignItems: 'center'}}>
      <Card title={article[0].title.toUpperCase()}
        height={height}
        image={{
          uri: article[0].urlToImage || defaultImg
        }}>

        <Text style={{ marginBottom: 10 }}>
          {article[0].description || 'Read More..'}
        </Text>

        <View style={styles.viewFooter}>
          <Text style={footer}>{article[0].source.name.toUpperCase()}</Text>
          <Text style={footer}>{waktu}</Text>
        </View>

      </Card>
      </View>
    );
  }
}

const styles = {
  viewFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {
    margin: 5,
    fontStyle: 'italic',
    color: '#b2bec3',
    fontSize: 10
  },
  judul: {
    marginHorizontal: 5,
    fontSize: 20
  }
};

const mapStateToProps = (state) => {
  return {
    redux: state
  }
}

export default connect(mapStateToProps)(ArticlePage)
