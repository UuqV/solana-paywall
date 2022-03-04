import * as web3 from '@solana/web3.js';

// callback: The function to call after the transaction is signed.
// This closes our paywall.
// milliLamports: The price to charge the user in "milli-lamports" (.001 SOL),
// approximately 10 cents (for now)
// reciever: The public key of the wallet to send payment to.
// Should be passed as an environment variable wherever your site's deployed.

const payWithSol = (callback, milliLamports, reciever) => {
  window.solana.connect().then(function (userKey) {
    // Connect to cluster
    var connection = new web3.Connection(web3.clusterApiUrl('devnet'), 'confirmed');

    var web3userKey = new web3.PublicKey(userKey.publicKey);
    var web3reciever = new web3.PublicKey(reciever);

    // Add transfer instruction to transaction
    connection.getLatestBlockhash().then((blockhashObj) => {
      var transaction = new web3.Transaction({
        recentBlockhash: blockhashObj.blockhash,
        feePayer: web3userKey,
      }).add(
        web3.SystemProgram.transfer({
          fromPubkey: web3userKey,
          toPubkey: web3reciever,
          lamports: web3.LAMPORTS_PER_SOL * .001 * milliLamports,
        }),
      );

      // Sign transaction, broadcast, and confirm
      window.solana.signAndSendTransaction(transaction).then((res) => {
        callback();
      });
    });
  });
};

export default payWithSol;
