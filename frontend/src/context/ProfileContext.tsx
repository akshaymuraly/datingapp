import { createContext, useContext, useState } from "react";


const ProfileContext = createContext<any>(undefined)

export const ProfileProvider = ({ children }: any) => {
    const [profile, setProfile] = useState<any>(null);
    return (
        <ProfileContext.Provider value={{ profile, setProfile }}>
            {children}
        </ProfileContext.Provider>
    );
};

export const useProfile = () => {
    const context = useContext(ProfileContext);
    if (context === undefined) {
        throw new Error("useSocket must be used within a SocketProvider");
    }
    return context;
};