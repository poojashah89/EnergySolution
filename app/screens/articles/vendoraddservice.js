import React from 'react';
import * as Screens from '../../screens/index';
import {VendorAddServiceSuccess} from './vendoraddservicesuccess';
import {
  ScrollView,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {
  RkButton,
  RkText,
  RkTextInput,
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
export class VendorAddService extends React.Component {
  static navigationOptions = {
    title: 'Add Service'.toUpperCase()
  };

  constructor(props) {
    super(props);
    console.log("In Vendor Add");
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
      <View style={styles.save}>
        <View>
          <RkTextInput rkType='rounded' placeholder='Service name'/>
          <RkTextInput rkType='rounded' placeholder='Service Details'/>
          <RkTextInput rkType='rounded' placeholder='Price'/>
          <GradientButton style={styles.save} rkType='large' text='ADD' onPress = {
            () =>   this.props.navigation.navigate('VendorAddServiceSuccess')}/>

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
  save: {
    marginVertical: 20
  },
}));
