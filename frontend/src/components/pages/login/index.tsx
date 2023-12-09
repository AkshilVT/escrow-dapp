import ConnectButton from "@/components/common/connect-btn";
import { useWallet } from "@/hooks/useWallet";
import { useRouter } from 'next/navigation';

export default function Login() {
    const { walletConnectionStatus } = useWallet();
    const router = useRouter();
    const redirectToHome = () => {
        //
        if (walletConnectionStatus === 'connected') {
            console.log(walletConnectionStatus === 'connected');
            router.push("/");
        }
    };

    return (
        <>
            
            <div className="flex flex-col items-center justify-center px-6 py-8 m-auto md:h-screen lg:py-0 bg-gradient-to-b from-blue-200 to-indigo-600">
                <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-blue-100 dark:bg-blue-100 dark:border-blue-200">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 items-center">
                        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-indigo-600 md:text-2xl dark:text-indigo-600">
                            Login with your wallet
                        </h1>
                        <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6" style={{ marginLeft: "0%" , textDecorationColor: "white"}} >
                         <ConnectButton />
                         <button className="flex flex-col items-center justify-center space-y-4 md:space-y-6 bg-indigo-400 px-10 py-2 rounded-md text-blue-100 hover:scale-110 transition-transform" onClick={redirectToHome}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
                        
            </>
    )
}
