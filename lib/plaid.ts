import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid';

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': '671e37e1704c96001926f99c',
      'PLAID-SECRET': '29ab40859b61753a580178bf774d6c',
    }
  }
})

export const plaidClient = new PlaidApi(configuration);