import styled from "styled-components";
import { MainHeader } from "./Header";
import { Block1 } from "./Blocks/Block1";

const Container = styled.div`
    width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    @media (max-width: 1000px) {
        width: 90%;
    }
`



export const MainIndex = () => {

    return (
        <Container>
            <MainHeader />
            <Block1 />
        </Container>
    )
}