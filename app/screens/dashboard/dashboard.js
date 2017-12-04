import React from 'react';
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import {
  RkText,
  RkButton,
  RkStyleSheet,
  RkTheme,
} from 'react-native-ui-kitten';

import {FontAwesome} from '../../assets/icons';
import {Articles4} from '../articles/articles4';
import {Upgrade} from '../theme/upgrade';
import {
  ProgressChart,
  DoughnutChart,
  AreaChart,
  AreaSmoothedChart
} from '../../components/';

import {FontIcons} from '../../assets/icons';
const paddingValue = 8;

export class Dashboard extends React.Component {
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
        <ScrollView style={styles.screen}>
            <View>
              <RkButton rkType='square shadow' style={{width: size, height: size}}
                onPress={() => {
                  this.props.navigation.navigate('Upgrade')
                }}>
                <RkText style={styles.icon} rkType='primary moon menuIcon'>{FontIcons.profile}
                </RkText>
                <RkText rkType='h3'>Upgrade VIP</RkText>
              </RkButton>

            <RkButton rkType='square shadow' style={{width: size, height: size}}
              onPress={() => {
                this.props.navigation.navigate('Articles4')
              }}>
              <RkText style={styles.icon} rkType='primary moon menuIcon'>{FontIcons.article}
              </RkText>
              <RkText rkType='h3'>Rent Services</RkText>
            </RkButton>
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

let styles = RkStyleSheet.create(theme => ({
  screen: {
    backgroundColor: theme.colors.screen.scroll,
    paddingHorizontal: 15,
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
  }
}));
