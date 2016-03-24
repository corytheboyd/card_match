# Card Matching Game

A simple card matching game. Satisfies requirements outlined here: https://docs.google.com/document/d/18Q4KV5_qr4hNdyp8SFeGTxoGamPIOitVrFZdQA_gfd0/pub

Install dependencies:
```
brew update && brew install nvm
nvm install && npm install
npm start
```

## Development

Run Webpack file watcher to automatically compile assets on file change:
```
npm install -g webpack
webpack --progress --colors --watch
```

Serve the content on `localhost:3000`:
```
npm start
```

Run the test suite:
```
npm test
```
