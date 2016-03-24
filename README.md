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
webpack-dev-server
```

Visit `http://localhost:8080/webpack-dev-server/public` in your browser and navigate to the `public` directory:
![image](https://cloud.githubusercontent.com/assets/692632/14006276/05220630-f129-11e5-825f-52b4779463a5.png)

## Testing

Run the test suite:
```
npm test
```
