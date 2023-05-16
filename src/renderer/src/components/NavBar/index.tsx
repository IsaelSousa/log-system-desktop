import { ConnectStatus } from "../ConnectStatus";
import { NavBarContainer } from "./styles";

export const NavBar = () => {
    return (
        <NavBarContainer>
            <ConnectStatus />
        </NavBarContainer>
    );
}