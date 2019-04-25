## 1. Install Dependencies
```
npm install --save-dev \
@babel/polyfill \
@babel/core \
@babel/preset-env \
@babel/preset-react \
babel-loader \
babel-plugin-transform-react-jsx-img-import \
jest \
enzyme \
enzyme-adapter-react-16 \
sinon \
dotenv \
cross-fetch \
react \
react-dom \
react-router-dom \
history \
prop-types \
react-redux \
redux \
redux-logger \
redux-thunk \
css-loader \
file-loader \
html-loader \
html-webpack-plugin \
img-loader \
mini-css-extract-plugin \
path \
postcss-loader \
node-sass \
autoprefixer \
sass-loader \
url-loader \
webpack \
webpack-cli \
webpack-dev-server
```

## 2. Setup the package.json
Add the lines below to the package.json file.
```
"scripts": {
  "test": "jest --coverage",
  "dev": "webpack --mode development --env.NODE_ENV=development",
  "staging": "webpack --mode production --env.NODE_ENV=staging",
  "build": "webpack --mode production --env.NODE_ENV=production",
  "watch": "webpack --watch --mode development --env.NODE_ENV=development",
  "start": "webpack-dev-server --mode development --env.NODE_ENV=development"
}
```

```
"browserslist": [
  "last 2 versions"
]
```

```
"jest": {
  "setupFilesAfterEnv": [
    "./src/setupTests.js"
  ],
  "moduleNameMapper":{
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js"
  }
}
```