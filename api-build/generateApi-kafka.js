const { generateApi } = require('swagger-typescript-api');
const path = require("path");
const fs = require("fs");

/* NOTE: all fields are optional expect one of `output`, `url`, `spec` */
generateApi({
  name: "KafkaRest.ts",
  output: path.resolve(process.cwd(), "./src/api"),
  input: path.resolve(process.cwd(), './api-build/kafka-rest-openapi.yaml'),
  httpClientType: "axios", // or "fetch"
  defaultResponseAsSuccess: false,
  generateRouteTypes: false,
  generateResponses: true,
  toJS: true,
  extractRequestParams: false,
  extractRequestBody: false,
  prettier: {
    printWidth: 120,
    tabWidth: 2,
    trailingComma: "all",
    parser: "typescript",
  },
  defaultResponseType: "void",
  singleHttpClient: true,
  cleanOutput: false,
  enumNamesAsValues: false,
  moduleNameFirstTag: false,
  generateUnionEnums: false,
  extraTemplates: [],
  hooks: {
    onCreateComponent: (component) => {},
    onCreateRequestParams: (rawType) => {},
    onCreateRoute: (routeData) => {},
    onCreateRouteName: (routeNameInfo, rawRouteInfo) => {},
    onFormatRouteName: (routeInfo, templateRouteName) => {},
    onFormatTypeName: (typeName, rawTypeName) => {},
    onInit: (configuration) => {},
    onParseSchema: (originalSchema, parsedSchema) => {},
    onPrepareConfig: (currentConfiguration) => {},
  }
})
  .then(({ files, configuration }) => {
    files.forEach(({ content, name }) => {
      fs.writeFile(path, content);
    });
  })
  .catch(e => console.error(e))

