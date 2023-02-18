import { ButtonIcon } from '@components/ButtonIcon';
import { Container, PlayerName, Icon } from './styles';

type PlayerCardProps = {
  name: string;
  onRemove: () => void;
};

export const PlayerCard = ({ name, onRemove }: PlayerCardProps) => {
  return (
    <Container>
      <Icon name='person' />

      <PlayerName>{name}</PlayerName>

      <ButtonIcon icon='close' type='SECONDARY' onPress={onRemove} />
    </Container>
  );
};
