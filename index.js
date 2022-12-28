const env = require('env-get');
const Web3 = require('web3')
var web3 = new Web3(new Web3.providers.HttpProvider(f"https://goerli.infura.io/v3/{env.get('PRIVATE_KEY')}"));
const address = '0x707c1343Af50B44889d692b6f7540e86df81f383';
const ABI = env.get('ABI_VALS');
const MY_ADRESS = '0xa89079d2280b5f9b4c05bc9421f2f00689f2f9b517b588584a439b9030b7c5b4'
web3.eth.getBalance
const myContract = new web3.eth.Contract(ABI, address, from {MY_ADRESS})

myContract.methods.transfer().call().then(console.log)

let data = myContract.metods.transfer(MY_ADRESS, web3.utils.toHex(0.0000011)).encodeABI()
console.log(data);

# Не успел дотестить и додебажить к сожалению :(
