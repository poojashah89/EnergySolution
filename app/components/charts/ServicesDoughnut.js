import React from 'react';
import {
  View,
  Image,
  Dimensions,
  Platform,
  Text
} from 'react-native';
import {
  RkComponent,
  RkText,
  RkTheme,
  RkStyleSheet
} from 'react-native-ui-kitten';

import {
  VictoryPie,VictoryBar
} from "victory-native";

import {Svg, Text as SvgText} from 'react-native-svg';
import {scale} from '../../utils/scale';

export class ServicesDoughnutChart extends RkComponent {

  constructor(props) {
    super(props);
    this.fontSize = 40;
    this.size = 300;
    this.state = {
      selected: 0,
      data: [
        {
          x: 1,
          y: 20,
          color: RkTheme.current.colors.charts.doughnut[0],
          name: 'IoT',
        },
        {
          x: 2,
          y: 270,
          color: RkTheme.current.colors.charts.doughnut[1],
          name: 'HVAC',
        },
        {
          x: 3,
          y: 270,
          color: RkTheme.current.colors.charts.doughnut[2],
          name: 'Cold Water',
        },{
          x: 4,
          y: 270,
          color: RkTheme.current.colors.charts.doughnut[3],
          name: 'Light Energy Services',
        }
      ]
    }
  }

  computeColors() {
    return this.state.data.map(i => i.color)
  }

  handlePress(e, props) {
    this.setState({
      selected: props.index
    })
  }

  changeScroll(scrollEnabled) {
    this.setState({ scrollEnabled });
  }

  render() {
    return (
    <View>
        <RkText rkType='header4'>TOTAL SERVICES</RkText>
        <View style={{alignSelf: 'center'}}>
          <Svg width={scale(this.size)} height={scale(this.size)}>
            <VictoryBar
              labels={[]}
              width={scale(this.size)} height={scale(this.size)}
              colorScale={this.computeColors()}
              data={this.state.data}
              standalone={false}
              padding={scale(25)}
              innerRadius={scale(70)}
              marginLeft={scale(100)}
              marginTop={scale(150)}
              events={[{
                target: "data",
                eventHandlers: {
                  onPressIn: (evt, props) => this.handlePress(evt, props)
                }
              }]}>
            </VictoryBar>
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
              {this.state.data[this.state.selected].title}
            </SvgText>
          </Svg>
        </View>
        <View style={styles.legendContainer}>
          {this.state.data.map(item => {
            return (
              <View key={item.name} style={styles.legendItem}>
                <View style={[styles.itemBadge, {backgroundColor: item.color}]}/>
                <RkText rkType="primary3">{item.name}</RkText>
              </View>
            )
          })}
        </View>
      </View>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  chartstyle: {
    alignSelf: 'auto',
  },
  legendContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
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
  },text: {
    fontSize: 18,
    fontFamily: (Platform.OS === "ios") ? "Menlo" : "monospace",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 30
}
}));
