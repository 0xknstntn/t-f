import { getHttpEndpoint } from "@orbs-network/ton-access";
import { Address, TonClient, TupleBuilder, beginCell } from "ton";

export async function CheckAbility(wallet: string): Promise<boolean> {
        try {
                let res = await (await fetch(`https://api.tonlink.network/api/api/v1/faucet/check?address=${wallet}`)).json()
                console.log(`https://api.tonlink.network/api/api/v1/faucet/check?address=${wallet}`)
                if (res.ok == "true") {
                        return res.result.ability
                } else {
                        return false
                }
        } catch (e) {
                console.error(e)
        }
        return false
}