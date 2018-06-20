import React from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import { Text, Button, Card, Divider } from 'react-native-elements';
import moment from 'moment';

export default class Article extends React.Component {
  render() {
    const { article, navigate} = this.props
    const { footer, judul } = styles;
    const waktu = moment(publishedAt || moment.now()).fromNow();
    const defaultImg = 'https://ieltsonlinetests.com/sites/default/files/News-Image.jpg';
    const {
      title,
      description,
      publishedAt,
      source,
      urlToImage,
      url
    } = this.props.article;

    return (
      <TouchableNativeFeedback
        useForeground
        onPress={() => navigate("ArticlePage", {items: article})}>

        <Card
          featuredTitle={title}
          featuredTitleStyle={judul}
          image={{
            uri: urlToImage || defaultImg
          }}>

          <Divider style={{ backgroundColor: '#dfe6e9' }} />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={footer}>{source.name.toUpperCase()}</Text>
            <Text style={footer}>{waktu}</Text>
          </View>

        </Card>

      </TouchableNativeFeedback>
    );
  }
}

const styles = {
  footer: {
    margin: 5,
    fontStyle: 'italic',
    color: '#b2bec3',
    fontSize: 10
  },
  judul: {
    marginHorizontal: 5,
    textShadowColor: '#00000f',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 3
  }
};
