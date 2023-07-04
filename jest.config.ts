export default {
    clearMocks: true,
    transform: {
        "^.+\\.(t|j)sx?$": [
            "@swc/jest",
            {
                jsc: {
                    parser: {
                        syntax: 'typescript',
                        tsx: false,
                        decorators: true,
                    },
                    target: 'es2017',
                    keepClassNames: true,
                    transform: {
                        legacyDecorator: true,
                        decoratorMetadata: true,
                    },
                },
                module: {
                    type: 'es6',
                    noInterop: false,
                }
            },
        ],
    },
    testTimeout: 10000
};