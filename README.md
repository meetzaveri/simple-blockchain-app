# simple-blockchain-app
Blockchain app with node.js

## Overview

Class:
- Block : is a data structure which holds prevHash,index and data. Reliable for holding previous Block's hash
- Chain : An `array` of blocks and contains if data has been tampered or not by checking validity of checking `prevHash` and `hash`

