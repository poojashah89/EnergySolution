import React from 'react';
import {
  ScrollView,
  Image,
  View,
  TouchableOpacity
} from 'react-native';
import {
  RkCard,
  RkButton,
  RkText,
  RkStyleSheet
} from 'react-native-ui-kitten';
import {data} from '../../data';
import {
  Avatar,
  SocialBar,
  GradientButton} from '../../components';
let moment = require('moment');


export class RentService extends React.Component {
  static navigationOptions = {
    title: 'Rent Service View'.toUpperCase()
  };

  constructor(props) {
    super(props);
    let {params} = this.props.navigation.state;
    let id = params ? params.id : 1;
    this.data = data.getArticle(id);
  }

  render() {
    return (
      <ScrollView style={styles.root}>
        <RkCard rkType='article'>
          <Image rkCardImg source={this.data.photo}/>
          <View rkCardHeader>
            <View>
              <RkText style={styles.title} rkType='header4'>{this.data.header}</RkText>
              <RkText rkType='primary3 bigLine'>{this.data.text}</RkText>
            </View>
          </View>
          <View rkCardContent>
            <View>
              <RkText rkType='secondary2 hintColor'>Square Feet                     24.56    </RkText>
            </View>
          </View>
          <View rkCardContent>
            <View>
              <RkText rkType='secondary2 hintColor'>Duration                          1 year    </RkText>
            </View>
          </View>
          <View rkCardContent>
            <View>
              <RkText rkType='secondary2 hintColor'>Warranty                            Yes    </RkText>
            </View>
          </View>
          <View rkCardContent>
            <View>
              <RkText rkType='secondary2 hintColor'>Price                             1000 $    </RkText>
            </View>
          </View>
          <RkButton rkType='accent'>
             Add to Cart
          </RkButton>

          </RkCard>
      </ScrollView>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base
  },
  title: {
    marginBottom: 5
  },
}));
