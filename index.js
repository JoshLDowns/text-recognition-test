//let s = "Inspect the room";

//function resultCheck(sentence) {
//    a = sentence.split(' ');
//    let sObj = {};
//    a.forEach(word => {
//        sObj[word] = [];
//        wordnet.lookupSynonyms(word, function (results) {
//            results.forEach(function (result) {
//                sObj[word].push(result.synonyms);
//            });
//            sObj[word] = sObj[word].join().split(',');
//            console.log(sObj);
//        });
//    });
//    return sObj;
//}
//let newOb = resultCheck(s);
//console.log(newOb);

//let s = "Inspect the room";
//
//function resultCheck(sentence) {
//    a = sentence.split(' ');
//    let sObj = {};
//    let p = new Promise((resolve, reject) => {
//        a.forEach(word => {
//            sObj[word] = [];
//            wordnet.lookupSynonyms(word, function (results) {
//                results.forEach(function (result) {
//                    sObj[word].push(result.synonyms);
//                });
//                sObj[word] = sObj[word].join().split(',');
//                //console.log(sObj);
//            });
//        });
//        resolve(sObj);
//    });
//    console.log(sObj);
//    p.then((object) => {
//        return object;
//    })
//    //return sObj;
//}
//
//function getSym() {
//    let symObj = resultCheck(s);
//    return symObj;
//};
//console.log(getSym());

const natural = require('natural');
const _ = require('lodash')


const wordnet = new natural.WordNet();
const tokenizer = new natural.WordTokenizer();


const sent = "Welcome to callback hell."
const setSyns = {}

const handleLookup = (word, syns) => {
    setSyns[word] = syns
}

const doLast = () => {
    console.log(setSyns)
}

// callback to wordnet.lookup gets passed an array of objects
// one property of which is `synonyms`

// also, use a tokenizer

tokenizer.tokenize(sent).forEach((word, idx, words) => {
    wordnet.lookup(word, x => {
        synsListOfLists = _.flatMapDeep(x, y => y.synonyms)
        handleLookup(word, _.uniq(synsListOfLists))
        if (idx == words.length - 1) {
            doLast()
        }
    })
})

console.log(setSyns)  // logs {} because this is executed before the loop is done