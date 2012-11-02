/* start module: bisect */
var bisect;
$pyjs.loaded_modules['bisect'] = function (__mod_name__) {
	if($pyjs.loaded_modules['bisect'].__was_initialized__) return $pyjs.loaded_modules['bisect'];
	bisect = $pyjs.loaded_modules["bisect"];
	bisect.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'bisect';
	var __name__ = bisect.__name__ = __mod_name__;
	var $pyjs_try_err;

	bisect['insort_right'] = function(a, x, lo, hi) {
		if (typeof lo == 'undefined') lo=arguments.callee.__args__[4][1];
		if (typeof hi == 'undefined') hi=arguments.callee.__args__[5][1];
		var $add4,mid,$add2,$add3,$add1,$floordiv2,$floordiv1;
		if (pyjslib['bool']((pyjslib['cmp'](lo, 0) == -1))) {
			throw (pyjslib['ValueError'](String('lo must be non-negative')));
		}
		if (pyjslib['bool']((hi === null))) {
			hi = pyjslib['len'](a);
		}
		while (pyjslib['bool']((pyjslib['cmp'](lo, hi) == -1))) {
			mid = (typeof ($floordiv1=(typeof ($add1=lo)==typeof ($add2=hi) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				pyjslib['op_add']($add1,$add2)))==typeof ($floordiv2=2) && typeof $floordiv1=='number' && $floordiv2 !== 0?
				Math.floor($floordiv1/$floordiv2):
				pyjslib['op_floordiv']($floordiv1,$floordiv2));
			if (pyjslib['bool']((pyjslib['cmp'](x, a.__getitem__(mid)) == -1))) {
				hi = mid;
			}
			else {
				lo = (typeof ($add3=mid)==typeof ($add4=1) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					pyjslib['op_add']($add3,$add4));
			}
		}
		a['insert'](lo, x);
		return null;
	};
	bisect['insort_right'].__name__ = 'insort_right';

	bisect['insort_right'].__bind_type__ = 0;
	bisect['insort_right'].__args__ = [null,null,['a'],['x'],['lo', 0],['hi', null]];
	bisect['insort'] = bisect['insort_right'];
	bisect['bisect_right'] = function(a, x, lo, hi) {
		if (typeof lo == 'undefined') lo=arguments.callee.__args__[4][1];
		if (typeof hi == 'undefined') hi=arguments.callee.__args__[5][1];
		var mid,$add6,$floordiv3,$add5,$add8,$floordiv4,$add7;
		if (pyjslib['bool']((pyjslib['cmp'](lo, 0) == -1))) {
			throw (pyjslib['ValueError'](String('lo must be non-negative')));
		}
		if (pyjslib['bool']((hi === null))) {
			hi = pyjslib['len'](a);
		}
		while (pyjslib['bool']((pyjslib['cmp'](lo, hi) == -1))) {
			mid = (typeof ($floordiv3=(typeof ($add5=lo)==typeof ($add6=hi) && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				pyjslib['op_add']($add5,$add6)))==typeof ($floordiv4=2) && typeof $floordiv3=='number' && $floordiv4 !== 0?
				Math.floor($floordiv3/$floordiv4):
				pyjslib['op_floordiv']($floordiv3,$floordiv4));
			if (pyjslib['bool']((pyjslib['cmp'](x, a.__getitem__(mid)) == -1))) {
				hi = mid;
			}
			else {
				lo = (typeof ($add7=mid)==typeof ($add8=1) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					pyjslib['op_add']($add7,$add8));
			}
		}
		return lo;
	};
	bisect['bisect_right'].__name__ = 'bisect_right';

	bisect['bisect_right'].__bind_type__ = 0;
	bisect['bisect_right'].__args__ = [null,null,['a'],['x'],['lo', 0],['hi', null]];
	bisect['bisect'] = bisect['bisect_right'];
	bisect['insort_left'] = function(a, x, lo, hi) {
		if (typeof lo == 'undefined') lo=arguments.callee.__args__[4][1];
		if (typeof hi == 'undefined') hi=arguments.callee.__args__[5][1];
		var mid,$floordiv6,$floordiv5,$add10,$add11,$add12,$add9;
		if (pyjslib['bool']((pyjslib['cmp'](lo, 0) == -1))) {
			throw (pyjslib['ValueError'](String('lo must be non-negative')));
		}
		if (pyjslib['bool']((hi === null))) {
			hi = pyjslib['len'](a);
		}
		while (pyjslib['bool']((pyjslib['cmp'](lo, hi) == -1))) {
			mid = (typeof ($floordiv5=(typeof ($add9=lo)==typeof ($add10=hi) && (typeof $add9=='number'||typeof $add9=='string')?
				$add9+$add10:
				pyjslib['op_add']($add9,$add10)))==typeof ($floordiv6=2) && typeof $floordiv5=='number' && $floordiv6 !== 0?
				Math.floor($floordiv5/$floordiv6):
				pyjslib['op_floordiv']($floordiv5,$floordiv6));
			if (pyjslib['bool']((pyjslib['cmp'](a.__getitem__(mid), x) == -1))) {
				lo = (typeof ($add11=mid)==typeof ($add12=1) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					pyjslib['op_add']($add11,$add12));
			}
			else {
				hi = mid;
			}
		}
		a['insert'](lo, x);
		return null;
	};
	bisect['insort_left'].__name__ = 'insort_left';

	bisect['insort_left'].__bind_type__ = 0;
	bisect['insort_left'].__args__ = [null,null,['a'],['x'],['lo', 0],['hi', null]];
	bisect['bisect_left'] = function(a, x, lo, hi) {
		if (typeof lo == 'undefined') lo=arguments.callee.__args__[4][1];
		if (typeof hi == 'undefined') hi=arguments.callee.__args__[5][1];
		var $floordiv7,mid,$add14,$add15,$add16,$add13,$floordiv8;
		if (pyjslib['bool']((pyjslib['cmp'](lo, 0) == -1))) {
			throw (pyjslib['ValueError'](String('lo must be non-negative')));
		}
		if (pyjslib['bool']((hi === null))) {
			hi = pyjslib['len'](a);
		}
		while (pyjslib['bool']((pyjslib['cmp'](lo, hi) == -1))) {
			mid = (typeof ($floordiv7=(typeof ($add13=lo)==typeof ($add14=hi) && (typeof $add13=='number'||typeof $add13=='string')?
				$add13+$add14:
				pyjslib['op_add']($add13,$add14)))==typeof ($floordiv8=2) && typeof $floordiv7=='number' && $floordiv8 !== 0?
				Math.floor($floordiv7/$floordiv8):
				pyjslib['op_floordiv']($floordiv7,$floordiv8));
			if (pyjslib['bool']((pyjslib['cmp'](a.__getitem__(mid), x) == -1))) {
				lo = (typeof ($add15=mid)==typeof ($add16=1) && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					pyjslib['op_add']($add15,$add16));
			}
			else {
				hi = mid;
			}
		}
		return lo;
	};
	bisect['bisect_left'].__name__ = 'bisect_left';

	bisect['bisect_left'].__bind_type__ = 0;
	bisect['bisect_left'].__args__ = [null,null,['a'],['x'],['lo', 0],['hi', null]];
	try {
		bisect['*'] = pyjslib['___import___']('_bisect.*', null, null, false);
	} catch($pyjs_try_err) {
		var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
		$pyjs.__last_exception__ = {error: $pyjs_try_err, module: bisect, try_lineno: 89};
		if (($pyjs_try_err_name == pyjslib['ImportError'].__name__)||pyjslib['_isinstance']($pyjs_try_err,pyjslib['ImportError'])) {
			$pyjs.__last_exception__.except_lineno = 91;
			bisect['err'] = $pyjs_try_err;
		} else { throw $pyjs_try_err; }
	}
	return this;
}; /* end bisect */


/* end module: bisect */


/*
PYJS_DEPS: ['_bisect.*', '_bisect']
*/
