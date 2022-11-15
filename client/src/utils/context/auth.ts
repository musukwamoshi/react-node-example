import {createContext} from "react";
import { UserType } from "../../../../shared/schemas/user"

export interface Session {
    user?: UserType
}

export interface AuthContextData extends Session {
    setSession: (session: Session) => void;
    updateSessionUser: (user: UserType | undefined, attributes: any) => void;
}

export const AuthContext = createContext<AuthContextData>({
    setSession: () => {},
    updateSessionUser: () => {}
})