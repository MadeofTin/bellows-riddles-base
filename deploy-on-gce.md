
## Start with this.

https://cloud.google.com/deployment-manager/nodejs

SSH into your new node.js file

run
```bash
sudo apt-get update
sudo apt-get upgrade
```

This actually took me a little while.

Install git
```
sudo apt-get install git
```

Clone repo
```bash
git clone https://github.com/Tinmen/bellows-riddles-base.git
```


Try what the readme says and get an error...
```bash
gce:~/bellows-riddles-base/app$ sudo npm install

module.js:340
    throw err;
          ^
Error: Cannot find module 'npmlog'
    at Function.Module._resolveFilename (module.js:338:15)
    at Function.Module._load (module.js:280:25)
    at Module.require (module.js:364:17)
    at require (module.js:380:17)
    at /usr/local/bin/npm:19:11
    at Object.<anonymous> (/usr/local/bin/npm:87:3)
    at Module._compile (module.js:456:26)
    at Object.Module._extensions..js (module.js:474:10)
    at Module.load (module.js:356:32)
    at Function.Module._load (module.js:312:12)
```
...now I am stuck...
