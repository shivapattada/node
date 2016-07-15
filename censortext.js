var censroWords = ["bastard","loafer","fuck"];
function addSesnorWord(word)
{
    censroWords.push(word);
}

function getSesnorWords()
{
    return censroWords;
}

function censor(sentance){
    for(id in censroWords)
    {
        sentance =  sentance.replace(censroWords[id],"*****");
    }
    return sentance;
}

exports.censor = censor;
exports.addSesnorWord = addSesnorWord;
exports.getSesnorWords=getSesnorWords;
