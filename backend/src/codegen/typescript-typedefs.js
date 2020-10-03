const { printSchema } = require("graphql");
const gql = require("graphql-tag");

// From https://github.com/dotansimha/graphql-code-generator/issues/1708#issuecomment-496022731
module.exports = {
  plugin: (schema) => {
    const printed = printSchema(schema);
    const typeDefs = gql(printed);
    if (typeDefs.loc) {
      delete typeDefs.loc;
    }

    return `
import { DocumentNode } from 'graphql'

const typeDefs = ${JSON.stringify(typeDefs, null, 2)} as DocumentNode
export {
  typeDefs,
}
    `;
  },
};
