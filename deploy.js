const compileContracts = require('./compile')
const Web3 = require('web3')
let mnemonic = '..............'
const Wallke = require('truffle-hdwallet-provider')
const provider = new Wallke(mnemonic,'https://rinkeby.infura.io/.....')
const web3 = new Web3(provider);


async function deployContracts(compileContract, contractName) {
    const {interface,bytecode} = compileContract
    let gasEstimate = await web3.eth.estimateGas({data: '0x' + bytecode});
    const accounts = await web3.eth.getAccounts();
    let account = accounts[0];
    console.log('account1: ' + account);
    const contract = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode})
        .send({from: account, gas: gasEstimate});

    console.log("address: " + contract.options.address + " => " + contractName);
    console.log('--------------------------------------FundingFactory interface');
    console.log(interface);


}
deploy = async () => {
    await deployContracts(compileContracts.FundingFactory, 'FundingFactory');
    // await deployContract(compileContracts.Funding, 'Funding');

    console.log('--------------------------------------Funding interface');
    console.log(compileContracts.Funding.interface);

};

deploy();