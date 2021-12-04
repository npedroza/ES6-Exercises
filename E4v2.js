let arr = [1,2,3,[4,5,[6,7]], 8,9]


function flatMost(data){
  	return data.reduce(function iter(r, a) {
		if (a === null) {
			return r;
		}
		if (Array.isArray(a)) {
			return a.reduce(iter, r);
		}
		if (typeof a === 'object') {
			return Object.keys(a).map(k => a[k]).reduce(iter, r);
		}
		return r.concat(a);
	}, []);
}


flatMost(arr) //[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
