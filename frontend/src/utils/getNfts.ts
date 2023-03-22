import { Network, Alchemy } from "alchemy-sdk";
import axios from "axios";

export const getNftsfromAxios = async (ownerAddress: string) => {
  const options = {
    method: "GET",
    url: `https://eth-goerli.alchemyapi.io/v2/${process.env.REACT_APP_API_KEY}`,
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      account: ownerAddress,
    },
  };
  const response = await axios.request(options);
  console.log(response.data);
  return response.data;
};

const settings = {
  apiKey:
    "https://eth-goerli.g.alchemy.com/v2/YjnOONe-mU_lZeLJuB3_YANo7HfKzgqr",
  network: Network.ETH_GOERLI,
};
const alchemy = new Alchemy(settings);

export const getNftsForOwner = async (ownerAddress: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          const response = JSON.parse(this.responseText);
          resolve(response);
        } else {
          reject(new Error(`Request failed with status code ${this.status}`));
        }
      }
    };

    xhr.open(
      "GET",
      `https://eth-goerli.g.alchemy.com/nft/v2/YjnOONe-mU_lZeLJuB3_YANo7HfKzgqr/getNFTs?owner=${ownerAddress}&withMetadata=true`,
      true
    );

    xhr.send();
  });
};

/*const response = await web3.alchemy.getNfts({
    owner: ownerAddress,
    
    chainType: chainType,
    nftType: "erc721",
    
});
 
const nfts = response.map((nft: any) => {
  return {
    id: nft.tokenId,
    name: nft.name,
    image: nft.image,
    description: nft.description,
  };
});
return nfts;
*/
