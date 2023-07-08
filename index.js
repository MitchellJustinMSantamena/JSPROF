let nftArray = [];

function mintNFT(brand, collection, name, description) {
 
  let nft = {
    brand: brand,
    collection: collection,
    name: name,
    description: description
  };

  nftArray.push(nft);
}

mintNFT("OXGN", "OXGN Collection", "OXGN", "OXGN is a fashion brand designed for all");
mintNFT("Bench", "Bench Tshirt Collection", "Bench", "Bench is a Philippine retail brand of clothing");

console.log(nftArray); 
