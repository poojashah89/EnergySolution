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


export class ScheduleService extends React.Component {
  static navigationOptions = {
    title: 'Schedule Service View'.toUpperCase()
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
              <RkText style={styles.title} rkType='header6'>{this.data.header}</RkText>
              <RkText style={styles.title} rkType='header6'>Please Enter Details to Schedule energy Service Installation</RkText>
            </View>
          </View>
          <View rkCardContent>
            <View>
              <RkText rkType='header4'>Name:                        sneha Kasetty  </RkText>
            </View>
          </View>
          <View rkCardContent>
            <View>
              <RkText rkType='header4'>Address:                       San Jose CA  </RkText>
            </View>
          </View>
          <View rkCardContent>
            <View>
              <RkText rkType='header4'>Zip Code:                        95128  </RkText>
            </View>
          </View>
          <View rkCardContent>
            <View>
              <RkText rkType='header4'>Phone:                        XXXXXXXXXXX  </RkText>
            </View>
          </View>
          <View rkCardContent>
            <View>
              <RkText rkType='header4'>Enter Date:                        11/21/2017  </RkText>
            </View>
          </View>
          <View rkCardContent>
            <View>
              <RkText rkType='header4'>Enter Time:                        04:21  </RkText>
            </View>
          </View>
          <GradientButton style={styles.save} rkType='large' text='Schedule' onPress={() => {
            this.props.navigation.navigate('ScheduleSuccess')
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
