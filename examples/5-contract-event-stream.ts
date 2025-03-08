import { JsonRpcProvider, Contract } from "ethers";

const INFURA_API_KEY = "ef140c0f20934c5f8f8c30838c57befa";
const INFURA_API_URL = `https://mainnet.infura.io/v3/${INFURA_API_KEY}`;
const provider = new JsonRpcProvider(INFURA_API_URL);

const CONTRACT_ADDRESS = "0x6B175474E89094C44Da98b954EedeAC495271d0F"; // DAI contract address

const CONTRACT_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint256)",
  "event Transfer(address indexed from, address indexed to, uint256 value)",
]; // In ethers.js you can use the ABI as an array of strings rather than a JSON object and you can filter all functions you want to use

const contract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);

async function main() {
  const latestBlock = await provider.getBlockNumber();

  const transferEvents = await contract.queryFilter(
    "Transfer",
    latestBlock - 10,
    latestBlock
  );

  console.log(transferEvents);
}

main().catch((error) => {
  console.error("Error:", error);
  process.exit(1);
});
