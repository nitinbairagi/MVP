import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Screen/Home';
import {View, Pressable, Text, Image, Alert} from 'react-native';
import BeneficiaryInfo from './Screen/BeneficiaryInfo';
import Login from './Screen/Login';
import Register from './Screen/SignUp';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Loader} from './Helper/Loader';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const App = () => {
  const [data, setdata] = useState('');
  const [loading, setloading] = useState(true);
  // console.log(!!data, data);
  // console.log(loading);

  useEffect(() => {
    setloading(true);
    async function getuser() {
      const user = await AsyncStorage.getItem('usedDetail');
      setdata(user);
      setloading(false);
    }
    getuser();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={data ? 'home' : 'login'}
          screenOptions={{headerShown: true}}>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="login"
            component={Login}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="signup"
            component={Register}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="home"
            component={SideDrawer}
          />
          <Stack.Screen
            options={{
              headerTitle: 'Beneficiary-Information',
              headerStyle: {backgroundColor: 'skyblue'},
            }}
            name="Beneficiary-Information"
            component={BeneficiaryInfo}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
function CustomDrawer({navigation}) {
  function Logout() {
    AsyncStorage.removeItem('usedDetail');
    Alert.alert('Logout sucessfull');
    navigation.navigate('signup');
  }
  const [user, setuser] = useState('');
  useEffect(() => {
    AsyncStorage.getItem('usedDetail').then(res => setuser(JSON.parse(res)));
  }, []);

  return (
    <>
      <View style={{flex: 1}}>
        <Pressable
          android_ripple={{color: '#567b9c'}}
          onPress={() => navigation.navigate('Beneficiary-Information')}
          style={{
            padding: 10,
            flexDirection: 'row',
            backgroundColor: 'skyblue',
          }}>
          <Image
            source={{
              uri: 'https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg',
            }}
            style={{
              width: 60,
              height: 60,
              borderRadius: 60 / 2,
              borderWidth: 1,
            }}
          />
          {/* <IonIcon
              style={{alignSelf: 'flex-start'}}
              // style={{marginRight: 20, marginLeft: -20}}
              name="home"
              color="#567b9c"
              size={25}
            /> */}
          <Text
            style={{
              color: '#567b9c',
              fontWeight: 'bold',
              fontSize: 18,
              marginLeft: 25,
              marginTop: 20,
            }}>
            {user.name}
          </Text>
        </Pressable>

        <View>
          <Pressable
            android_ripple={{color: '#071b2b'}}
            onPress={() => navigation.navigate('Beneficiary-Information')}
            style={{
              padding: 15,
              margin: 5,
              flexDirection: 'row',
            }}>
            {/* <IonIcon
              name="home"
              color="#567b9c"
              size={25}
              style={{alignSelf: 'flex-start'}}
              // style={{marginRight: 20, marginLeft: -20}}
            /> */}
            <Text
              style={{
                fontWeight: 'bold',
                color: '#567b9c',
                fontSize: 18,
                marginLeft: 20,
              }}>
              Immigaration Status
            </Text>
          </Pressable>
        </View>
        <View>
          <Pressable
            android_ripple={{color: '#071b2b'}}
            onPress={() => navigation.navigate('Beneficiary-Information')}
            style={{
              padding: 15,
              margin: 5,
              flexDirection: 'row',
            }}>
            {/* <IonIcon
              name="business"
              color="#567b9c"
              size={25}
              style={{alignSelf: 'flex-start'}}
              // style={{marginRight: 20, marginLeft: -20}}
            /> */}
            <Text
              style={{
                fontWeight: 'bold',
                color: '#567b9c',
                fontSize: 18,
                marginLeft: 20,
              }}>
              Beneficiary information
            </Text>
          </Pressable>
        </View>
        <View>
          <Pressable
            android_ripple={{color: '#071b2b'}}
            onPress={() => navigation.navigate('Beneficiary-Information')}
            style={{
              padding: 15,
              margin: 5,
              flexDirection: 'row',
            }}>
            {/* <IonIcon
              name="bookmark"
              color="#567b9c"
              size={25}
              style={{alignSelf: 'flex-start'}}
              // style={{marginRight: 20, marginLeft: -20}}
            /> */}
            <Text
              style={{
                fontWeight: 'bold',
                color: '#567b9c',
                fontSize: 18,
                marginLeft: 20,
              }}>
              Passport / Visa / Travel
            </Text>
          </Pressable>
        </View>
        <View>
          <Pressable
            android_ripple={{color: '#071b2b'}}
            onPress={() => navigation.navigate('Beneficiary-Information')}
            style={{
              padding: 15,
              margin: 5,
              flexDirection: 'row',
            }}>
            {/* <IonIcon
              name="person-circle"
              color="#567b9c"
              size={30}
              style={{alignSelf: 'flex-start'}}
            /> */}
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                color: '#567b9c',
                marginLeft: 20,
              }}>
              Permanent resident status
            </Text>
          </Pressable>
        </View>
        <View>
          <Pressable
            android_ripple={{color: '#071b2b'}}
            onPress={() => navigation.navigate('Beneficiary-Information')}
            style={{
              padding: 15,
              margin: 5,
              flexDirection: 'row',
            }}>
            {/* <IonIcon
              name="home"
              color="#567b9c"
              size={25}
              style={{alignSelf: 'flex-start'}}
              // style={{marginRight: 20, marginLeft: -20}}
            /> */}
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                color: '#567b9c',
                marginLeft: 20,
              }}>
              Open cases
            </Text>
          </Pressable>
        </View>
        <View>
          <Pressable
            android_ripple={{color: '#071b2b'}}
            onPress={() => navigation.navigate('Beneficiary-Information')}
            style={{
              padding: 15,
              margin: 5,
              flexDirection: 'row',
            }}>
            {/* <IonIcon
              name="home"
              color="#567b9c"
              size={25}
              style={{alignSelf: 'flex-start'}}
              // style={{marginRight: 20, marginLeft: -20}}
            /> */}
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                color: '#567b9c',
                marginLeft: 20,
              }}>
              imigration contact
            </Text>
          </Pressable>
        </View>
        <View>
          <Pressable
            android_ripple={{color: '#071b2b'}}
            onPress={() => navigation.navigate('Beneficiary-Information')}
            style={{
              padding: 15,
              margin: 5,
              flexDirection: 'row',
            }}>
            {/* <IonIcon
              name="home"
              color="#567b9c"
              size={25}
              style={{alignSelf: 'flex-start'}}
              // style={{marginRight: 20, marginLeft: -20}}
            /> */}
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                color: '#567b9c',
                marginLeft: 20,
              }}>
              Quick Links
            </Text>
          </Pressable>
        </View>
        <View>
          <Pressable
            android_ripple={{color: '#071b2b'}}
            onPress={Logout}
            style={{
              padding: 15,
              margin: 5,
              flexDirection: 'row',
            }}>
            {/* <IonIcon
              name="home"
              color="#567b9c"
              size={25}
              style={{alignSelf: 'flex-start'}}
              // style={{marginRight: 20, marginLeft: -20}}
            /> */}
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                color: '#567b9c',
                marginLeft: 20,
              }}>
              Log-Out
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}
function SideDrawer({navigation}) {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: true}}
      drawerContent={() => <CustomDrawer navigation={navigation} />}>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}
