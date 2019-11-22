import React, {useRef} from 'react';
import {Image} from 'react-native';
import logo from '~/assets/logo.png';

import Background from '~/components/Background';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SingLink,
  SingLinkText,
} from './styles';

export default function SignIn({navigation}) {
  const passwordRef = useRef();
  function handleSubmit() {}
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
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />
          <SubmitButton onPress={handleSubmit}> Acessar</SubmitButton>
        </Form>
        <SingLink onPress={() => navigation.navigate('SignUp')}>
          <SingLinkText>Criar conta gratuita</SingLinkText>
        </SingLink>
      </Container>
    </Background>
  );
}
