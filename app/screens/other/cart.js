import React from 'react';
import * as Screens from '../../screens/index';
import {PaymentType} from './paymenttype';
import {
  ScrollView,
  FlatList,
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
import auth from '../../utils/authUtils';
export class Cart extends React.Component {
  static navigationOptions = {
    title: 'My Cart'.toUpperCase()
  };

  constructor(props) {
    super(props);

    this.state = {
      cartList : []
    }
    this.getCartItems();
    this.renderItem = this._renderItem.bind(this);
  }

  _keyExtractor(post) {
    return post.id;
  }

  getCartItems = () => {
    console.log('in cart service')
    fetch('https://cmpe235-finalproject.herokuapp.com/v1/cart/getservices', {
       method: 'POST',
       headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
       },
       body: JSON.stringify({
       token: auth.getToken(),
       id: auth.getUserId()
       })
    }).then(response => {
      console.log("response:"+JSON.stringify(response));
      var obj= {};
      obj= JSON.parse(JSON.stringify(response));
      var bodyInit = JSON.parse(obj._bodyInit);
      console.log("bodyInit:"+ bodyInit);
      this.obj = bodyInit.obj;
      var item = {};
      item = JSON.stringify(this.obj);
      console.log("item:"+ JSON.stringify(item));
      this.setState({
        //isLoading: false,
        cartList : this.obj
      });
  }).catch(error => {
    console.error(error);
  });
   }

   _renderItem(info) {
       return (
     //if (this.state.isLoading) {
     <ScrollView style={styles.container}>
      <View style={styles.row}>
           <TouchableOpacity style={styles.rowButton}>
             <RkText rkType='header6'>{info.item.squarefeet}  {info.item.price}</RkText>
           </TouchableOpacity>
      </View>
     </ScrollView>)
   }
  render() {
    return (
      <ScrollView style={styles.container}>
      <View>
        <View style={[styles.row, styles.heading]}>
          <RkText rkType='primary header6'>CART ITEMS                       PRICE</RkText>
        </View>
        <View>
          <FlatList
          //6. Set the data for the flat list
            data={this.state.cartList}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => item._id}
            style={styles.container}/>
        </View>
        <TouchableOpacity style={styles.rowButton}>
           <RkText >Total:                                           100.00 $</RkText>
        </TouchableOpacity>
        <RkButton style={{marginLeft: 120, width:150}} onPress={() => this.props.navigation.navigate('PaymentType')}>Lease Service</RkButton>
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
