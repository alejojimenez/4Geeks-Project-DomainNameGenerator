combinationGenerator = () => {
    var pronoun = ['the','our'];    
    var adj = ['great','big'];      
    var noun = ['jogger','racoon']; 
   
    let i = 0;
    let j = 0;
    let k = 0;

    for ( ; i < pronoun.length; ) {
        var stringCombinationPronoun = pronoun[i];
        if(i == pronoun.length) {
            i=0;
            var stringCombinationPronoun = pronoun[i];
            j++;
            var stringCombinationAdj = adj[j];
            k=0;
            var stringCombinationNoun = noun[k];
        };
        for( ; j < adj.length; ) {
            var stringCombinationAdj = adj[j];
            for( ; k < noun.length; ) {
                var stringCombinationNoun = noun[k];
                if((i == 0) && (j == 0) && (k == 0)){
                    console.log(stringCombinationPronoun + stringCombinationAdj + stringCombinationNoun + ".com");
                };
                if(k < noun.length) {
                    k++;
                    var stringCombinationNoun = noun[k];
                };
                if(k == noun.length) {
                    i++;
                    var stringCombinationPronoun = pronoun[i];
                    k=0;
                    var stringCombinationNoun = noun[k];                    
                };
                if((i == pronoun.length) && (K = noun.length)) {
                    i=0;
                    var stringCombinationPronoun = pronoun[i];                    
                    j++;
                    var stringCombinationAdj = adj[j];
                    k=0;
                    var stringCombinationNoun = noun[k];                    
                };
                if((i == j) && (i == k)) {
                    i = i + pronoun.length;
                    j = j + adj.length;
                    k = k + noun.length;
                };
                console.log(stringCombinationPronoun + stringCombinationAdj + stringCombinationNoun + ".com");
            };
        };
    };
};

combinationGenerator();
// the great jogger.com
// the great racoon.com
// our great jogger.com
// our great racoon.com
// the big jogger.com
// the big racoon.com
// our big jogger.com
// our big racoon.com