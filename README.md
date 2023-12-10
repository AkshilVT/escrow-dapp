# Descrownomics
> [!NOTE]  
> The steps to be followed to verify if the bounty track has been implemented are given at the end of this file.

## The code that holds your deal hostage (until it's done)
The Decentralized Escrow Protocol represents a groundbreaking solution to the age-old challenge of establishing trust in transactions. In traditional dealings, a fundamental reliance on trust between parties often becomes a stumbling block, particularly when there is no pre-existing relationship or a history of unfavorable interactions.
By leveraging the power of smart contracts, the protocol introduces a level of transparency and accountability that was previously unattainable. The essence lies in a brilliantly simple yet effective concept: funds are securely held in escrow by a smart contract until both parties have successfully fulfilled their respective obligations. This transformative approach not only guarantees the completion of the transaction but significantly mitigates the inherent risks associated with fraud and deception.
At the core of our protocol is the utilization of blockchain technology, ensuring that every facet of the escrow functionality is not only secure but also immutable. This means that once the terms are set and agreed upon, they are etched into the blockchain, creating an indelible record of the transaction history. This not only safeguards against any tampering or unauthorized changes but also provides an unalterable chronicle that serves as a testament to the integrity of the transaction.

## How it works?
Client: Creates Tasks to get done <br/>
Creator: Chooses tasks and completes them <br/>
Both stake some amount into the contract on the agreement. If either of them rejects, they lose the stake. <br/>


## Technologies used
### Polygon dApp LaunchPad: <br/>
Descrownomics, by utilizing the dApp LaunchPad framework and TypeScript, fits seamlessly into the Polygon track, capitalizing on Polygon's strengths in scalability and speed. This integration facilitates the smooth and efficient connection of smart contracts with the front end, enhancing user experience and operational efficiency. The use of TypeScript underscores a commitment to robust and maintainable code, crucial for the development of decentralized applications. By aligning with Polygon's ecosystem, Descrownomics not only benefits from its low transaction fees and high throughput but also positions itself for increased adoption and growth within the vibrant DeFi community, leveraging the network's extensive partnerships and user base. <br/>

### Lighthouse: <br/>
Descrownomics creatively integrates Filecoin's Lighthouse.storage as a pivotal component in the project, utilizing this onramp for storing and retrieving creators' work. This approach ensures that the creators' output is not only securely stored for perpetual access but also safeguarded against tampering due to the immutable nature of the storage. Such a mechanism is crucial for maintaining the integrity of the work and providing proof against any malicious activities.    <br/>

### Push Protocol chat: <br/>
Our project harnesses this technology to its fullest potential, integrating Push Chat as a fundamental feature to facilitate direct and efficient communication between freelancers and organizations. The Push Protocol's versatility allows for a range of functionalities essential for social-based dApps. <br/>

### Scroll:<br/>
Deployed and verified our smart contract on Scroll.<br/>
https://sepolia.etherscan.io/address/0x48735C0AAC91FFB817b16EFEb9e494D838cB89aE <br/>
https://sepolia.etherscan.io/tx/0xc4dec52bb2be3c2abc2f0f60a85459a3c94f895c2be3c531f360a700359c5bf4 <br/>


### NextJs <br/>

## Paper Referenced
Ali, A., Yukesh, S., Shankar, T., & Thanigai, R. (2023). Decentralised Escrow Protocol that Facilitates Secure Transactions between Trustless Parties. Social Science Research Network. https://doi.org/10.2139/ssrn.4365306

## Bounty Verification Process
- Scroll - Deploy on Scroll - We have deployed our contract on Scroll, here is the contract address(0xc8a4F7980e4Ce67dD01E7c77d9a9596849d1187D) and [etherscan](https://sepolia.etherscan.io/tx/0xc4dec52bb2be3c2abc2f0f60a85459a3c94f895c2be3c531f360a700359c5bf4)
- Polygon - dApp Launchpad - We used dapp schaffold tool (typescript template) to develop our app. Link - getURL(this) or press `crtl+l`
- Push - We used Push chat as the main medium of communication between our clients and artists. Here are the screenshots of the proof. You may not see this feature deployed because there was problem integrating (dependency issue) ChatUI as used 5.x version of ethers and we were using dApp Launchpad which used 6.x.
![image](https://github.com/AkshilVT/escrow-dapp/assets/76212148/7eedf234-cd30-4cf5-be40-cb3ee73ce528)
![9](https://github.com/AkshilVT/escrow-dapp/assets/75160883/a8b2ca92-62d7-424c-908c-a03faf7b09cc)
![10](https://github.com/AkshilVT/escrow-dapp/assets/75160883/fe94e53f-d807-4edb-8a5b-88206f9ad44b)
![11](https://github.com/AkshilVT/escrow-dapp/assets/75160883/5165d768-dd56-4a26-b7b2-ea85eb5e0e4b)
![12](https://github.com/AkshilVT/escrow-dapp/assets/75160883/deae8d76-b514-46c3-8e1d-9d06a6d4bf0a)

Lighthouse.storage + Filecoin/IPFS - go to the Assigned Page and click on choose file and then upload. You can check the status 99 in the console. It has been stored and the CID has been generated too.

Here are the photos of storing on Filecoin/IPFS with the Lighthouse store.
![1](https://github.com/AkshilVT/escrow-dapp/assets/75160883/341879d1-39e1-46db-90ef-e27aae0f03cf)
![2](https://github.com/AkshilVT/escrow-dapp/assets/75160883/d0ba2462-744d-4d7f-8906-369dfc371702)
![7](https://github.com/AkshilVT/escrow-dapp/assets/75160883/c6c0d874-77b3-4b2f-a393-c712d04ae3e2)

Here is adding task flow.
![4](https://github.com/AkshilVT/escrow-dapp/assets/75160883/f001df61-69ee-4e20-96ad-7cfcc0bc97c2)
![5](https://github.com/AkshilVT/escrow-dapp/assets/75160883/f7d8c195-528c-4f23-a3fa-7e300e9d6e7a)
![6](https://github.com/AkshilVT/escrow-dapp/assets/75160883/866826c5-15e3-43a3-b5bb-c75dbb853647)

> [!NOTE]
> This might not be hosted as we were facing some linting issues which made build fail.
