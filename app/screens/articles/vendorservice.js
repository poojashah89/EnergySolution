import React from 'react';
import * as Screens from '../../screens/index';
import {VendorDashboard} from '../dashboard/vendorDashboard';
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

/*
* Used in Vendor Dashboard View Service
*/
export class VendorService extends React.Component {
  static navigationOptions = {
    title: 'Your Services'.toUpperCase()
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
            <RkText rkType='primary header6'>ENERGY RESOURCES</RkText>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.rowButton}>
              <RkText rkType='header6'>HVAC</RkText>
              <RkButton style={{marginLeft: 85, width:150}} onPress={() => this.props.navigation.navigate('VendorDashboard')}>Remove</RkButton>

            </TouchableOpacity>
          </View>
        </View>
        <GradientButton style={styles.save} rkType='large' text='Add Service' onPress={() => {
          this.props.navigation.navigate('VendorDashboard')
        }}/>
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
