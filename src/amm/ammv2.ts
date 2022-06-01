export type Ammv2 = {
  "version": "0.0.0",
  "name": "ammv2",
  "instructions": [
    {
      "name": "initializeAmm",
      "accounts": [
        {
          "name": "amm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeTo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "feeNumerator",
          "type": "u64"
        },
        {
          "name": "feeDenominator",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initializePool",
      "accounts": [
        {
          "name": "mint0",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint1",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "amm",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammFeeTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "liquidityLocker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolFeeTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "feeNumerator",
          "type": "u64"
        },
        {
          "name": "feeDenominator",
          "type": "u64"
        }
      ]
    },
    {
      "name": "addLiquidity",
      "accounts": [
        {
          "name": "amm",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "liquidityLocker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userPoolAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amountLiq0",
          "type": "u64"
        },
        {
          "name": "amountLiq1",
          "type": "u64"
        }
      ]
    },
    {
      "name": "removeLiquidity",
      "accounts": [
        {
          "name": "amm",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userPoolAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "burnAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "swap",
      "accounts": [
        {
          "name": "amm",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultSrc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultDst",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userSrc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userDst",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amountIn",
          "type": "u64"
        },
        {
          "name": "minAmountOut",
          "type": "u64"
        },
        {
          "name": "deadline",
          "type": "u64"
        }
      ]
    },
    {
      "name": "setAmmFeeTo",
      "accounts": [
        {
          "name": "amm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeTo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "setAmmFeeRate",
      "accounts": [
        {
          "name": "amm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "feeNumerator",
          "type": "u64"
        },
        {
          "name": "feeDenominator",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "poolState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalAmountMinted",
            "type": "u64"
          },
          {
            "name": "feeNumerator",
            "type": "u64"
          },
          {
            "name": "feeDenominator",
            "type": "u64"
          },
          {
            "name": "kLast",
            "type": "u64"
          },
          {
            "name": "minimumLiquidity",
            "type": "u64"
          },
          {
            "name": "liquidityLocker",
            "type": "publicKey"
          },
          {
            "name": "feeTo",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "swapState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "feeTo",
            "type": "publicKey"
          },
          {
            "name": "feeNumerator",
            "type": "u64"
          },
          {
            "name": "feeDenominator",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "ErrorCode",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "NotEnoughBalance"
          },
          {
            "name": "NoPoolMintOutput"
          },
          {
            "name": "BurnTooMuch"
          },
          {
            "name": "NotEnoughOut"
          },
          {
            "name": "RequestExpired"
          },
          {
            "name": "InvalidFeeRate"
          },
          {
            "name": "FeeSmallerThanAMM"
          }
        ]
      }
    }
  ]
};

export const IDL: Ammv2 = {
  "version": "0.0.0",
  "name": "ammv2",
  "instructions": [
    {
      "name": "initializeAmm",
      "accounts": [
        {
          "name": "amm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeTo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "feeNumerator",
          "type": "u64"
        },
        {
          "name": "feeDenominator",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initializePool",
      "accounts": [
        {
          "name": "mint0",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint1",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "amm",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammFeeTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "liquidityLocker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolFeeTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "feeNumerator",
          "type": "u64"
        },
        {
          "name": "feeDenominator",
          "type": "u64"
        }
      ]
    },
    {
      "name": "addLiquidity",
      "accounts": [
        {
          "name": "amm",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "liquidityLocker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userPoolAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amountLiq0",
          "type": "u64"
        },
        {
          "name": "amountLiq1",
          "type": "u64"
        }
      ]
    },
    {
      "name": "removeLiquidity",
      "accounts": [
        {
          "name": "amm",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userPoolAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "burnAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "swap",
      "accounts": [
        {
          "name": "amm",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultSrc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultDst",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userSrc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userDst",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amountIn",
          "type": "u64"
        },
        {
          "name": "minAmountOut",
          "type": "u64"
        },
        {
          "name": "deadline",
          "type": "u64"
        }
      ]
    },
    {
      "name": "setAmmFeeTo",
      "accounts": [
        {
          "name": "amm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeTo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "setAmmFeeRate",
      "accounts": [
        {
          "name": "amm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "feeNumerator",
          "type": "u64"
        },
        {
          "name": "feeDenominator",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "poolState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalAmountMinted",
            "type": "u64"
          },
          {
            "name": "feeNumerator",
            "type": "u64"
          },
          {
            "name": "feeDenominator",
            "type": "u64"
          },
          {
            "name": "kLast",
            "type": "u64"
          },
          {
            "name": "minimumLiquidity",
            "type": "u64"
          },
          {
            "name": "liquidityLocker",
            "type": "publicKey"
          },
          {
            "name": "feeTo",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "swapState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "feeTo",
            "type": "publicKey"
          },
          {
            "name": "feeNumerator",
            "type": "u64"
          },
          {
            "name": "feeDenominator",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "ErrorCode",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "NotEnoughBalance"
          },
          {
            "name": "NoPoolMintOutput"
          },
          {
            "name": "BurnTooMuch"
          },
          {
            "name": "NotEnoughOut"
          },
          {
            "name": "RequestExpired"
          },
          {
            "name": "InvalidFeeRate"
          },
          {
            "name": "FeeSmallerThanAMM"
          }
        ]
      }
    }
  ]
};
