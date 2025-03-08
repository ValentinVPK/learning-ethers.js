// This example shows how to get the balance of an account calling an ETHEREUM node from Infura.
// The balance is formatted and displayed in ETH.

import { JsonRpcProvider, formatEther } from "ethers";

const INFURA_API_KEY = "ef140c0f20934c5f8f8c30838c57befa";
const INFURA_API_URL = `https://mainnet.infura.io/v3/${INFURA_API_KEY}`;

const ADDRESS = "0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e";

const provider = new JsonRpcProvider(INFURA_API_URL);

async function main() {
  const balance = await provider.getBalance(ADDRESS);

  console.log(`\nETH Balance of ${ADDRESS} --> ${formatEther(balance)} ETH\n`);
}

main().catch((error) => {
  console.error("Error:", error);
  process.exit(1);
});
