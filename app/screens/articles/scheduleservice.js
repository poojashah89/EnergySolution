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
import {Avatar} from '../../components';
import {SocialBar} from '../../components';
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
              <RkText style={styles.title} rkType='header4'>{this.data.header}</RkText>
              <RkText style={styles.title} rkType='header4'>Please Enter Details to Schedule energy Service Installation</RkText>
            </View>
          </View>
          <View rkCardContent>
            <View>
              <RkText rkType='secondary2 hintColor'>Name:                        sneha Kasetty  </RkText>
            </View>
          </View>
          <View rkCardContent>
            <View>
              <RkText rkType='secondary2 hintColor'>Address:                       San Jose CA  </RkText>
            </View>
          </View>
          <View rkCardContent>
            <View>
              <RkText rkType='secondary2 hintColor'>Zip Code:                        95128  </RkText>
            </View>
          </View>
          <View rkCardContent>
            <View>
              <RkText rkType='secondary2 hintColor'>Phone:                        XXXXXXXXXXX  </RkText>
            </View>
          </View>
          <View rkCardContent>
            <View>
              <RkText rkType='secondary2 hintColor'>Enter Date:                        11/21/2017  </RkText>
            </View>
          </View>
          <View rkCardContent>
            <View>
              <RkText rkType='secondary2 hintColor'>Enter Time:                        04:21  </RkText>
            </View>
          </View>
          <RkButton rkType='accent'>
             Schedule
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
