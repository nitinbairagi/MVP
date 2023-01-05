import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {color} from 'react-native-reanimated';
import {Loader} from '../Helper/Loader';

function BeneficiaryInfo() {
  const [userinfo, setuserinfo] = useState('');
  const [loaded, setloaded] = useState(true);
  console.log(userinfo);

  useEffect(() => {
    setloaded(true);
    async function getuserinfo() {
      const info = await AsyncStorage.getItem('usedDetail');
      setuserinfo(JSON.parse(info));
      setloaded(false);
    }
    getuserinfo();
  }, []);

  if (loaded) {
    return <Loader />;
  }

  return (
    <View style={{flex: 1, margin: 20}}>
      <View>
        <Text
          style={{
            fontSize: 18,
            marginLeft: -10,
            padding: 10,
            textAlign: 'left',
            color: 'skyblue',
          }}>
          Personal info
        </Text>
      </View>

      <View style={styles.text}>
        <Text style={styles.textstyle}>First Name </Text>
        <Text style={{marginLeft: 55}}>: {userinfo.name} </Text>
      </View>
      <View style={styles.text}>
        <Text style={styles.textstyle}>Last Name </Text>
        <Text style={{marginLeft: 56}}>
          : {userinfo.lastname ? userinfo.lastname : 'N/A'}{' '}
        </Text>
      </View>
      <View style={styles.text}>
        <Text style={styles.textstyle}>Date of Birth </Text>
        <Text style={{marginLeft: 44}}>
          : {userinfo.dob ? userinfo.dob : 'N/A'}
        </Text>
      </View>
      <View style={styles.text}>
        <Text style={styles.textstyle}>Work Email Id </Text>
        <Text style={{marginLeft: 36}}>: {userinfo.email}</Text>
      </View>
      <View style={styles.text}>
        <Text style={styles.textstyle}>Personal Email Id </Text>
        <Text style={{marginLeft: 10}}>: {userinfo.email} </Text>
      </View>
      <View style={styles.text}>
        <Text style={styles.textstyle}>Phone Number </Text>
        <Text style={{marginLeft: 28}}>: {userinfo.mobile} </Text>
      </View>
      <View style={styles.text}>
        <Text style={styles.textstyle}>Address Line 1 </Text>
        <Text style={{marginLeft: 28}}>
          : {userinfo.address ? userinfo.address : 'N/A'}{' '}
        </Text>
      </View>
      <View style={styles.text}>
        <Text style={styles.textstyle}>Address Line 2 </Text>
        <Text style={{marginLeft: 28}}>
          : {userinfo.address ? userinfo.address : 'N/A'}
        </Text>
      </View>
      <View style={styles.text}>
        <Text style={styles.textstyle}>City</Text>
        <Text style={{marginLeft: 110}}>
          : {userinfo.city ? userinfo.city : 'N/A'}
        </Text>
      </View>
      <View style={styles.text}>
        <Text style={styles.textstyle}>State</Text>
        <Text style={{marginLeft: 100}}>
          : {userinfo.state ? userinfo.state : 'N/A'}
        </Text>
      </View>
      <View style={styles.text}>
        <Text style={styles.textstyle}>Zip </Text>
        <Text style={{marginLeft: 110}}>
          : {userinfo.zip ? userinfo.zip : 'N/A'}
        </Text>
      </View>
    </View>
  );
}
export default BeneficiaryInfo;

const styles = StyleSheet.create({
  text: {
    flexDirection: 'row',
    color: 'skyblue',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textstyle: {fontSize: 16, color: 'skyblue'},
});
