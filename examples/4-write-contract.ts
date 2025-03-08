import { JsonRpcProvider, Contract, Wallet } from "ethers";

const INFURA_API_KEY = "ef140c0f20934c5f8f8c30838c57befa";
const INFURA_API_URL = `https://mainnet.infura.io/v3/${INFURA_API_KEY}`;
const provider = new JsonRpcProvider(INFURA_API_URL);

const SENDER_WALLET_ADDRESS = "0xd6330da46b06aB696162e13A5B4D11589dB89D99";
const RECEIVER_WALLET_ADDRESS = "0x973b51782Ba859fe0893d0Fe9d6ecca78b7E6f53";

const SENDER_PRIVATE_KEY = "";

const wallet = new Wallet(SENDER_PRIVATE_KEY, provider);

const TOKEN_CONTRACT_ADDRESS = "0x514910771AF9Ca656af840dff83E8264EcF986CA"; // LINK token contract address
const ABI = [
  "function transfer(address to, uint256 value) returns (bool success)",
  "function balanceOf(address owner) view returns (uint256 balance)",
];
const contract = new Contract(TOKEN_CONTRACT_ADDRESS, ABI, provider);

async function main() {
  const balance = await contract.balanceOf(SENDER_WALLET_ADDRESS);
  console.log(`Balance of ${SENDER_WALLET_ADDRESS}: ${balance}`);

  const connectedContract = contract.connect(wallet);

  // @ts-ignore - TypeScript doesn't recognize dynamically added methods from ABI
  const tx = await connectedContract.transfer(RECEIVER_WALLET_ADDRESS, 100);
  await tx.wait();
  console.log(tx);

  const balanceAfter = await contract.balanceOf(SENDER_WALLET_ADDRESS);
  console.log(`Balance of ${SENDER_WALLET_ADDRESS}: ${balanceAfter}`);

  const receiverBalance = await contract.balanceOf(RECEIVER_WALLET_ADDRESS);
  console.log(`Balance of ${RECEIVER_WALLET_ADDRESS}: ${receiverBalance}`);
}

main().catch((error) => {
  console.error("Error:", error);
  process.exit(1);
});
