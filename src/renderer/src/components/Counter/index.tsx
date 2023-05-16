import { Container } from "./styles";

type counter = {
    title: string;
}

export const Counter = ({
    title
}: counter) => {
    return (
        <Container>
            {title}
        </Container>
    );
}