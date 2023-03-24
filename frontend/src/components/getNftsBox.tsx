import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { createAlchemyWeb3 } from "@alch/alchemy-web3";

const web3 = new Web3(
  Web3.givenProvider || "https://eth-mainnet.alchemyapi.io/v2/<api-key>"
); // Alchemy API endpoint를 입력해야 합니다.
const alchemyWeb3 = createAlchemyWeb3("<api-key>"); // Alchemy API endpoint를 입력해야 합니다.

function NFTList() {
  /*
  const [nfts, setNFTs] = useState([]);

  useEffect(() => {
    async function fetchNFTs() {
      const accounts = await web3.eth.getAccounts();
      const owner = accounts[0];
      const nfts = await alchemyWeb3.alchemy.getNftsForOwner(owner);
      setNFTs(nfts);
    }
    fetchNFTs();
  }, []);

  return (
    <div>
      {nfts.map((nft) => (
        <div key={nft.tokenId}>
          <p>{nft.name}</p>
          <img src={nft.image} alt={nft.name} />
        </div>
      ))}
    </div>
  );
  */
}
