import {FC, ReactNode} from 'react';
import {StateScheme} from '../config/StateScheme';
import {createReduxStore} from '001_app/providers/StoreProvider/config/store';
import {Provider} from 'react-redux';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: StateScheme
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {

    const {initialState, children} = props;

    const store = createReduxStore(initialState as StateScheme)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
};

