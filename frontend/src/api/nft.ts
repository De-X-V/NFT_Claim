import { firestore } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

interface NFT {
  id: string;
  claim: string;
  date: string;
  description: string;
  images: string;
}

export const getNFTs = async () => {
  const nftsCollectionRef = collection(firestore, "NFTs");
  const nftsSnapshot = await getDocs(nftsCollectionRef);
  const documents = nftsSnapshot.docs.map((doc) => {
    return {
      title: doc.id,
      ...doc.data(),
    };
  });
  console.log(documents);
  return documents;
};
