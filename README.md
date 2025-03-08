# Ethers.js Examples

This repository contains examples for working with the [ethers.js](https://docs.ethers.org/) library, a complete and compact library for interacting with the Ethereum blockchain and its ecosystem.

## Overview

Ethers.js provides a simple interface for:

- Connecting to Ethereum nodes
- Querying blockchain data
- Sending transactions
- Interacting with smart contracts
- Managing wallets and keys

All examples connect to Ethereum through [Infura](https://infura.io/), a service that provides access to Ethereum nodes without having to run your own.

## Examples

- `1_accounts.ts`: Querying account balances
- `2-read-smart-contracts.ts`: Reading data from smart contracts
- `4-write-contract.ts`: Writing data to smart contracts (sending transactions)

## Getting Started

1. Install dependencies:

   ```
   npm install
   ```

2. Run an example:
   ```
   npm run accounts
   npm run read-smart-contracts
   npm run write-contract
   ```

## Note

For examples that require sending transactions (`4-write-contract.ts`), you'll need to add your private key to the `SENDER_PRIVATE_KEY` variable. **Never commit your private keys to git.**

## Resources

- [Ethers.js Documentation](https://docs.ethers.org/)
- [Infura Documentation](https://docs.infura.io/)
- [Ethereum Developer Resources](https://ethereum.org/developers/)
