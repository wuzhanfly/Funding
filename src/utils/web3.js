import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // 检查web3是否安装
    web3 = new Web3(window.web3.currentProvider);
    console.log('Injected web3 detected.');
    console.log(web3.version)
} else {
    // 如果没有采用infura的http的web3
    const provider = new Web3.providers.HttpProvider(

        'https://rinkeby.infura.io/v3/......'

    );
    web3 = new Web3(provider);
    console.log('No web3 instance injected, using rinkeby web3.');
}

export default web3;