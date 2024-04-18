const { generateService } = require('@umijs/openapi');

const basicConfig = {
  serversPath: './src/apis',
  // requestLibPath: "import request from '/@/utils/require'",
  dataFields: ['result'],
};

const importList = [
  {
    schemaPath: 'http://119.91.37.36:10001/v3/api-docs',
    // schemaPath: 'http://localhost:10000/v3/api-docs',

    projectName: 'manager',
    requestLibPath: "import request from '../../utils/require'; import { COMMON_BASE_URL } from '../../../constant/constant'; ",
    apiPrefix: 'COMMON_BASE_URL',
  },
  // {
  //   schemaPath: 'http://47.99.90.88:8890/v3/api-docs',
  //   projectName: 'common',
  //   requestLibPath: "import request from '@/utils/require'; import { COMMON_BASE_URL } from '../../../constant/constant'; ",
  //   apiPrefix: 'COMMON_BASE_URL',
  // },
  // {
  //   schemaPath: 'http://47.99.90.88:8887/v3/api-docs',
  //   projectName: 'manager',
  //   requestLibPath: "import request from '@/utils/require'; import { MANAGER_BASE_URL } from '../../../constant/constant'; ",
  //   apiPrefix: 'MANAGER_BASE_URL',
  // },
];
function openapiGenerate() {
  for (const item of importList) {
    generateService({
      ...basicConfig,
      ...item,
    });
  }
}
openapiGenerate();
