const yargs = require('yargs');
const crypto = require('crypto');

const argv = yargs

  .option('length', {
    alias: 'l',
    description: 'Length of the generated password',
    type: 'number',
    default: 12,
  })

  .option('type', {
    alias: 't',
    description: 'Type of characters to use',
    choices: ['alphanumeric', 'numeric', 'alpha'],
    default: 'alphanumeric',
  })

  .help()
  
  .argv


var charset;

if (argv.type === 'alphanumeric') {
  charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
} 

else if (argv.type === 'alpha') {
    charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
} 

else if (argv.type === 'numeric') {
  charset = '0123456789';
}

let password = '';
const charactersLength = charset.length;
for (let i = 0; i < argv.length; i++) {
  const randomIndex = crypto.randomInt(charactersLength);
  password += charset.charAt(randomIndex);
}


console.log(password);
