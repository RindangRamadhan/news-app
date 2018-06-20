import React, {Component} from 'react'
import { View, TouchableNativeFeedback, Dimensions } from 'react-native';
import { Text, Button, Card, Divider } from 'react-native-elements';
import moment from 'moment';

export default class ArticlePage extends React.Component {
  constructor(props){
      super(props)
  }

  render() {
    const article = this.props.article
    const { footer, judul } = styles;
    const {height} = Dimensions.get('window')
    const waktu = moment(article.publishedAt || moment.now()).fromNow();
    const defaultImg = 'https://ieltsonlinetests.com/sites/default/files/News-Image.jpg';

    return(
      <View style={{flex:1, alignItems: 'center'}}>
      <Card title={article.title.toUpperCase()}
        height={height}
        image={{
          uri: article.urlToImage || defaultImg
        }}>

        <Text style={{ marginBottom: 10 }}>
          {article.description || 'Read More..'}
        </Text>

        <View style={styles.viewFooter}>
          <Text style={footer}>{article.source.name.toUpperCase()}</Text>
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
