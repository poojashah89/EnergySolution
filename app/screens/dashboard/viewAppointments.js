import React from 'react';
import * as Screens from '../../screens/index';

import {
  ScrollView,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {
  RkButton,
  RkText,
  RkStyleSheet,
  RkTheme
} from 'react-native-ui-kitten';
import {
  RkSwitch,
  FindFriends,
  GradientButton
} from '../../components';
import {FontAwesome} from '../../assets/icons';

export class ViewAppointments extends React.Component {
  static navigationOptions = {
    title: 'View Appointments'.toUpperCase()
  };

  constructor(props) {
    super(props);

    this.state = {
      sendPush: true,
      shouldRefresh: false,
      twitterEnabled: true,
      googleEnabled: false,
      facebookEnabled: true
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <View style={[styles.row, styles.heading]}>
            <RkText rkType='primary header6'>APPOINTMENT NO.                SCHEDULED DATE</RkText>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.rowButton}>
              <RkText rkType='header6'>1                                                         12/12/2017</RkText>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.rowButton}>
              <RkText rkType='header6'>2                                                         12/11/2017</RkText>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
          <TouchableOpacity style={styles.rowButton}>
              <RkText rkType='header6'>3                                                         12/21/2017</RkText>

              </TouchableOpacity>
          </View>
          <View style={styles.row}>
          <TouchableOpacity style={styles.rowButton}>
              <RkText rkType='header6'>4                                                         12/22/2017</RkText>
              </TouchableOpacity>
          </View>
        </View>

        <View style={styles.content}>
          <View>
            <GradientButton style={styles.save} rkType='large' text='Back' onPress={() => {
              this.props.navigation.goBack()
            }}/>
          </View>
        </View>

      </ScrollView>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  container: {
    backgroundColor: theme.colors.screen.base,
  },
  header: {
    paddingVertical: 25
  },
  section: {
    marginVertical: 25
  },
  heading: {
    paddingBottom: 12.5
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 17.5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border.base,
    alignItems: 'center'
  },
  rowButton: {
    flex: 1,
    paddingVertical: 24
  },
  switch: {
    marginVertical: 14
  },
}));
