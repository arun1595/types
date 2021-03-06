/* GENERATED BY TYPECHAIN VER. 0.2.4 */
/* tslint:disable */

import { BigNumber } from 'bignumber.js';
import {
  TypeChainContract,
  promisify,
  ITxParams,
  IPayableTxParams,
  DeferredTransactionWrapper,
  DeferredEventWrapper
} from './typechain-runtime';

export class MarketContractFactoryOraclize extends TypeChainContract {
  public readonly rawWeb3Contract: any;

  public constructor(web3: any, address: string | BigNumber) {
    const abi = [
      {
        constant: true,
        inputs: [],
        name: 'collateralPoolFactoryAddress',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'MKT_TOKEN_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'owner',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'marketContractRegistry',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: 'newOwner', type: 'address' }],
        name: 'transferOwnership',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          { name: 'registryAddress', type: 'address' },
          { name: 'mktTokenAddress', type: 'address' },
          { name: 'marketCollateralPoolFactoryAddress', type: 'address' }
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'constructor'
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: 'creator', type: 'address' },
          { indexed: true, name: 'contractAddress', type: 'address' }
        ],
        name: 'MarketContractCreated',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: 'previousOwner', type: 'address' },
          { indexed: true, name: 'newOwner', type: 'address' }
        ],
        name: 'OwnershipTransferred',
        type: 'event'
      },
      {
        constant: false,
        inputs: [
          { name: 'contractName', type: 'string' },
          { name: 'collateralTokenAddress', type: 'address' },
          { name: 'contractSpecs', type: 'uint256[5]' },
          { name: 'oracleDataSource', type: 'string' },
          { name: 'oracleQuery', type: 'string' }
        ],
        name: 'deployMarketContractOraclize',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: 'registryAddress', type: 'address' }],
        name: 'setRegistryAddress',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      }
    ];
    super(web3, address, abi);
  }

  static async createAndValidate(
    web3: any,
    address: string | BigNumber
  ): Promise<MarketContractFactoryOraclize> {
    const contract = new MarketContractFactoryOraclize(web3, address);
    const code = await promisify(web3.eth.getCode, [address]);

    // in case of missing smartcontract, code can be equal to "0x0" or "0x" depending on exact web3 implementation
    // to cover all these cases we just check against the source code length — there won't be any meaningful EVM program in less then 3 chars
    if (code.length < 4) {
      throw new Error(`Contract at ${address} doesn't exist!`);
    }
    return contract;
  }

  public get collateralPoolFactoryAddress(): Promise<string> {
    return promisify(this.rawWeb3Contract.collateralPoolFactoryAddress, []);
  }
  public get MKT_TOKEN_ADDRESS(): Promise<string> {
    return promisify(this.rawWeb3Contract.MKT_TOKEN_ADDRESS, []);
  }
  public get owner(): Promise<string> {
    return promisify(this.rawWeb3Contract.owner, []);
  }
  public get marketContractRegistry(): Promise<string> {
    return promisify(this.rawWeb3Contract.marketContractRegistry, []);
  }

  public transferOwnershipTx(newOwner: BigNumber | string): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, 'transferOwnership', [
      newOwner.toString()
    ]);
  }
  public deployMarketContractOraclizeTx(
    contractName: string,
    collateralTokenAddress: BigNumber | string,
    contractSpecs: BigNumber[],
    oracleDataSource: string,
    oracleQuery: string
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, 'deployMarketContractOraclize', [
      contractName.toString(),
      collateralTokenAddress.toString(),
      contractSpecs.map(val => val.toString()),
      oracleDataSource.toString(),
      oracleQuery.toString()
    ]);
  }
  public setRegistryAddressTx(
    registryAddress: BigNumber | string
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, 'setRegistryAddress', [
      registryAddress.toString()
    ]);
  }

  public MarketContractCreatedEvent(eventFilter: {
    creator?: BigNumber | string | Array<BigNumber | string>;
    contractAddress?: BigNumber | string | Array<BigNumber | string>;
  }): DeferredEventWrapper<
    { creator: BigNumber | string; contractAddress: BigNumber | string },
    {
      creator?: BigNumber | string | Array<BigNumber | string>;
      contractAddress?: BigNumber | string | Array<BigNumber | string>;
    }
  > {
    return new DeferredEventWrapper<
      { creator: BigNumber | string; contractAddress: BigNumber | string },
      {
        creator?: BigNumber | string | Array<BigNumber | string>;
        contractAddress?: BigNumber | string | Array<BigNumber | string>;
      }
    >(this, 'MarketContractCreated', eventFilter);
  }
  public OwnershipTransferredEvent(eventFilter: {
    previousOwner?: BigNumber | string | Array<BigNumber | string>;
    newOwner?: BigNumber | string | Array<BigNumber | string>;
  }): DeferredEventWrapper<
    { previousOwner: BigNumber | string; newOwner: BigNumber | string },
    {
      previousOwner?: BigNumber | string | Array<BigNumber | string>;
      newOwner?: BigNumber | string | Array<BigNumber | string>;
    }
  > {
    return new DeferredEventWrapper<
      { previousOwner: BigNumber | string; newOwner: BigNumber | string },
      {
        previousOwner?: BigNumber | string | Array<BigNumber | string>;
        newOwner?: BigNumber | string | Array<BigNumber | string>;
      }
    >(this, 'OwnershipTransferred', eventFilter);
  }
}
