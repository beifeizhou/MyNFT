# MyNFT

## Tutorial: https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/

## Installation 
```
npm install
```

### Here are some packages we need to install
```
npm install --save-dev hardhat
npm install --save-dev @nomiclabs/hardhat-ethers ethers@^5.0.0
npm install @nomiclabs/hardhat-etherscan -D
npm install @nomiclabs/hardhat-waffle -D
```

## 
```
npx hardhat compile --force
npx hardhat --network ropsten run scripts/deploy.js
npx hardhat verify --network ropsten 0x74714F03f0Ee2E3696B43F83b0B19e6810B68176
```