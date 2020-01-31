const word = process.argv[2];

const natural = require('natural');;
const wordnet = new natural.WordNet();




//wordnet.lookup(word, function(details) {
//    details.forEach(function(detail) {
//        console.log("------------------------------");
//        console.log("Definition: " + detail.def);
//        console.log("Synonyms: " + detail.synonyms);
//        console.log("POS: " + detail.pos);
//
//        // Display examples, if available
//        detail.exp.forEach(function(example) {
//            console.log("EXAMPLE: " + example);
//        });
//        console.log("------------------------------");
//    });
//});

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

let s = "Inspect the room";

function resultCheck(sentence) {
    a = sentence.split(' ');
    let sObj = {};
    let p = new Promise((resolve, reject) => {
        a.forEach(word => {
            sObj[word] = [];
            wordnet.lookupSynonyms(word, function (results) {
                results.forEach(function (result) {
                    sObj[word].push(result.synonyms);
                });
                sObj[word] = sObj[word].join().split(',');
                //console.log(sObj);
            });
        });
        resolve(sObj);
    });
    console.log(sObj);
    p.then((object) => {
        return object;
    })
    //return sObj;
}

function getSym() {
    let symObj = resultCheck(s);
    return symObj;
};
console.log(getSym());