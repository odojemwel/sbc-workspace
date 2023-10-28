import * as Web3 from '@solana/web3.js';

async function main() {
    const publicKey = new Web3.PublicKey('8gWy1tAcoNjAfU7B5pkh7gxLWZX8RAy2Qy93Y1bzomV4');
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const balance = await connection.getBalance(publicKey);
    console.log('balance', balance);
}

main()