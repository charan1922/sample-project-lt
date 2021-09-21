import {useContext,createContext} from "react";

export const authContext = createContext();

export default function useAuth() {
    return useContext(authContext);
}