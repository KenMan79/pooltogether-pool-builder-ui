import PoolWithMultipleWinnersBuilderMainnet from '@pooltogether/pooltogether-contracts/deployments/mainnet/PoolWithMultipleWinnersBuilder.json'
// import PoolWithMultipleWinnersBuilderRopsten from '@pooltogether/pooltogether-contracts/deployments/ropsten/PoolWithMultipleWinnersBuilder.json'
import PoolWithMultipleWinnersBuilderRinkeby from '@pooltogether/pooltogether-contracts/deployments/rinkeby/PoolWithMultipleWinnersBuilder.json'
import PoolWithMultipleWinnersBuilderSokol from '@pooltogether/pooltogether-contracts/deployments/poaSokol/PoolWithMultipleWinnersBuilder.json'

import RNGBlockhashMainnet from '@pooltogether/pooltogether-rng-contracts/deployments/mainnet/RNGBlockhash.json'
// import RNGBlockhashRopsten from '@pooltogether/pooltogether-rng-contracts/deployments/ropsten/RNGBlockhash.json'
import RNGBlockhashRinkeby from '@pooltogether/pooltogether-rng-contracts/deployments/rinkeby/RNGBlockhash.json'
import RNGBlockhashRinkebySokol from '@pooltogether/pooltogether-rng-contracts/deployments/poaSokol_77/RNGBlockhash.json'

import RNGChainlinkMainnet from '@pooltogether/pooltogether-rng-contracts/deployments/mainnet/RNGChainlink.json'
import RNGChainlinkRinkeby from '@pooltogether/pooltogether-rng-contracts/deployments/rinkeby/RNGChainlink.json'

export const TICKET_DECIMALS = '18'

export const DEFAULT_TOKEN_PRECISION = 18

export const PRIZE_POOL_TYPE = Object.freeze({
  compound: 'compound',
  stake: 'stake'
})

export const SUPPORTED_NETWORKS = [1, 3, 4, 77, 31337, 1234]

export const CTOKEN_UNDERLYING_TOKEN_DECIMALS = Object.freeze({
  cDai: 18,
  cUsdc: 6,
  cComp: 18,
  cUni: 18,
  cUsdt: 6,
  cBat: 18,
  cWbtc: 8,
  cZrx: 18
})

export const CONTRACT_ADDRESSES = {
  1: {
    cDai: '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643',
    cUsdc: '0x39AA39c021dfbaE8faC545936693aC917d5E7563',
    cUsdt: '0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9',
    cBat: '0x6C8c6b02E7b2BE14d4fA6022Dfd6d75921D90E4E',
    cComp: '0x70e36f6bf80a52b3b46b3af8e106cc0ed743e8e4',
    cUni: '0x35a18000230da775cac24873d00ff85bccded550',
    cWbtc: '0xC11b1268C1A384e55C48c2391d8d480264A3A7F4',
    cZrx: '0xB3319f5D18Bc0D84dD1b4825Dcde5d5f7266d407',
    POOL_WITH_MULTIPLE_WINNERS_BUILDER: PoolWithMultipleWinnersBuilderMainnet.address,
    RNG_SERVICE: {
      blockhash: RNGBlockhashMainnet.address,
      chainlink: RNGChainlinkMainnet.address
    }
  },
  // 3: {
  //   cDai: '0xdb5Ed4605C11822811a39F94314fDb8F0fb59A2C',
  //   cUsdc: '0x8aF93cae804cC220D1A608d4FA54D1b6ca5EB361',
  //   cUsdt: '0x135669c2dcBd63F639582b313883F101a4497F76',
  //   cBat: '0x9E95c0b2412cE50C37a121622308e7a6177F819D',
  //   cWbtc: '0x58145Bc5407D63dAF226e4870beeb744C588f149',
  //   cZrx: '0x00e02a5200CE3D5b5743F5369Deb897946C88121',
  //   COMPOUND_PRIZE_POOL_BUILDER: CompoundPrizePoolBuilderRopsten.address,
  //   STAKE_PRIZE_POOL_BUILDER: StakePrizePoolBuilderRopsten.address,
  //   MULTIPLE_RANDOM_WINNERS_BUILDER: MultipleWinnersBuilderRopsten.address,
  //   POOL_WITH_MULTIPLE_WINNERS_BUILDER: PoolWithMultipleWinnersBuilderRopsten.address,
  //   RNG_SERVICE: {
  //     blockhash: RNGBlockhashRopsten.address
  //   }
  // },
  4: {
    cDai: '0x6D7F0754FFeb405d23C51CE938289d4835bE3b14',
    cUsdc: '0x5B281A6DdA0B271e91ae35DE655Ad301C976edb1',
    cUsdt: '0x2fB298BDbeF468638AD6653FF8376575ea41e768',
    cBat: '0xEBf1A11532b93a529b5bC942B4bAA98647913002',
    cWbtc: '0x0014F450B8Ae7708593F4A46F8fa6E5D50620F96',
    cZrx: '0x52201ff1720134bBbBB2f6BC97Bf3715490EC19B',
    POOL_WITH_MULTIPLE_WINNERS_BUILDER: PoolWithMultipleWinnersBuilderRinkeby.address,
    RNG_SERVICE: {
      blockhash: RNGBlockhashRinkeby.address,
      chainlink: RNGChainlinkRinkeby.address
    }
  },
  31337: {
    cDai: '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643',
    cUsdc: '0x39AA39c021dfbaE8faC545936693aC917d5E7563',
    cUsdt: '0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9',
    cBat: '0x6C8c6b02E7b2BE14d4fA6022Dfd6d75921D90E4E',
    cComp: '0x70e36f6bf80a52b3b46b3af8e106cc0ed743e8e4',
    cUni: '0x35a18000230da775cac24873d00ff85bccded550',
    cWbtc: '0xC11b1268C1A384e55C48c2391d8d480264A3A7F4',
    cZrx: '0xB3319f5D18Bc0D84dD1b4825Dcde5d5f7266d407',
    POOL_WITH_MULTIPLE_WINNERS_BUILDER: PoolWithMultipleWinnersBuilderMainnet.address,
    RNG_SERVICE: {
      blockhash: RNGBlockhashMainnet.address,
      chainlink: RNGChainlinkMainnet.address
    }
  },
  77: {
    POOL_WITH_MULTIPLE_WINNERS_BUILDER: PoolWithMultipleWinnersBuilderSokol.address,
    RNG_SERVICE: {
      blockhash: RNGBlockhashRinkebySokol.address
    }
  }
}

export const DEFAULT_INPUT_CLASSES =
  'w-full text-inverse bg-transparent trans focus:outline-none leading-none'
export const DEFAULT_INPUT_LABEL_CLASSES = 'mt-0 mb-1 text-xs sm:text-sm'
export const DEFAULT_INPUT_GROUP_CLASSES = 'trans py-2 px-5 sm:py-4 sm:px-10 bg-body'

export const MAX_EXIT_FEE_PERCENTAGE = 10
export const MAX_TIMELOCK_DURATION_COEFFICIENT = 4
export const FEE_DECAY_DURATION_COEFFICIENT = 2

// Cookie strings
export const SELECTED_WALLET_COOKIE_KEY = 'selectedWallet'

// Min decimal for day inputs to allow minutes (0.0001 ≈ 8 seconds)
export const DAYS_STEP = 0.0001
