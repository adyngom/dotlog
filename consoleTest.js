var consoleTest = ( function() {

    function predicate(testrule = false, testlabel = 'test label:') {
        return ( testrule ) ? console.log(`%c${testlabel}`, 'color: green') 
                            : console.log(`%c${testlabel}`, 'color: red; font-weight: bold;');
    }

    return {
        describe(testDescription = 'test description:', testSet = []) {
            console.group(`%c${testDescription}`, 'color: silver');
                testSet.forEach( test => predicate(test.rule, test.label));
            console.groupEnd();
        }
    };
}());