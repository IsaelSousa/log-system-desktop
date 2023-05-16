import { Button, Container } from './styles';

type ActionButton = {
    icon: any;
    onPress: () => void;
}

export const FloatingActionButton = ({
    icon,
    onPress
}: ActionButton) => {
    return (
        <Container>
            <Button onClick={onPress}>
                {icon}
            </Button>
        </Container>
    );
}