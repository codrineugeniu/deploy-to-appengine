import {server} from './src/server';

// Start the server
const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

export default server;
