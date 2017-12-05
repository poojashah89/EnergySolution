import React from 'react';

import {CategoryMenu} from './categoryMenu';
import * as Routes from '../../config/navigation/routesBuilder';
import {
  ScrollView,
  FlatList,
  Image,
  View,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  StyleSheet
} from 'react-native';

import {
  RkCard,
  RkText,
  RkButton,
  RkStyleSheet,
  RkTheme
} from 'react-native-ui-kitten';

import {GradientButton} from '../../components/';
import {Walkthrough} from '../../components/walkthrough';
import {Walkthrough1} from '../walkthroughs/walkthrough1';
import {Walkthrough2} from '../walkthroughs/walkthrough2';
import {LoginV2} from '../login/login2';
//import {PaginationIndicator} from '../../components';
import {Articles4} from '../articles/articles4';
import {Upgrade} from '../theme/upgrade';
import {Cart} from '../other/cart';
import {data} from '../../data';

let moment = require('moment');

import {FontAwesome} from '../../assets/icons';
import {
  ProgressChart,
  DoughnutChart,
  AreaChart,
  AreaSmoothedChart,
  Avatar,
  SocialBar,
  PaginationIndicator,
  RkSwitch,
  FindFriends
} from '../../components/';


import {FontIcons} from '../../assets/icons';
const paddingValue = 8;

import {NavigationActions} from 'react-navigation';

export class LoginMenu extends React.Component {
  static navigationOptions = {
    title: 'Login'.toUpperCase()
  };
  render() {
    return (
     //<CategoryMenu navigation={this.props.navigation} items={Routes.LoginRoutes}/>
     this.props.navigation.navigate('LoginV2')
    )
  }
}

export class NavigationMenu extends React.Component {
  static navigationOptions = {
    title: 'Navigation'.toUpperCase()
  };
  render() {
    return (
      <CategoryMenu navigation={this.props.navigation} items={Routes.NavigationRoutes}/>
    )
  }
}


export class SocialMenu extends React.Component {
  static navigationOptions = {
    title: 'Social'.toUpperCase()
  };
  render() {
    return (
      <CategoryMenu navigation={this.props.navigation} items={Routes.SocialRoutes}/>
    )
  }
}

// This is the current energy service

export class ArticleMenu extends React.Component {
  /*static navigationOptions = {
    title: 'Articles'.toUpperCase()
  };
  render() {
    return (
      <CategoryMenu navigation={this.props.navigation} items={Routes.ArticleRoutes}/>
    )
  }
  Article 4
  */

  static navigationOptions = {
    title: 'Current Energy Solution'.toUpperCase()
  };

  constructor(props) {
    super(props);
    this.data = data.getArticles('fact');
    this.renderItem = this._renderItem.bind(this);
  }

  _keyExtractor(post) {
    return post.id;
  }

  _renderItem(info) {
    return (
      <TouchableOpacity
        delayPressIn={70}
        activeOpacity={0.8}
        onPress={() => this.props.navigation.navigate('ScheduleService', {id: info.item.id})}>
        <RkCard rkType='horizontal' style={styles.card}>
          <Image rkCardImg source={info.item.photo}/>

          <View rkCardContent>
            <RkText numberOfLines={1} rkType='header6'>{info.item.header}</RkText>
            <RkText rkType='secondary6 hintColor'></RkText>
            <RkButton style={{marginLeft: 85, width:150}} onPress={() => this.props.navigation.navigate('ScheduleService',{id: info.item.id})}>Uninstalled</RkButton>
            <RkText style={styles.post} numberOfLines={2} rkType='secondary1'></RkText>
          </View>
          <View rkCardFooter>
            <SocialBar rkType='space' showLabel={true}/>
          </View >
        </RkCard>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.data}
          renderItem={this.renderItem}
          keyExtractor={this._keyExtractor}
          style={styles.container}/>
      </View>
    )
  }
}

export class RentServiceMenu extends React.Component {
  static navigationOptions = {
    title: 'Rent Service Menu'.toUpperCase()
  };

  constructor(props) {
    super(props);

    this.data = data.getArticles('fact');
    this.renderItem = this._renderItem.bind(this);
  }

  _keyExtractor(post, index) {
    return post.id;
  }

  _renderItem(info) {
    return (
      <TouchableOpacity
        delayPressIn={70}
        activeOpacity={0.8}
        onPress={() => this.props.navigation.navigate('RentService', {id: info.item.id})}>
        <RkCard rkType='backImg'>
          <Image rkCardImg source={info.item.photo}/>
          <View rkCardImgOverlay rkCardContent style={styles.overlay}>
            <RkText rkType='header6'>{info.item.header}</RkText>

          </View>
        </RkCard>
      </TouchableOpacity>
    )
  }

  render() {
    let info = {};
    info.item = this.data[0];
    return (
      <FlatList data={this.data}
                renderItem={this.renderItem}
                keyExtractor={this._keyExtractor}
                style={styles.root}/>

    )
  }
}

export class MessagingMenu extends React.Component {
  static navigationOptions = {
    title: 'Messaging'.toUpperCase()
  };
  render() {
    return (
      <CategoryMenu navigation={this.props.navigation} items={Routes.MessagingRoutes}/>
    )
  }
}

export class AdminDashboardMenu extends React.Component {
  static navigationOptions = {
    title: 'Dashboards'.toUpperCase()
  };
  render() {
    return (
      <CategoryMenu navigation={this.props.navigation} items={Routes.DashboardRoutes}/>
    )
  }


    /*static navigationOptions = {
      title: 'Admin Dashboard'.toUpperCase()
    };

    constructor(props) {
      super(props);
      console.log("inside admin dashboard");
      this.data = {
        statItems: [
          {
            name: 'Profile',
            value: 'Profile',
            //icon: 'github',
            background: RkTheme.current.colors.dashboard.stars
          },
          {
            name: 'Upgrade',
            value: '2,256',
            //icon: 'twitter',
            background: RkTheme.current.colors.dashboard.tweets
          },
          {
            name: 'Rent',
            value: '1,124',
            //icon: 'facebook',
            background: RkTheme.current.colors.dashboard.likes
          },
        ]
      };
    }

    renderStatItem(item) {
      return (
        <View style={[styles.statItemContainer, {backgroundColor: item.background}]} key={item.name}>
          <View>
            //<RkText rkType='header6' style={styles.statItemValue}>{item.value}</RkText>
            <RkText rkType='secondary7' style={styles.statItemName}>{item.name}</RkText>
          </View>
          //<RkText rkType='awesome hero' style={styles.statItemIcon}>{FontAwesome[item.icon]}</RkText>
        </View>
      )
    }

    render() {
      let chartBlockStyles = [styles.chartBlock, {backgroundColor: RkTheme.current.colors.control.background}];
      return (
        <ScrollView style={styles.screen}>
          <View style={styles.statItems}>
            {this.data.statItems.map(item => this.renderStatItem(item))}
          </View>
          <View style={chartBlockStyles}>
            <DoughnutChart/>
          </View>
          <View style={chartBlockStyles}>
            <AreaChart/>
          </View>
          <View style={chartBlockStyles}>
            <ProgressChart/>
          </View>
          <View style={chartBlockStyles}>
            <AreaSmoothedChart/>
          </View>
        </ScrollView>
      )
    }*/
}
export class DashboardMenu extends React.Component {
  /*static navigationOptions = {
    title: 'Dashboards'.toUpperCase()
  };
  render() {
    return (
      <CategoryMenu navigation={this.props.navigation} items={Routes.DashboardRoutes}/>
    )
  }
  Dashbaord
  */
  static navigationOptions = {
    title: 'Customer Dashboard'.toUpperCase()
  };

  constructor(props) {
    super(props);
    this.data = {
      statItems: [
        {
          name: 'Stars',
          value: '4,512',
          icon: 'github',
          background: RkTheme.current.colors.dashboard.stars
        },
        {
          name: 'Tweets',
          value: '2,256',
          icon: 'twitter',
          background: RkTheme.current.colors.dashboard.tweets
        },
        {
          name: 'Likes',
          value: '1,124',
          icon: 'facebook',
          background: RkTheme.current.colors.dashboard.likes
        },
      ]
    };
  }

  renderStatItem(item) {
    return (
      <View style={[styles.statItemContainer, {backgroundColor: RkTheme.current.colors.control.background}]} key={item.name}>
        <View>
          <RkText rkType='header6' style={styles.statItemValue}>{item.value}</RkText>
          <RkText rkType='secondary7' style={styles.statItemName}>{item.name}</RkText>
        </View>
        <RkText rkType='awesome hero' style={styles.statItemIcon}>{FontAwesome[item.icon]}</RkText>
      </View>
    )
  }

  _calculateItemSize() {
    let {height, width} = Dimensions.get('window');
    return (width - paddingValue * 6) / 2;
  }

  render() {
      let size = this._calculateItemSize();
      let chartBlockStyles = [styles.chartBlock, {backgroundColor: RkTheme.current.colors.control.background}];
      return (
        <ScrollView style={styles.root} contentContainerStyle={styles.rootContainer}>
          <RkButton rkType='square shadow' style={{width: size, height: size}}
            onPress={() => {
              this.props.navigation.navigate('Upgrade')
            }}>
            <RkText style={styles.icon} rkType='primary moon menuIcon'>{FontIcons.theme}
            </RkText>
            <RkText rkType='h3'>Upgrade VIP</RkText>
          </RkButton>

          <RkButton rkType='square shadow' style={{width: size, height: size}}
            onPress={() => {
              this.props.navigation.navigate('Articles4')
            }}>
            <RkText style={styles.icon} rkType='primary moon menuIcon'>{FontIcons.article}
            </RkText>
            <RkText rkType='h3'>View Services</RkText>
          </RkButton>

          <RkButton rkType='square shadow' style={{width: size, height: size}}
            onPress={() => {
              this.props.navigation.navigate('Cart')
            }}>
            <RkText style={styles.icon} rkType='primary moon menuIcon'>{FontIcons.article}
            </RkText>
            <RkText rkType='h3'>Cart</RkText>
          </RkButton>

          <RkButton rkType='square shadow' style={{width: size, height: size}}
            onPress={() => {
              this.props.navigation.navigate('Cart')
            }}>
            <RkText style={styles.icon} rkType='primary moon menuIcon'>{FontIcons.dashboard}
            </RkText>
            <RkText rkType='h3'>Service Usage</RkText>
          </RkButton>
          <View style={chartBlockStyles}>
              <DoughnutChart/>
          </View>
          <View style={chartBlockStyles}>
              <AreaChart/>
          </View>
          <View style={chartBlockStyles}>
              <AreaSmoothedChart/>
          </View>
        </ScrollView>
    )
  }
}
export class WalkthroughMenu extends React.Component {
  /*static navigationOptions = {
    title: 'Walkthrough'.toUpperCase()
  };
  render() {
    return (
    <CategoryMenu navigation={this.props.navigation} items={Routes.WalkthroughRoutes}/>

    )
  }
  Walkthrough
  */

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {index: 0};
  }

  changeIndex(index) {
    this.setState({index})
  }

  render() {
    return (
      <View style={styles.screen}>
        <Walkthrough onChanged={(index) => this.changeIndex(index)}>
          <Walkthrough1/>
          <Walkthrough2/>
        </Walkthrough>
        <PaginationIndicator length={2} current={this.state.index}/>
        <GradientButton
          rkType='large'
          style={styles.button}
          text="GET STARTED"
          onPress={() => {
            //this.props.navigation.goBack()
            //this.props.navigation.navigate('Dashboard')
            StatusBar.setHidden(false, 'slide');
            let toHome = NavigationActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({routeName: 'Dashboard'})]
            });
            this.props.navigation.dispatch(toHome)
          }}/>
      </View>
    )
  }
}
export class EcommerceMenu extends React.Component {
  static navigationOptions = {
    title: 'Ecommerce'.toUpperCase()
  };
  render() {
    return (
      <CategoryMenu navigation={this.props.navigation} items={Routes.EcommerceRoutes}/>
    )
  }
}
export class OtherMenu extends React.Component {
  /*static navigationOptions = {
    title: 'Other'.toUpperCase()
  };
  render() {
    return (
      <CategoryMenu navigation={this.props.navigation} items={Routes.OtherRoutes}/>
    )
  }Settings.js*/

  static navigationOptions = {
    title: 'Settings'.toUpperCase()
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
            <RkText rkType='primary header6'>{"PROFILE SETTINGS"}</RkText>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.rowButton}>
              <RkText rkType='header6'>{"Edit Profile"}</RkText>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.rowButton}>
              <RkText rkType='header6'>{"Change Password"}</RkText>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <RkText rkType='header6'>{"Send Push Notifications"}</RkText>
            <RkSwitch style={styles.switch}
                      value={this.state.sendPush}
                      name="Push"
                      onValueChange={(sendPush) => this.setState({sendPush})}/>
          </View>
          <View style={styles.row}>
            <RkText rkType='header6'>{"Refresh Automatically"}</RkText>
            <RkSwitch style={styles.switch}
                      value={this.state.shouldRefresh}
                      name="Refresh"
                      onValueChange={(shouldRefresh) => this.setState({shouldRefresh})}/>
          </View>
          </View>
              <View style={styles.section}>
                <View style={[styles.row, styles.heading]}>
                  <RkText rkType='primary header6'>{"SUPPORT"}</RkText>
                </View>
                <View style={styles.row}>
                  <TouchableOpacity style={styles.rowButton}>
                    <RkText rkType='header6'>{"Help"}</RkText>
                  </TouchableOpacity>
                </View>
                <View style={styles.row}>
                  <TouchableOpacity style={styles.rowButton}>
                    <RkText rkType='header6'>{"Privacy Policy"}</RkText>
                  </TouchableOpacity>
                </View>
                <View style={styles.row}>
                  <TouchableOpacity style={styles.rowButton}>
                    <RkText rkType='header6'>{"Terms & Conditions"}</RkText>
                  </TouchableOpacity>
                </View>
                <View style={styles.row}>
                  <TouchableOpacity style={styles.rowButton}>
                    <RkText rkType='header6'>{"Logout"}</RkText>
                  </TouchableOpacity>
                </View>
            </View>
      </ScrollView>
    )
  }
}



let styles = RkStyleSheet.create(theme => ({

  rootContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },root: {
    backgroundColor: theme.colors.screen.scroll,
    padding: paddingValue,
  },screen: {
    backgroundColor: theme.colors.screen.scroll,
    paddingHorizontal: 15,
    paddingVertical: 28,
    flex: 1,
  },
  menuButtons: {
    marginLeft: 120,
    width:150,
    padding: 15,
    borderColor: theme.colors.border.solid,
    flex: 1,
    paddingVertical: 24
  },
  icon: {
    marginBottom: 16
  },
  text: {
    flexDirection: 'row'
  },wrapper: {
    flex: 1,
  },
  button: {
    marginTop: 25,
    marginHorizontal: 16,
  },
  root: {
    backgroundColor: theme.colors.screen.base
  },
  title: {
    marginBottom: 5
  },

  statItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  statItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  statItemIcon: {
    alignSelf: 'center',
    marginLeft: 10,
    color: 'white',
  },
  statItemValue: {
    color: 'white',
  },
  statItemName: {
    color: 'white',
  },
  chartBlock: {
    padding: 15,
    marginBottom: 15,
    justifyContent: 'center'
  },container: {
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
