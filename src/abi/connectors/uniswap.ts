import { AbiItem } from 'web3-utils'

export const uniswap: AbiItem[] = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'buyAddr',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'sellAddr',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'buyAmt',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'unitAmt',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'getId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'setId',
        type: 'uint256',
      },
    ],
    name: 'buy',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'tokenA',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'tokenB',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amtA',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'unitAmt',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'slippage',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'getId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'setId',
        type: 'uint256',
      },
    ],
    name: 'deposit',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'buyAddr',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'sellAddr',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'sellAmt',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'unitAmt',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'getId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'setId',
        type: 'uint256',
      },
    ],
    name: 'sell',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'tokenA',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'tokenB',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'uniAmt',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'unitAmtA',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'unitAmtB',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'getId',
        type: 'uint256',
      },
      {
        internalType: 'uint256[]',
        name: 'setIds',
        type: 'uint256[]',
      },
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
]
