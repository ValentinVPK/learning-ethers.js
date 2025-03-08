import { JsonRpcProvider } from "ethers";

const INFURA_API_KEY = "ef140c0f20934c5f8f8c30838c57befa";
const INFURA_API_URL = `https://mainnet.infura.io/v3/${INFURA_API_KEY}`;
const provider = new JsonRpcProvider(INFURA_API_URL);

async function main() {
  const latestBlockNumber = await provider.getBlockNumber();
  const latestBlockInfo = await provider.getBlock(latestBlockNumber);

  console.log(latestBlockInfo);
}

main().catch((error) => {
  console.error("Error:", error);
  process.exit(1);
});
