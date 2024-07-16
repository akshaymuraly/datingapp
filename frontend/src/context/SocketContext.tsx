import { createContext, useContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from "react";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import io, { Socket } from "socket.io-client";
import axios,{AxiosResponse} from "axios";

//SETTING WITHCREDENTIALS TRUE HENCE, COOKIE ATTACHING
axios.defaults.withCredentials=true


const useTypedSelector: TypedUseSelectorHook<any> = useSelector;

interface SocketContextType {
    socket: Socket | null;
    setSocket: Dispatch<SetStateAction<Socket | null>>;
}

const SocketContext = createContext<SocketContextType | undefined>(undefined);

interface SocketProviderProps {
    children: ReactNode;
}

interface UserId{
    userId:string
}

export const SocketProvider = ({ children }: SocketProviderProps) => {
    const isLoggedin = useTypedSelector((state) => state.user.isLoggedIn);
    const [socket, setSocket] = useState<Socket | null>(null);
    const [userId,setUserId] = useState<null|string>(null)

    useEffect(() => {
        //FETCHING ID OF THE USER TO ATTACH IN SOCKET CONNECTION
         async function getuserid(){
            const response:AxiosResponse<UserId> = await axios.get<UserId>("/api/message/userid",{
                    withCredentials:true
                })
                setUserId(response.data.userId)
         }
        if (isLoggedin) {
            if(!userId){
                //SHOULD CHECK ON THE CASE WHERE COOKIE VALIDATION FAILS
                getuserid()
            }
            const newSocket = io("http://localhost:5000",{
                query:{userId}
            });
            setSocket(newSocket);
            return () => {
                console.log(newSocket)
                newSocket.close();
            };
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    
    }, [isLoggedin,userId]);

    return (
        <SocketContext.Provider value={{ socket, setSocket }}>
            {children}
        </SocketContext.Provider>
    );
};

// Custom hook to use the SocketContext
export const useSocket = () => {
    const context = useContext(SocketContext);
    if (context === undefined) {
        throw new Error("useSocket must be used within a SocketProvider");
    }
    return context;
};