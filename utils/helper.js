import { formatEther, formatUnits } from "@ethersproject/units";

export const equivalentMintPrice = (value, price) => {
  const totalPrice = Number(formatEther(price?.toString())) * value;
  return totalPrice;
}

export const todp = (number, dp) => {
  return Number(number).toFixed(dp);
};
