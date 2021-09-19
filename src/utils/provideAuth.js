import {authContext} from "./useAuth";
import useProvideAuth from '../hooks/useProvideAuth'

export default function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
}