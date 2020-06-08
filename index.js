const browserSync = require('browser-sync').create();

const args = process.argv.slice(2);

const sourceDir = '.';

const runServer = () => {
  browserSync.init({ server: sourceDir });

  browserSync
    .watch(`${sourceDir}/**/*`)
    .on('change', browserSync.reload);;
};

switch (args[0]) {
  case undefined: case '-w': case '--watch':
    runServer();
    break;
  default:
    console.error(`Unknown arg "${args[0]}" ¯\\_(ツ)_/¯`);
    process.exit(1);
}
