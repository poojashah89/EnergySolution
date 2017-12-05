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
  RkTextInput,
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
              <RkText rkType='header4'>{this.data.text}</RkText>
            </View>
          </View>
          <View rkCardContent>
            <View>
              <RkText >Square Feet : </RkText>
              <RkTextInput rkType='rounded' placeholder='24.56'/>
            </View>
          </View>
          <View rkCardContent>
            <View>
              <RkText > Duration : </RkText>
              <RkTextInput rkType='rounded' placeholder='1 year'/>
            </View>
          </View>
          <View rkCardContent>
            <View>
              <RkText > Warranty : </RkText>
              <RkTextInput rkType='rounded' placeholder='Yes'/>
            </View>
          </View>
          <View rkCardContent>
            <View>
              <RkText > Price : </RkText>
              <RkTextInput rkType='rounded' placeholder='1000 $'/>
            </View>
          </View>
          <GradientButton style={styles.save} rkType='large' text='Add to Cart' onPress={() => {
            this.props.navigation.navigate('LeaseSuccess')
          }}/>

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
