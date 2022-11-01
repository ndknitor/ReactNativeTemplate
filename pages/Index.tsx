import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Touchable, TouchableWithoutFeedback } from 'react-native';
import SignInRequest from '../objects/request/SignInRequest';
import useAuth from '../shared/context/hooks/useAuth';
import useNavigate from '../shared/hook/useNavigate';
import globalStyles from '../styles/Global';

function Index() {
  const { navigate } = useNavigate();
  const { authenticated, roles, setAuthorize } = useAuth();
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
    else {
      alert("Dit me may");
    }
  }
  return (
    <View style={globalStyles.page}>
      <Text onPress={() => { navigate("About", { message: "Dit me may" }) }}>Click here to navigate to about page</Text>
      <Text onPress={() => { navigate("Render", { message: "Dit me may" }) }}>Render</Text>
      <Text>Authenticated : {authenticated.toString()}</Text>
      <Text>Roles : {roles.toString()}</Text>
      <Button title="Authorize" onPress={() => setAuthorize(["User"])} />
      <View style={{ marginBottom: 10 }} />
      <Button title="Unauthorize" onPress={() => setAuthorize(false)} />
      <View key={signInKey} style={styles.signInForm}>
        <TextInput ref={emailInput} style={styles.input} placeholder="Email" defaultValue={signInRequest.email} onChangeText={e => signInRequest.email = e}></TextInput>
        <Text style={styles.validation}>{signInRequest.getMessage(() => signInRequest.email)}</Text>
        <TextInput ref={passwordInput} style={styles.input} placeholder="Password" defaultValue={signInRequest.password} onChangeText={e => signInRequest.password = e} secureTextEntry></TextInput>
        <Text style={styles.validation}>{signInRequest.getMessages(() => signInRequest.password)}</Text>
        <Button title='Submit' onPress={e => signInSubmit()}></Button>
      </View>
    </View>
  )
}

export default Index
const styles = StyleSheet.create({
  signInForm: {
    width: 300
  },
  input:
  {
    width: 290,
    height: 40,
    borderBottomWidth: 1
  },
  validation: {

  }
});
