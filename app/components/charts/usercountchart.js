import React from 'react';
import {
  View,
  Image,
  Dimensions,
  FlatList
} from 'react-native';
import {
  RkComponent,
  RkText,
  RkTheme,
  RkStyleSheet
} from 'react-native-ui-kitten';

import {
  VictoryPie,
} from "victory-native";

import {Svg, Text as SvgText} from 'react-native-svg';
import {scale} from '../../utils/scale';


export class UserCountChart extends RkComponent {

  constructor(props) {
    super(props);
    this.size = 300;
    this.fontSize = 40;
    this.state = {
      selected: 0,
      userList : []
    }
    this.getUsercount();
    this.renderItem = this._renderItem.bind(this);
  }

  getUsercount = () => {
      console.log('in user count')
      fetch('https://cmpe235-finalproject.herokuapp.com/v1/user/count', {
         method: 'GET',
         headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
         }
      }).then(response => {
        var obj1= JSON.parse(JSON.stringify(response));
        var bodyInit1 = JSON.parse(obj1._bodyInit);
        console.log("usercountbodyInit:"+ bodyInit1);
        this.obj1 = bodyInit1.obj;
        var item = {};
        item = JSON.stringify(this.obj1);

        this.setState({
          //isLoading: false,
          userList : this.obj1
        });
    }).catch(error => {
      console.error(error);
    });
   }


  computeColors() {
    return this.state.userList.map(i => i.color)
  }

  handlePress(e, props) {
    this.setState({
      selected: props.index
    })
  }


  _renderItem(info) {
      return (
    //if (this.state.isLoading) {
    <View>
      <RkText rkType='header4'>USER COUNT</RkText>
      <View style={{alignSelf: 'center'}}>

        <Svg width={scale(this.size)} height={scale(this.size)}>
          <VictoryPie
            labels={[]}
            width={scale(this.size)} height={scale(this.size)}
            colorScale={this.computeColors()}
            data={this.state.userList}
            standalone={false}
            padding={scale(25)}
            innerRadius={scale(70)}
            events={[{
              target: "data",
              eventHandlers: {
                onPressIn: (evt, props) => this.handlePress(evt, props)
              }
            }]}>
          </VictoryPie>
          <SvgText
            textAnchor="middle" verticalAnchor="middle"
            x={scale(this.size / 2)}
            y={scale(this.size / 2 - this.fontSize / 2)}
            dy={scale(this.fontSize * -0.25)}
            height={scale(this.fontSize)}
            fontSize={scale(this.fontSize)}
            fontFamily={RkTheme.current.fonts.family.regular}
            stroke={RkTheme.current.colors.text.base}
            fill={RkTheme.current.colors.text.base}>
            {this.state.userList[this.state.selected].title}
          </SvgText>
        </Svg>
      </View>
      <View style={styles.legendContainer}>
        {this.state.userList.map(item => {
          return (
            <View key={item.name} style={styles.legendItem}>
              <View style={[styles.itemBadge, {backgroundColor: item.color}]}/>
              <RkText rkType="primary3">{item.name}</RkText>
            </View>
          )
        })}
      </View>
    </View>)
  }


  render() {
    return (

      <FlatList
      //6. Set the data for the flat list
        data={this.state.userList}
        renderItem={this.renderItem}
        style={styles.container}/>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  legendContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemBadge: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5
  }
}));
