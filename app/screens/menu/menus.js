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
  StatusBar
} from 'react-native';
import {
  RkCard,
  RkText,
  RkStyleSheet,
  RkTheme
} from 'react-native-ui-kitten';

import {GradientButton} from '../../components/';
import {Walkthrough} from '../../components/walkthrough';
import {Walkthrough1} from '../walkthroughs/walkthrough1';
import {Walkthrough2} from '../walkthroughs/walkthrough2';
import {PaginationIndicator} from '../../components';

import {data} from '../../data';
import {Avatar} from '../../components';
import {SocialBar} from '../../components';
let moment = require('moment');

import {FontAwesome} from '../../assets/icons';
import {
  ProgressChart,
  DoughnutChart,
  AreaChart,
  AreaSmoothedChart
} from '../../components/';
import {NavigationActions} from 'react-navigation';

export class LoginMenu extends React.Component {
  static navigationOptions = {
    title: 'Login'.toUpperCase()
  };
  render() {
    return (
     <CategoryMenu navigation={this.props.navigation} items={Routes.LoginRoutes}/>
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

export class ArticleMenu extends React.Component {
  /*static navigationOptions = {
    title: 'Articles'.toUpperCase()
  };
  render() {
    return (
      <CategoryMenu navigation={this.props.navigation} items={Routes.ArticleRoutes}/>
    )
  }
  walkthroughScreen
  */

  static navigationOptions = {
    title: 'Energy Solution'.toUpperCase()
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
        onPress={() => this.props.navigation.navigate('Article', {id: info.item.id})}>
        <RkCard rkType='horizontal' style={styles.card}>
          <Image rkCardImg source={info.item.photo}/>

          <View rkCardContent>
            <RkText numberOfLines={1} rkType='header6'>{info.item.header}</RkText>
            <RkText rkType='secondary6 hintColor'>{`${info.item.user.firstName} ${info.item.user.lastName}`}</RkText>
            <RkText style={styles.post} numberOfLines={2} rkType='secondary1'>{info.item.text}</RkText>
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
      title: 'Dashboard'.toUpperCase()
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
        <View style={[styles.statItemContainer, {backgroundColor: item.background}]} key={item.name}>
          <View>
            <RkText rkType='header6' style={styles.statItemValue}>{item.value}</RkText>
            <RkText rkType='secondary7' style={styles.statItemName}>{item.name}</RkText>
          </View>
          <RkText rkType='awesome hero' style={styles.statItemIcon}>{FontAwesome[item.icon]}</RkText>
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
  Article4
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
  static navigationOptions = {
    title: 'Other'.toUpperCase()
  };
  render() {
    return (
      <CategoryMenu navigation={this.props.navigation} items={Routes.OtherRoutes}/>
    )
  }
}



let styles = RkStyleSheet.create(theme => ({
  screen: {
    backgroundColor: theme.colors.screen.base, //screen.scroll
    paddingVertical: 28,
    paddingHorizontal: 15,
    //alignItems: 'center',
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
  },
}));
