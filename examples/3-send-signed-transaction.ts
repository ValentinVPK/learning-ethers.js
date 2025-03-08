import { JsonRpcProvider, formatEther, Wallet, parseEther } from "ethers";

const INFURA_API_KEY = "ef140c0f20934c5f8f8c30838c57befa";
const INFURA_API_URL = `https://mainnet.infura.io/v3/${INFURA_API_KEY}`;
const provider = new JsonRpcProvider(INFURA_API_URL);

const SENDER_WALLET_ADDRESS = "0xd6330da46b06aB696162e13A5B4D11589dB89D99";
const RECEIVER_WALLET_ADDRESS = "0x973b51782Ba859fe0893d0Fe9d6ecca78b7E6f53";

const SENDER_PRIVATE_KEY = "";

const wallet = new Wallet(SENDER_PRIVATE_KEY, provider);

async function main() {
  const senderBalanceBefore = await provider.getBalance(SENDER_WALLET_ADDRESS);
  console.log(
    `Balance of ${SENDER_WALLET_ADDRESS}: ${formatEther(senderBalanceBefore)}`
  );

  const receiverBalanceBefore = await provider.getBalance(
    RECEIVER_WALLET_ADDRESS
  );
  console.log(
    `Balance of ${RECEIVER_WALLET_ADDRESS}: ${formatEther(
      receiverBalanceBefore
    )}`
  );

  const tx = await wallet.sendTransaction({
    to: RECEIVER_WALLET_ADDRESS,
    value: parseEther("0.001"),
  });

  await tx.wait(); // wait for the transaction to be mined
  console.log(tx);

  const senderBalanceAfter = await provider.getBalance(SENDER_WALLET_ADDRESS);
  console.log(
    `Balance of ${SENDER_WALLET_ADDRESS}: ${formatEther(senderBalanceAfter)}`
  );

  const receiverBalanceAfter = await provider.getBalance(
    RECEIVER_WALLET_ADDRESS
  );
  console.log(
    `Balance of ${RECEIVER_WALLET_ADDRESS}: ${formatEther(
      receiverBalanceAfter
    )}`
  );
}

main().catch((error) => {
  console.error("Error:", error);
  process.exit(1);
});
