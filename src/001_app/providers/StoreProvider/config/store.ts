import {StateScheme} from '001_app/providers/StoreProvider/config/StateScheme';
import {configureStore, ReducersMapObject} from '@reduxjs/toolkit';
import {userReducer} from '005_entities/User';

//дженерики в congigureStore - в документации
export function createReduxStore(initialState?: StateScheme) {
    const rootReducers: ReducersMapObject<StateScheme> = {
        user: userReducer
    }

    return configureStore<StateScheme>({
        reducer:rootReducers,
        devTools: true,
        preloadedState: initialState
    })
}
