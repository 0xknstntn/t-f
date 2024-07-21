import { MainIndex } from "./components";
import { useEffect } from "react";
import { THEME, useTonAddress, useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";
import { useAbility } from "./store/useAbility";
import { CheckAbility } from "./web3/ability";

function App() {
        const userFriendlyAddress = useTonAddress();
        const wallet = useTonWallet();
        const [tonConnectUI, setOptions] = useTonConnectUI();
        const [ability, setAbility] = useAbility();
    
        setOptions({
            actionsConfiguration: {
                notifications: [],
    
            },
            uiPreferences: {
                theme: THEME.LIGHT
            }
    
        })
    
        useEffect(() => {
            async function main() {
                let b_new = await CheckAbility(userFriendlyAddress === undefined ? "" : userFriendlyAddress)
                setAbility({b: b_new})
            }
            main()
    
        }, [wallet])
        return (
                <div className="App">
                        <MainIndex />
                </div>
        );
}

export default App;
