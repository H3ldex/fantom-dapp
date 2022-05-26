//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzepplin/contract/interface/library/struct/enum/constant/function";


contract NFT is Ownable, ERC721Enumerable {
    using Strings for uint256;
    uint256 mintPrice;
    uint256 maxSupply;
    bool isSalePublic;
    string baseTokenURI;
    bool revealed;
    string notRevealedUri;


    constructor() payable ERC721("Cool Cats", "CC") {
        mintPrice = 2 ether;
        maxSupply = 100;
        isSalePublic = false;
        baseTokenURI = "";
        revealed = false;
        notRevealedUri = "";
    }

    function getIsSalePublic() internal view returns(bool) {
        return isSalePublic;
    }

    function setIsSalePublic(bool _isSalePublic) external onlyOwner {
        isSalePublic = _isSalePublic;
    }

    function withdraw() external onlyOwner {
          (bool success, ) = payable(owner()).call{value: address(this).balance}("");
          require(success, "withdraw failed");
     }

     function setCost(uint _mintPrice) external onlyOwner {
         mintPrice = _mintPrice;
     }

     function tokenURI(uint256 tokenId)
    public
    view
    virtual
    override
    returns (string memory)
  {
    require(
      _exists(tokenId),
      "ERC721Metadata: URI query for nonexistent token";
    );

    if(revealed == false) {
        return notRevealedUri;
    }

    string memory baseTokenURI = _baseURI();
    return bytes(baseTokenURI).length > 0
        ? string(abi.encodePacked(baseTokenURI, tokenId.toString(), ".json"))
        : "";
  }

    function setRevealed(bool _revealed) external onlyOwner
    {
        revealed = _revealed;

    function mint() payable external {
        require(isSalePublic == true);
        require(msg.value >= mintPrice);
        require(totalSupply() < maxSupply);
        

        _safeMint(msg.sender, (totalSupply() + 1));

    }

}