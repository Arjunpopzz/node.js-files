// console.log("welcome to node.js");

// const fs = require("fs");
// fs.copyFileSync("1.txt","2.txt")
// -------------------------------------
// var assert = require('assert');
//    var marvel = require('mpm.marvel');
//
//    var marvelClient = marvel(yourPublicKey,yourPrivateKey);
//
//    // get characters
//    marvelClient.characters(function(err,result){
//        assert.equal(result.code,200);
//    });
// ==============================================
const supervillains = require('supervillains');

supervillains.all;
//=> ['Abattoir', 'Able Crown', …]

supervillains.random();
//=> 'Mud Pack'
console.log(supervillains);
