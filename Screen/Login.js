import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Text,
  Pressable,
  Alert,
} from 'react-native';
import {Loader} from '../Helper/Loader';

function Login({navigation}) {
  const [Email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [data, setdata] = useState('');
  const [loading, setloading] = useState(true);
  console.log(data);
  console.log(Email);

  console.log(loading);

  useEffect(() => {
    setloading(true);
    async function getData() {
      const user = await AsyncStorage.getItem('usedDetail');
      setdata(JSON.parse(user));
      setloading(false);
    }
    getData();
  }, []);

  const onLogin = () => {
    if (!Email.value) {
      setEmail({value: '', error: 'Email number is required'});
      return;
    }
    if (!password.value) {
      setPassword({value: '', error: 'password is required'});
      return;
    }
    if (data) {
      if (Email.value === data.email && password.value === data.password) {
        Alert.alert('Login sucessfull');
        navigation.navigate('home');
      }
    } else {
      Alert.alert('Wrong credential');
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: 'bold',
            color: '#111111',
          }}>
          Welcome
        </Text>
        <Text
          style={{
            fontSize: 25,
            fontWeight: '400',
            color: '#111111',
            marginBottom: 80,
          }}>
          Sign in to your account
        </Text>
        <TextInput
          placeholder="Email"
          style={styles.textinput}
          label="Email"
          returnKeyType="next"
          value={Email.value}
          onChangeText={text => setEmail({value: text, error: ''})}
          autoCapitalize="none"
          autoCompleteType="cc-number"
          keyboardType="default"
          maxLength={20}
        />
        <Text style={{display: Email.error ? 'flex' : 'none'}}>
          {Email.error}
        </Text>
        <TextInput
          placeholder="Password"
          style={styles.textinput}
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={text => setPassword({value: text, error: ''})}
          // error={!!password.error}
          // errorText={password.error}
          secureTextEntry
        />
        <Text style={{display: password.error ? 'flex' : 'none'}}>
          {password.error}
        </Text>

        <View style={styles.forgotPassword}>
          <Text style={styles.forgot}>Forgot your password?</Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            alignSelf: 'flex-end',
            marginRight: 20,
            marginTop: 100,
            flexDirection: 'row',
          }}>
          <Pressable onPress={onLogin}>
            <View
              style={{
                backgroundColor: 'skyblue',
                alignItems: 'center',
                justifyContent: 'center',
                elevation: 5,
                width: 300,
                height: 50,
                borderRadius: 20,
              }}>
              <Text
                style={{
                  bottom: 4,
                  alignItems: 'center',
                  marginRight: 5,
                  fontSize: 25,
                  fontWeight: '400',
                  color: '#111111',
                }}>
                Login
              </Text>
              {/* <Icon color={'black'} size={30} name={'arrow-forward'} /> */}
            </View>
          </Pressable>
        </View>
        <View style={styles.row}>
          <Text>Don't have an account? </Text>
          <Pressable onPress={() => navigation.navigate('signup')}>
            <Text style={styles.link}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}
export default Login;

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    flex: 1,
    width: 340,
    height: 320,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  textinput: {
    backgroundColor: '#ffffff',
    borderColor: '#cccccc',
    elevation: 3,
    marginBottom: 10,
    width: 300,
    height: 50,
    borderRadius: 10,
    borderWidth: 0.2,
    fontSize: 20,
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginRight: 50,
  },
  row: {
    bottom: 10,
    marginVertical: 50,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  forgot: {
    fontWeight: '300',
    fontSize: 15,
    color: 'black',
  },
  link: {
    fontWeight: 'bold',
    color: 'skyblue',
  },
});
