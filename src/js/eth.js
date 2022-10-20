const address = '0x5FBB774F0a88f5DFE749B7cFFC734Ef864166A54';
const ABI = [
  {
    inputs: [
      { internalType: 'string', name: 'baseURI_', type: 'string' },
      { internalType: 'string', name: 'name_', type: 'string' },
      { internalType: 'string', name: 'symbol_', type: 'string' },
      { internalType: 'uint256', name: 'maxTotal_', type: 'uint256' },
      { internalType: 'uint256', name: 'maxMint_', type: 'uint256' },
      { internalType: 'uint256', name: 'preSaleMax_', type: 'uint256' },
      { internalType: 'uint256', name: 'price_', type: 'uint256' },
      { internalType: 'uint256', name: 'mintTime_', type: 'uint256' },
      { internalType: 'address', name: 'withdrawAddr_', type: 'address' },
      { internalType: 'bytes32', name: 'merkleRoot', type: 'bytes32' },
    ],
    stateMutability: 'payable',
    type: 'constructor',
  },
  { inputs: [], name: 'withdrawCallError', type: 'error' },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
      { indexed: true, internalType: 'address', name: 'approved', type: 'address' },
      { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
      { indexed: true, internalType: 'address', name: 'operator', type: 'address' },
      { indexed: false, internalType: 'bool', name: 'approved', type: 'bool' },
    ],
    name: 'ApprovalForAll',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
      { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'from', type: 'address' },
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getwithdrawAddr',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'owner', type: 'address' },
      { internalType: 'address', name: 'operator', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'maxMint',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'maxTotal',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'mintTime',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_to', type: 'address' },
      { internalType: 'uint256', name: '_n', type: 'uint256' },
    ],
    name: 'mintTo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '', type: 'address' }],
    name: 'mintedAddr',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  { inputs: [], name: 'name', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
  {
    inputs: [],
    name: 'owner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_quantity', type: 'uint256' },
      { internalType: 'bytes32[]', name: 'proof', type: 'bytes32[]' },
    ],
    name: 'preMint',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'preMintOpen',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  { inputs: [], name: 'preMintTarget', outputs: [], stateMutability: 'nonpayable', type: 'function' },
  {
    inputs: [],
    name: 'preSaleMax',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'price',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '_quantity', type: 'uint256' }],
    name: 'pubMint',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  { inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
  {
    inputs: [],
    name: 'root',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { internalType: 'bytes', name: 'data', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'operator', type: 'address' },
      { internalType: 'bool', name: 'approved', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'string', name: '_newBaseURI', type: 'string' }],
    name: 'setBaseURI',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '_price', type: 'uint256' }],
    name: 'setMintPrice',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '_mintTime', type: 'uint256' }],
    name: 'setMintTime',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_withdrawAddr', type: 'address' }],
    name: 'setwithdrawAddr',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'index', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'owner', type: 'address' },
      { internalType: 'uint256', name: 'index', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  { inputs: [], name: 'withdrawAll', outputs: [], stateMutability: 'payable', type: 'function' },
];
//主網請打 : '1'
const metamaskChainID = 11155111;
//主網請打 : '0x1'
const metamaskHexChainID = '0xaa36a7';
const chainName = 'sepolia';
//請使用自己的API Key
const infura_Id = 'c780b7e9416640ac8550712b8ed6c1ac';
const apiURL = `https://${chainName}.infura.io/v3/${infura_Id}`;
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
let web3Modal;
let provider;
let myContract;
let price;
let contractPrice;
let totalSupply;
let contractMinMint;
let contractMaxMint;
let lunchDate;
let signer;

function web3Wallet() {
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        // Mikko's test key - don't copy as your mileage may vary
        infuraId: infura_Id,
        bridge: 'https://bridge.walletconnect.org',
      },
    },
  };
  web3Modal = new Web3Modal({
    network: chainName,
    cacheProvider: false, // optional
    providerOptions, // required
    disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
  });
}
async function init() {
  getNFTInfo().then(() => {
    writeInfo();
  });
}
async function getNFTInfo() {
  provider = new ethers.providers.JsonRpcProvider(apiURL);
  myContract = new ethers.Contract(address, ABI, provider);
  price = await myContract.price();
  contractPrice = parseFloat(ethers.utils.formatUnits(price, 'ether')).toFixed(2);
  contractMinMint = Number(collectionInfo.minMint);
  contractMaxMint = Number(collectionInfo.maxMint);
  totalSupply = await myContract.totalSupply();
}
async function writeInfo() {
  document.getElementById('totalSupply').innerText = `${totalSupply} / ${collectionInfo.maxTotal}`;
  document.getElementById('nftPrice').innerText = contractPrice;
  document.getElementById('price').innerText = `${(contractPrice * contractMinMint).toFixed(2)}`;
  document.getElementById('transfer').innerText = 'Mint Now';
  document.getElementById('connectW').innerText = 'CONNECT WALLET';
  document.getElementById('connectInfo').innerText = 'unconnect...';
}
function isConnect() {
  const isConnect = document.getElementById('connectInfo').textContent;
  if (isConnect !== 'unconnect...') {
    // console.log(true);
    return true;
  } else {
    // console.log(false);
    return false;
  }
}
async function connect() {
  const connectInfo = document.getElementById('connectInfo').textContent;
  if (!isConnect()) {
    web3Wallet();
    try {
      const instance = await web3Modal.connect();
      provider = new ethers.providers.Web3Provider(instance);
      await provider.send('eth_requestAccounts', []);
      signer = provider.getSigner();
      await signer.getAddress().then(() => {
        getWallet();
      });
      instance.on('accountsChanged', (accounts) => {
        getWallet();
      });
      instance.on('chainChanged', (chainId) => {
        getWallet();
      });
    } catch (e) {
      console.log('Could not get a wallet connection', e);
      return 'err';
    }
  } else if (connectInfo === 'Loading...') {
    console.log('Page is Loading...');
  }
}
async function getWallet() {
  const params = [{ chainId: metamaskHexChainID }];
  const addr = await signer.getAddress();
  await provider.provider
    .request({
      method: 'wallet_switchEthereumChain',
      params: params,
    })
    .then(() => {
      document.getElementById('connectInfo').textContent = addr.slice(0, 6) + '...' + addr.slice(-3);
      document.getElementById('transfer').style.display = 'block';
      document.getElementById('connectW').style.display = 'none';
    });
  // console.log(addr);
}
function decrement() {
  contractMinMint = document.getElementById('nftsNumber').textContent;
  if (contractMinMint <= 1) {
    contractMinMint == 1;
  } else {
    contractMinMint--;
  }
  document.getElementById('nftsNumber').textContent = contractMinMint;
  document.getElementById('price').innerText = `${(contractPrice * contractMinMint).toFixed(2)}`;
}
function increment() {
  let contractMinMint = document.getElementById('nftsNumber').textContent;
  if (contractMinMint >= contractMaxMint) {
    contractMinMint == contractMaxMint;
  } else {
    contractMinMint++;
  }
  document.getElementById('nftsNumber').textContent = contractMinMint;
  document.getElementById('price').innerText = `${(contractPrice * contractMinMint).toFixed(2)}`;
}
async function mint() {
  let amount = document.getElementById('nftsNumber').textContent;
  console.log(amount);
  let totalPrice = document.getElementById('price').textContent;
  totalPrice = await ethers.utils.parseEther(totalPrice);
  totalPrice = parseInt(totalPrice).toString();
  myContract = new ethers.Contract(address, ABI, signer);
  try {
    const tx = await myContract.pubMint(amount, { value: totalPrice });
    await tx
      .wait()
      .then(async () => {
        totalSupply = await myContract.totalSupply();
      })
      .then(() => {
        alert(`Congratulations!\n You have minted ${amount} ${collectionInfo.projectName} !`);
        document.getElementById('totalSupply').innerText = `${totalSupply} / ${collectionInfo.maxTotal}`;
      });
  } catch (error) {
    console.log(error);
    if (error.code != 4001)
      alert(`Sorry! Your mint is failed...\n
        Please try it again!.`);
  }
}
//addEventListener
const con = document.getElementById('connectW');
con.addEventListener('click', connect);
const remCount = document.getElementById('remCount');
remCount.addEventListener('click', decrement);
const addCount = document.getElementById('addCount');
addCount.addEventListener('click', increment);
const mintBtn = document.getElementById('transfer');
mintBtn.addEventListener('click', async () => {
  mint();
});
// window.addEventListener('load', async () => {
//   init();
// });
init();