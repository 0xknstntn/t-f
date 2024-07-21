import { createStore } from './store';

type info = {
        b: boolean
}
     
const defaultState: info = {b: false};

export const [useAbility] = createStore(defaultState);