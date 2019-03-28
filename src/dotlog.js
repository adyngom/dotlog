export const dotLog = ( function() {

    function predicate(testrule = false, testlabel = 'test label:') {
        return ( testrule ) ? console.log(`%c${testlabel}`, 'color: green') : console.log(`%c${testlabel}`, 'color: red; font-weight: bold;');
    }

    return {
        describe(desc = 'test description:', testSet = []) {

			let color = 'green', fontWeight = 'normal', passed = 0, failed = 0;

			const testDisplay = testSet.map( test => {
				if ( !test.rule ) {
					color = 'red';
					fontWeight = 'bold';
					failed++;	
				} else {
					passed++;
				}
				return { color, fontWeight, label: test.label};
			});

			console.groupCollapsed(`%c${desc}: ${passed} passed - ${failed} failed`, `color: ${color}; font-weight: bold`);
				testDisplay.forEach( td => console.log(`%c${td.label}`, `color: ${td.color}; font-weight: ${td.fontWeight};`));
			console.groupEnd();
            
        },
        printTable(arr = [], options = { limit: null, range: [], showOnly: []}) {
        	let {limit, range, showOnly} = options;
        	let _arr;
			if(!!limit && typeof limit === 'number' && limit < arr.length) {
				_arr = arr.slice(0, limit);
			} else if(!!range && range.length >= 2) {
				_arr = arr.slice(range[0], range[1])
			} else {
				_arr = arr;
			}

			console.table(_arr, showOnly);
        }
    };
}());
