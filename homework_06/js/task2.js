var eur = Number(prompt("Input amount of EURO:"));
var usd = Number(prompt("Input amount of USD:"));

if(isNaN(eur) || isNaN(usd) || eur <= 0 || usd <= 0){
    console.log("Incorrect data");  
} else{
    var eurUahRate = 33.2324; // 10.02.18
    var usdUahRate = 27.1240; // 10.02.18
        
    var eurUahResult = parseFloat((eur * eurUahRate).toFixed(2));
    var usdUahResult = parseFloat((usd * usdUahRate).toFixed(2));
    var eurUsdResult = parseFloat((eurUahRate / usdUahRate).toFixed(2));
        
    var strEur = (eur > 1) ? " euros are" : " euro is";
    var strUsd = (usd > 1) ? " dollars are" : " dollar is";
    
    console.log(eur +  strEur + " equal " + eurUahResult + " UAH, " + usd +  strUsd + " equal " + usdUahResult + " UAH, one euro is equal " + eurUsdResult + " dollars.");
}