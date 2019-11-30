import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import logo from '~/assets/logo.png';
import Background from '~/components/Background';
import { signInRequest } from '~/store/modules/auth/actions';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SingLink,
  SingLinkText,
} from './styles';

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const passwordRef = useRef();
  const loading = useSelector(state => state.auth.loading);
  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrecto={false}
            autoCapitalize="none"
            placeholder="Digite seu email"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.currrent.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />
          <SubmitButton loading={loading} onPress={handleSubmit}>
            Acessar
          </SubmitButton>
        </Form>
        {/* <SingLink onPress={() => navigation.navigate('SignUp')}> */}
        <SingLink onPress={() => navigation.navigate('Dashboard')}>
          <SingLinkText>Criar conta gratuita</SingLinkText>
        </SingLink>
      </Container>
    </Background>
  );
}
