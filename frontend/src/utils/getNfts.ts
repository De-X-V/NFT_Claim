import { createAlchemyWeb3 } from "@alch/alchemy-web3";

const web3 = createAlchemyWeb3(process.env.REACT_APP_API_KEY);
const chainType = "goerli";

export const getNftsForOwner = async (ownerAddress: string) => {
  const response = await web3.alchemy.getNfts({
    owner: ownerAddress,
    /*
    chainType: chainType,
    nftType: "erc721",
    */
  });
  const data = response;
  const nfts = data.map((nft: any) => {
    return {
      id: nft.tokenId,
      name: nft.name,
      image: nft.image,
      description: nft.description,
    };
  });
  return nfts;
};
