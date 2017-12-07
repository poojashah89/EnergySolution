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
  RkTextInput,
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
    console.log("Schedule service:"+JSON.stringify(this.props.navigation.state));
    let id = params ? params.id : 1;
    let name = params ? params.name : 1;
    console.log("schedule params:"+params);

    this.pic = 'https://readwrite.com/wp-content/uploads/energy-effeciency-e1472285339838.jpg';
    this.data = data.getArticle(id);
    this.state = {
      name: '',
      address: '',
      zipcode: '',
      phone: '',
      date:'',
      time:'',
   }
  }

  handleName = (text) => {
     this.setState({ name: text })
  }
  handleAddress = (text) => {
     this.setState({ email: text })
  }
  handleZipcode = (text) => {
     this.setState({ password: text })
  }
  handlePhone = (text) => {
     this.setState({ type: text })
  }
  handleDate = (text) => {
     this.setState({ type: text })
  }
  handleTime = (text) => {
     this.setState({ type: text })
  }

  render() {
    return (
      <ScrollView style={styles.root}>
        <RkCard rkType='article'>
          <Image rkCardImg source={{uri: this.pic}}/>
          <View rkCardHeader>
            <View>
              <RkText style={styles.title} rkType='header4'>{this.data.header}</RkText>
              <RkText style={styles.title} rkType='header4'>Please Enter Details to Schedule energy Service Installation</RkText>
            </View>
          </View>
          <View rkCardContent>
            <View>

            <RkText >Name : </RkText>
            <RkTextInput rkType='rounded' placeholder='Name'/>
            </View>
          </View>
          <View rkCardContent>
            <View>
            <RkText >Adress : </RkText>
            <RkTextInput rkType='rounded' placeholder='Address'/>
            </View>
          </View>
          <View rkCardContent>
            <View>
            <RkText >Zip Code : </RkText>
            <RkTextInput rkType='rounded' placeholder='Zip code'/>

            </View>
          </View>
          <View rkCardContent>
            <View>
            <RkText >Phone : </RkText>
            <RkTextInput rkType='rounded' placeholder='xxx-xxx-xxxx '/>
            </View>
          </View>
          <View rkCardContent>
            <View>
            <RkText >Date : </RkText>
            <RkTextInput rkType='rounded' placeholder='mm/dd/yyyy'/>
            </View>
          </View>
          <View rkCardContent>
            <View>
            <RkText >Time : </RkText>
            <RkTextInput rkType='rounded' placeholder='00:00'/>
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
