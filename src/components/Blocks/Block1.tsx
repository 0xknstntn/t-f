import styled from "styled-components";
import Sticker from '../../assets/Gif/Sticker 4.gif'
import { useAbility } from "../../store/useAbility";
import { SendTransactionRequest, useTonAddress, useTonConnectModal, useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";
import CircularProgress from '@mui/material/CircularProgress';

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

const DescriprionMini = styled.h1`
    color: #c7c8cd;
    font-size: 15px;
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

const InactiveButton = styled.button`
    padding: 10px 60px;
    background: #757575;
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
    const [ability, setAbility] = useAbility();
    const userFriendlyAddress = useTonAddress();
	const wallet = useTonWallet();
    const [ tonConnectUI, setOptions] = useTonConnectUI();
    const { state, open, close } = useTonConnectModal();

    const sendCollect = async () => {
        let parsed_amount = (0.15 * 10**9)
        let myTransaction: SendTransactionRequest = {
            validUntil: Math.floor(Date.now() / 1000) + 600,
            messages: [
                {
                    address: "kQBOOEI4T1E2Oq0dHWwGw3U_Tbix4nso6EzbPLEdcF7u9vaL",
                    amount: parsed_amount.toString(),
                    payload: "te6cckEBAQEADgAAGKQGYvQAAAAAAAAAAEtQRik="
                }
            ]
        }
        tonConnectUI.sendTransaction(myTransaction);
    }

    let button;
    console.log(ability)
    if (userFriendlyAddress == "") {
        button = <Button onClick={open}>
            <Link>Connect your wallet</Link>    
        </Button>
    } else if (ability.act == "" ) {
        button = <Button>
            <Link><CircularProgress disableShrink size={22} color="inherit"/></Link>
        </Button> 
    } else if (ability.act == "ok" && ability.b == false) {
        button = <InactiveButton>
            <Link>Try again later</Link>    
        </InactiveButton>
    } else if (ability.act == "ok" && ability.b == true) {
        button = <Button onClick={() => sendCollect()}>
            <Link>Collect</Link>    
        </Button>
    }

    return (
        <Container>
            <Gif src={Sticker} />
            <TextBlock>
                <MainText>
                    <TONGradient> Tonlink </TONGradient>
                    Testnet Faucet
                </MainText>
                <Descriprion>
                Get testnet versions of $TL and $stTON* to test the Apollo 10 Tonlink Testnet
                </Descriprion>
                <DescriprionMini>
                *not related to any liquid staking protocols
                </DescriprionMini>
            </TextBlock>
            {button}
        </Container>
    )
}