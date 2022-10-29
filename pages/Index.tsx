import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Touchable, TouchableWithoutFeedback } from 'react-native';
import SignInRequest from '../objects/request/SignInRequest';
import useNavigate from '../shared/hook/useNavigate';
import globalStyles from '../utils/GlobalStyles';

function Index() {
  const { navigate } = useNavigate();
  const [signInRequest] = useState(new SignInRequest());
  const [signInKey, setSignInKey] = useState(0);
  const emailInput = useRef<TextInput>(null);
  const passwordInput = useRef<TextInput>(null);
  const signInSubmit = async () => {
    if (!(await signInRequest.check(setSignInKey))) {
      if (signInRequest.getMessage(() => signInRequest.email)) {
        emailInput.current?.focus();
        return;
      }
      if (signInRequest.getMessage(() => signInRequest.password)) {
        passwordInput.current?.focus();
        return;
      }
    }
    else
    {
      alert("Dit me may");
    }
  }
  return (
    <View style={styles.container}>
      <Text onPress={() => { navigate("About") }}>Click here to navigate to about page</Text>
      <View key={signInKey} style={styles.signInForm}>
          <TextInput ref={emailInput} style={globalStyles.input} placeholder="Email" defaultValue={signInRequest.email} onChangeText={e => signInRequest.email = e}></TextInput>
          <Text style={globalStyles.validation}>{signInRequest.getMessage(() => signInRequest.email)}</Text>
          <TextInput ref={passwordInput} style={globalStyles.input} placeholder="Password" defaultValue={signInRequest.password} onChangeText={e => signInRequest.password = e} secureTextEntry></TextInput>
          <Text style={globalStyles.validation}>{signInRequest.getMessage(() => signInRequest.password)}</Text>
          <Button title='Submit'onPress={e => signInSubmit()}></Button>
        </View>
    </View>
  )
}

export default Index
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInForm: {
    width: 300
  }
});
