const NFTs = [
    {
        name: "Nike Air Max 1",
        size: "10",
        properties: "Leather",
        color: "White",
        brand: "Nike"
    },
    {
        name: "Adidas Superstar",
        size: "11",
        properties: "Canvas",
        color: "Black",
        brand: "Adidas"
    },
    {
        name: "Jordan 1",
        size: "12",
        properties: "Suede",
        color: "Red",
        brand: "Jordan"
    }
  ];
 
  function mintNFT(nft) {
    NFTs.push(nft);
    return nft;
  }
 
  function listNFTs() {
    for (let i = 0; i < NFTs.length; i++) {
        console.log(NFTs[i]);
    }
    console.log("------------------");
  }
 
  function getTotalSupply() {
    console.log(`Total Supply: ${NFTs.length}`);
    console.log("------------------");
  }
 
  // Call your functions below this line
 
  listNFTs();
 
  mintNFT({
    name: "Vans Old Skool",
    size: "9",
    properties: "Canvas",
    color: "Blue",
    brand: "Vans"
  });
  mintNFT({
    name: "Converse Chuck Taylor All Star",
    size: "8",
    properties: "Leather",
    color: "White",
    brand: "Converse"
  });
  mintNFT({
    name: "Balenciaga Triple S",
    size: "7",
    properties: "Mesh",
    color: "Yellow",
    brand: "Balenciaga"
  });
  listNFTs();
 
  getTotalSupply()
