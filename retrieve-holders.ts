import { ethers } from "ethers";

const rpcProvider = new ethers.JsonRpcProvider(
  "https://bsc-dataseed.binance.org/"
);
const addresses = [
  "0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
  "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
  "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392",
];

const main = async () => {
  try {
    for (const element of addresses) {
        const walletBalance = await rpcProvider
      .getBalance(element)
      .then((balance) => {
        const balanceInBNB = ethers.formatEther(balance);
        console.log(`${element} ${parseFloat(balanceInBNB).toFixed(8)}`);
      });
      }
    

    // console.log(`BNB Balance: ${ethers.utils.formatEther(walletBalance)}`); // can't seem to use utils to format input
  } catch (error) {
    console.log("Error retrieving", error);
  }
};

main();

// import Web3 from 'web3';

// const providerUrl = 'https://cosmopolitan-maximum-gas.bsc-testnet.discover.quiknode.pro/e0ef60fea2b17565febeadabd56bfd8c5b5ce7f8/';
// const web3 = new Web3(providerUrl);

// web3.eth.getBlock('latest').then((answer) => console.log(answer));
// web3.eth.getBlockNumber().then((blockNum) => console.log(blockNum));

// const url = "https://mainnet.infura.io/v3/ea4c604841984c328907e7fde678d1f4";
// const customHttpProvider = ethers.getDefaultProvider(url);

// customHttpProvider.getBlockNumber().then((result) => {
//   console.log("Current block number: " + result.toString());
// });
