import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: 'http://localhost:3000/api/graphql',
    documents: ['src/**/*.tsx'],
    emitLegacyCommonJSImports: false,
    generates: {
        './src/gql/': {
            preset: 'client'
        }
    }
}

export default config