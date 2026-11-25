function calculateAiCost(tokensUsed) {
    if (typeof tokensUsed !== 'number' || tokensUsed < 0) {
        return 'Invalid'
    }

    let givenToken = tokensUsed - 500
    if (givenToken > 0) {
        let token = Math.floor(givenToken / 100)

        let totalBill = token * 5

        return totalBill
    }
    else{
        return 0;
    }


}

console.log(calculateAiCost(927))
