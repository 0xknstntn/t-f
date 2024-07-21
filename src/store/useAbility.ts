import { createStore } from './store';

type info = {
        act: string,
        b: boolean
}
     
const defaultState: info = {act: "", b: false};

export const [useAbility] = createStore(defaultState);