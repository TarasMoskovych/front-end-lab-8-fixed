function cypherPhrase(obj, str){
    return getTransformedArray(str.split(""), function(item){
        if(obj[item]){
            return obj[item];
        }
        return item;
    }).join("");
} 