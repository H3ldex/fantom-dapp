//SPDX-License-Identifier: MIT

// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract NFT is Ownable, ERC721Enumerable {
    uint256 mintPrice;
    uint256 maxSupply;
    bool isSalePublic;

    constructor() payable ERC721("Cool Cats", "CC") {
        mintPrice = 2 ether;
        maxSupply = 100;
        isSalePublic = false;
    }

    function getIsSalePublic() internal view returns(bool) {
        return isSalePublic;
    }

    function setIsSalePublic(bool _isSalePublic) external onlyOwner {
        isSalePublic = _isSalePublic;
    }

    function mint() payable external {
        require(isSalePublic == true);
        require(msg.value == mintPrice);
        require(totalSupply() < maxSupply);

        _safeMint(msg.sender, (totalSupply() + 1));

    }
}