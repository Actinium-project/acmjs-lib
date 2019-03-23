// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731

module.exports = {
  actinium: {
    messagePrefix: '\x19Actinium Signed Message:\n',
    bech32: 'acm',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x35,
    scriptHash: 0x37,
    wif: 0x80
  },
  regtest: {
    messagePrefix: '\x19Actinum Signed Message:\n',
    bech32: 'racm',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef
  },
  testnet: {
    messagePrefix: '\x19Actinium Signed Message:\n',
    bech32: 'tacm',
    bip32: {
      public: 0x0436f6e1,
      private: 0x0436ef7d
    },
    pubKeyHash: 0x2b,
    scriptHash: 0x3a,
    wif: 0xef
  }
}
