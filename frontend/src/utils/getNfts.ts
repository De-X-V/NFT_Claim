export const getNftsForOwner = async (ownerAddress: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const Apikey = import.meta.env.VITE_APP_API_KEY;
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
      `https://eth-goerli.g.alchemy.com/nft/v2/${Apikey}/getNFTs?owner=${ownerAddress}&withMetadata=true`,
      true
    );

    xhr.send();
  });
};
