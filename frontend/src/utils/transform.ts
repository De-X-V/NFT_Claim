import { BigNumber, ethers } from "ethers";
export function makeEtherFromBigNumber(amount: BigNumber): number {
  const value = Number(ethers.utils.formatEther(amount));
  return Math.floor(value * 10000) / 10000;
}

export function makeShortAddress(address?: string): string {
  const left = address?.slice(0, 6);
  const right = address?.slice(-4);
  return left + "..." + right;
}
