'use client';
import Image from 'next/image';
import {
  ChatView,
  ChatUIProvider,
  darkChatTheme,
  ChatViewComponent,
} from '@pushprotocol/uiweb';
import { PushAPI, CONSTANTS } from "@pushprotocol/restapi";
import { useState } from 'react';
import { ethers } from 'ethers';

const signer = new ethers.Wallet.createRandom();
const userAlice = await PushAPI.initialize(signer, { env: "prod" });

const stream = await userAlice.initStream([CONSTANTS.STREAM.CHAT]);

stream.on(CONSTANTS.STREAM.CHAT, (message) => {
  console.log(message);
});

// Connect Stream
stream.connect();




export default function Home() {
  const [signer, setSigner] = useState(null);

  const connectWallet = async () => {
    // Demo only supports MetaMask (or other browser based wallets) and gets provider that injects as window.ethereum into each page
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Get provider
    await provider.send('eth_requestAccounts', []);

    // Grabbing signer from provider
    const signer = provider.getSigner();

    // store signer
    setSigner(signer);
  };

  const disconnectWallet = async () => {
    setSigner(null);
  };





  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      {!signer ? (
        <button
          type='button'
          onClick={connectWallet}
          className='text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
        >
          Connect Wallet
        </button>
      ) : (
        <ChatUIProvider theme={darkChatTheme}>
          <ChatViewComponent
            chatId='1c07072548248e3b465f7fe9e61d3f32d6b779033d933326f221cde558882e46'
            limit={10}
            isConnected={true}
          />
        </ChatUIProvider>
      )}
      {/* <ConnectButton /> */}
    </main>
  );
}
