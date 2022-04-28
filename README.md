# TYPESCRIPT FUNDAMENTALS

## Introduction

A simple guide on how to setup a Basic TypeScript project.


## Steps to Setup


### 1. Initialize package.json

```bash
npm init
```

or

```bash
yarn init
```

### 2. Install Typescript dependencies

#### 2.1 Install TypeScript


```bash
npm install -g --save-dev typescript
```

#### 2.2 Install TS-NODE for TypeScript
```bash
npm install -g --save-dev ts-node
```


#### 2.3 Install Types for NodeJS and ExpressJS
    
```bash
npm install -g --save-dev @types/node
```
    
```bash
npm install -g --save-dev @types/express
```


#### 2.4 Install Nodemon for watching changes

```bash
npm install -g --save-dev nodemon
```

### 3. Setup tsconfig.json

```bash
tsc --init
```

The command above will create a default tsconfig.json file in the root of your project.


### 4. Configure tsconfig.json

```json
"compilerOptions": {
    "target":"es6", /* Eg: es5, es6, es2015, es2016 */
    "module": "commonjs",  /* Enables CommonJS module output */
    "rootDir": "./src", /* Specifies the root directory of the project */
    "outDir": "./dist",  /* Specifies the output directory for generated files */
    "esModuleInterop": true,  /* Enable this to use import/export syntax */
    "strict": true,   /* Enable this to use strict mode */
    "skipLibCheck": true  /* Enable this to skip checking for commonjs modules */
},
 "include": [
    "src/**/*.ts" /* Include every ts file in source folder */
  ],
  "exclude": [
    "node_modules" /* exclude everything in node_modules */
  ]

```

### 5. Configure package.json Scripts

```json
"scripts": {
   "start": "node dist/server.js",
    "build": "tsc -p tsconfig.json",
    "dev": "nodemon src/server.ts"
}
```



### 6. Done! 🎉🎊🥳



## Executions

#### To run on development mode

```bash
npm run dev
```

#### To build the project

```bash
npm run build
```

#### To start the project

```bash
npm run start
```
