var readlineSync = require('readline-sync');
var input ="";
// Wait for user's response.
var inputDetails = readlineSync.question('Please Enter the input Detials ? ');

var splitDets = inputDetails.split(":");
var length = splitDets.length;
if(splitDets != null){
    if(length == 6){
var countryName ="";
var passNumber = "";
var glvesEntry = 0;
var markEntry = 0;
    countryName = splitDets[0];
    passNumber = splitDets[1];
    if(splitDets[2] == 'Gloves'){
        glvesEntry = splitDets[3];
        markEntry = splitDets[5];
    }
    else{
        glvesEntry = splitDets[5];
        markEntry = splitDets[3];
    }
   
    var totalMaskUK = 100;
    var totalGlovesUK = 100;
    var totalMaskGermeny = 100;
    var totalGlovesGenmeny  = 50;
    var totalSalePrice = 0;
    var remainingMaskUK;
    var remainingMaskGermeny;
    var remainingGlovesUK;
    var remainingGlovesGermeny;

    var totalMaskInventory = 0;
    var totalGlovesInventory = 0;
    totalMaskInventory = (totalMaskUK + totalMaskGermeny);
    totalGlovesInventory = (totalGlovesUK + totalGlovesGenmeny);
    if(markEntry > totalMaskInventory || glvesEntry > totalGlovesInventory){
        totalSalePrice = "OUT_OF_STOCK";
        remainingMaskUK = totalMaskUK;
        remainingMaskGermeny = totalMaskGermeny;
        remainingGlovesUK = totalGlovesUK;
        remainingGlovesGermeny = totalGlovesGenmeny;
            console.log(totalSalePrice+":"+remainingMaskUK+":"+remainingMaskGermeny+" "+remainingGlovesUK+":"+remainingGlovesGermeny);
    }
    else{
if(countryName == "UK"){
    if(passNumber.startsWith("B")){
        totalSalePrice = glvesEntry * 100 + markEntry * 65;
        remainingMaskUK = totalMaskUK - markEntry;
        remainingMaskGermeny = totalMaskGermeny;
        remainingGlovesGermeny = totalGlovesGenmeny;
        remainingGlovesUK = totalGlovesUK - glvesEntry;
    }
    else if(passNumber.startsWith("A")){
        var totalCost = 0;
        var glovesUsedGermeny;
        var glovesUsedUk;
        var transCost = 0;
        if(glvesEntry > 100){
            totalCost = totalCost + totalGlovesUK * 100;
            glovesUsedUk = 100;
        }
        var remainderGloves = glvesEntry % 100;
        if(remainderGloves != 0){
            totalCost = totalCost + remainderGloves * 150;
            transCost = Math.floor(remainderGloves/10)+1;
            if(transCost != 0){
                totalCost = totalCost + transCost*400*0.8;
            }
            glovesUsedGermeny = remainderGloves;
        }
        if(markEntry < 100){
            totalCost = totalCost + markEntry * 65;
            
        } 
        
        totalSalePrice = totalCost;

        remainingMaskUK = totalMaskUK - markEntry;
        remainingMaskGermeny = totalMaskGermeny;
        remainingGlovesUK = totalGlovesUK-glovesUsedUk;
        remainingGlovesGermeny = totalGlovesGenmeny - glovesUsedGermeny;
    }
}
else if(countryName == "Germany"){
    if(passNumber.startsWith("B")){
        var totalCost = 0;
        var remainderMasks;
        remainderMasks = (markEntry % 10 );

        var remainderGloves;
        remainderGloves = (glvesEntry % 10 );

        var costTransMask = (markEntry / 10);
        var costTransGloves = (Math.floor(glvesEntry / 10));

        if(remainderMasks != 0){
            totalCost = totalCost + remainderMasks*totalMaskGermeny;
        }
        if(remainderGloves != 0){
            totalCost = totalCost + remainderGloves*totalGlovesGenmeny;
        }
        if(costTransMask != 0){
            var totalCostTransportMask = (costTransMask * 400 * 0.8);
            totalCost = totalCost + totalCostTransportMask;
        }
        if(costTransGloves != 0){
            var totalCostTransportGloves = (costTransGloves * 400 * 0.8);
            totalCost = totalCost + totalCostTransportGloves;
        }

        totalSalePrice = glvesEntry * 100 + markEntry * 65 + totalCost;
        remainingMaskUK = totalMaskUK - markEntry + remainderMasks;
        remainingMaskGermeny = totalMaskGermeny  - remainderMasks;
        remainingGlovesGermeny = totalGlovesGenmeny - remainderGloves;
        remainingGlovesUK = totalGlovesUK - glvesEntry + remainderGloves;
    }
    else if(passNumber.startsWith("A")){
        var totalCost=0;
        var remainingMask;
           if(markEntry < 100){
               
               totalCost = totalCost + markEntry*100;
           }
           var remainderGloves = glvesEntry % 10;
           var floorgloves = Math.floor( glvesEntry/ 10);
           if(remainderGloves != 0){
               
               totalCost = totalCost  + remainderGloves*150;
           } 
           if(floorgloves != 0){
            totalCost = totalCost + floorgloves*10*100;
            totalCost = totalCost + floorgloves*400;
           }
        
        totalSalePrice = totalCost;
        remainingMaskUK = totalMaskUK;
        remainingMaskGermeny = totalMaskGermeny - markEntry;
        remainingGlovesUK = totalGlovesUK - floorgloves*10;
        remainingGlovesGermeny = totalGlovesGenmeny - remainderGloves;
        
    }
}
    
    console.log(totalSalePrice+":"+remainingMaskUK+":"+remainingMaskGermeny+" "+remainingGlovesUK+":"+remainingGlovesGermeny);
}
    }
else if(length == 5){
var countryName ="";
var glvesEntry = 0;
var markEntry = 0;
    countryName = splitDets[0];
    if(splitDets[1] == 'Gloves'){
        glvesEntry = splitDets[2];
        markEntry = splitDets[4];
    }
    else{
        glvesEntry = splitDets[4];
        markEntry = splitDets[2];
    }
    var totalMaskUK = 100;
    var totalGlovesUK = 100;
    var totalMaskGermeny = 100;
    var totalGlovesGenmeny  = 50;
    var totalSalePrice = 0;
    var remainingMaskUK;
    var remainingMaskGermeny;
    var remainingGlovesUK;
    var remainingGlovesGermeny;
    
    var totalMaskInventory = 0;
    var totalGlovesInventory = 0;
    totalMaskInventory = (totalMaskUK + totalMaskGermeny);
    totalGlovesInventory = (totalGlovesUK + totalGlovesGenmeny);
    if(markEntry > totalMaskInventory || glvesEntry > totalGlovesInventory){
        totalSalePrice = "OUT_OF_STOCK";
        remainingMaskUK = totalMaskUK;
        remainingMaskGermeny = totalMaskGermeny;
        remainingGlovesUK = totalGlovesUK;
        remainingGlovesGermeny = totalGlovesGenmeny;
            console.log(totalSalePrice+":"+remainingMaskUK+":"+remainingMaskGermeny+" "+remainingGlovesUK+":"+remainingGlovesGermeny);
    }
    else{
    totalSalePrice = 100;
    var totalCost = 0;
    var remainderMasks;
    var transUnit = 0;
    var usedMaskUnit = 0;
    var usedMaskGer = 0;
    var usedGlovesUk = 0;
    var usedGLovesGer = 0;
    if(markEntry > 100){
        totalCost = totalCost + 100*65;
        remainderMasks = (markEntry % 100);
        transUnit = Math.floor(remainderMasks/10);
        usedMaskUnit = 100;
    }
    if(remainderMasks != 0){
        totalCost = totalCost + remainderMasks*100;
        totalCost = totalCost + transUnit*400;
        usedMaskGer = remainderMasks;
    } 
    if(glvesEntry < 100){
        totalCost = totalCost + glvesEntry*100;
        usedGlovesUk =glvesEntry;
        usedGLovesGer = 0;
    }
    
    totalSalePrice = totalCost;
    remainingMaskUK = totalMaskUK - usedMaskUnit;
    remainingMaskGermeny = totalMaskGermeny - usedMaskGer;
    remainingGlovesUK = totalGlovesUK - usedGlovesUk;
    remainingGlovesGermeny = totalGlovesGenmeny - usedGLovesGer;
    console.log(totalSalePrice+":"+remainingMaskUK+":"+remainingMaskGermeny+" "+remainingGlovesUK+":"+remainingGlovesGermeny);
    }
    
}
else{
    console.log("Input format not supported ..");
}
}
else{
    console.log("Input format not supported ..");
}

