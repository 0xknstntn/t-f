import styled from "styled-components";
import Sticker from '../../assets/Gif/Sticker 4.gif'

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`


const Gif = styled.img`
    width: 250px;
    height: 250px;
    margin-top: 100px;
    @media (max-width: 500px) {
        width: 150px;
        height: 150px;
    }
`

const TextBlock = styled.div`
    max-width: 60%;
    text-align: center;
    margin-top: 20px;
    @media (max-width: 500px) {
        max-width: 100%;
    }
`

const MainText = styled.a`
    margin-top: 40px;
    color: #fff;
    font-weight: 600;
    font-size: 60px;
    text-align: center;
    line-height: 1.2em;
    @media (max-width: 500px) {
        font-size: 42px;
    }
`

const TONGradient = styled.a`
    background: linear-gradient(90deg,#2D83EC,#1AC9FF);
    font-weight: 600;
    font-size: 60px;
    -webkit-background-clip: text;
    color: #0000;
    @media (max-width: 500px) {
        font-size: 42px;
    }
`

const Descriprion = styled.h1`
    color: #c7c8cd;
    font-size: 25px;
    font-weight: 500;
    text-align: center;
    margin-top: 15px;
    @media (max-width: 500px) {
        font-size: 20px;
    }
`

const Button = styled.button`
    padding: 10px 60px;
    background: #027bfe;
    border-radius: 30px;
    outline: none;
    border: none;
    margin-top: 30px;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    &:active{
        transform: scale(0.98);
    }
    @media (max-width: 500px) {
        padding: 9px 55px;
    }
`

const Link = styled.a`
    font-size: 20px;
    color: #fff;
    font-weight: 500;
    text-decoration: none;
    @media (max-width: 500px) {
        font-size: 17px;
    }
`

export const Block1 = () => {
    return (
        <Container>
            <Gif src={Sticker} />
            <TextBlock>
                <MainText>
                    <TONGradient> Tonlink </TONGradient>
                    Testnet Faucet
                </MainText>
                <Descriprion>
                Tonlink Testnet Faucet is a faucet to get 
                test stTON and TL to test Tonlink Network. 
                The TL token is used to pay for the oracle 
                and the stTON to test the delegation process.
                </Descriprion>
            </TextBlock>
            <Button>
                <Link>Collect</Link>    
            </Button>
        </Container>
    )
}