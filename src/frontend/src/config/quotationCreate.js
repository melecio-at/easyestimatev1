export const defaultProjectFilers = {
  frameworks: [],
  developmentTypes: [],
  functionTypes: [],
  assumedNumOfFields: [
    {
      id: 1,
      value: 1,
      label: '',
    },
  ],
  frameworkDevLanguages: [],
  masterListFunctions: [],
};

export const defaultFunction = {
  id: 1,
  detailFunctionOptions: [],
  functionName: '',
  functionType: 0,
  numFields: 1,
  details: [],
};

export const defaultUser = {
  id: 1,
  userName: 'ユーザー',
  framework: '',
  language: '',
  languageOptions: [],
  functions: [defaultFunction],
  incrementingCounts: 1,
};

export const expectedNumOfUsers = [
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
];

export const defaultUserDetails = {
  name: '',
  email_address: '',
  business_type: 'company',
  company_name: '',
  department: 0,
  position: 0,
  company_url: '',
  business_license: '',
  get_intouched: true,
  accept_terms: true,
};
