import { getHttpEndpoint } from "@orbs-network/ton-access";
import { Address, TonClient, TupleBuilder, beginCell } from "ton";

export async function CheckAbility(wallet: string): Promise<boolean> {
        try {
                const endpoint = await getHttpEndpoint({
                        network: 'testnet',
                });
                const client = new TonClient({ endpoint });
                let info = (await client.runMethod(Address.parse("kQBOOEI4T1E2Oq0dHWwGw3U_Tbix4nso6EzbPLEdcF7u9vaL"), 'check_ability', [
                        { type: 'slice', cell: beginCell().storeAddress(Address.parse(wallet)).endCell() },
                ])).stack.readNumber();

                return (info == -1 ? true : false)
        } catch (e) {
                console.log(e)
        }
        return false
}