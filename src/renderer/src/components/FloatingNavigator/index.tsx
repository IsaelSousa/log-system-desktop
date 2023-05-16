import { FloatingActionButton } from '../FloatingActionButton';
import { Container } from './styles';
import { BsFillTrash2Fill } from 'react-icons/bs'

type Floating = {
    buttonOne: () => void;
}

export const FloatingNavigator = ({
    buttonOne
}: Floating) => {
    return (
        <Container>
            <FloatingActionButton onPress={buttonOne} icon={<BsFillTrash2Fill style={{ background: 'inherit' }} color='white' size={20} />} />
        </Container>
    );
}