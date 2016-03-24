# Card Matching Game

A simple card matching game. Satisfies requirements outlined here: https://docs.google.com/document/d/18Q4KV5_qr4hNdyp8SFeGTxoGamPIOitVrFZdQA_gfd0/pub

1. Run the server:

  ```
  brew update && brew install nvm && nvm install
  npm start
  ```

1. Visit `localhost:3000` in your browser

## Development

Run Webpack with the `--watch` command to automatically compile the application when source files are changed:
```
webpack --color --progress --watch
```

Then, serve the build on `localhost:3000`:
```
npm start
```

Alternatively, you can use `webpack-dev-server` to accomplish it all in one fell swoop, with bonus live reloading:
```
webpack-dev-server
```

Then visit http://localhost:8080/webpack-dev-server/build.

## Testing

Run the test suite:
```
npm test
```
