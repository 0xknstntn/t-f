import styled from "styled-components";
import TONLinkDes from '../assets/webp/TonLink.webp'
import TONLinkMob from '../assets/webp/TONLinkMob.webp'
import Telegram from '../assets/webp/Telegram Logo.webp'
import { TonConnectButton } from "@tonconnect/ui-react";

const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 10px;
`

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`

const TONLogo = styled.img`
    width: 40px;
    height: 40px;
`

const Name = styled.a`
    font-size: 22px;
    font-weight: 600;
    color: #fff;
`

const TelegramLogo = styled.img`
    width: 50px;
    height: 50px;
    margin-left: auto;
`

export const MainHeader = () => {
    return (
        <Header>
            <LogoContainer>
                <TONLogo src={TONLinkMob} />
                <Name>Tonlink</Name>
            </LogoContainer>
            <TonConnectButton style={{marginLeft: "auto"}}/>
        </Header>
    )
}