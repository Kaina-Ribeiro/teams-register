import { useNavigation } from '@react-navigation/native';

import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { Container, Content, Icon } from './styles';
import { useState } from 'react';

export const NewGroup = () => {
  const [group, setGroup] = useState('');

  const navigation = useNavigation();

  const handleNew = () => {
    navigation.navigate('players', { group });
  };
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />

        <Highlight
          title='Nova Turma'
          subtitle='Crie a turma para adicionar as pessoas'
        />

        <Input placeholder='Nome da turma' onChangeText={setGroup} />

        <Button title='Criar' style={{ marginTop: 20 }} onPress={handleNew} />
      </Content>
    </Container>
  );
};
