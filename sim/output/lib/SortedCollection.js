/* start module: SortedCollection */
var SortedCollection;
$pyjs.loaded_modules['SortedCollection'] = function (__mod_name__) {
	if($pyjs.loaded_modules['SortedCollection'].__was_initialized__) return $pyjs.loaded_modules['SortedCollection'];
	SortedCollection = $pyjs.loaded_modules["SortedCollection"];
	SortedCollection.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'SortedCollection';
	var __name__ = SortedCollection.__name__ = __mod_name__;


	SortedCollection['bisect_left'] = pyjslib['___import___']('bisect.bisect_left', null, null, false);
	SortedCollection['bisect_right'] = pyjslib['___import___']('bisect.bisect_right', null, null, false);
	SortedCollection['SortedCollection'] = (function(){
		var $cls_instance = $pyjs__class_instance('SortedCollection');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'b1b5687783c361baa54c21136e322beb';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(iterable, key) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				iterable = arguments[1];
				key = arguments[2];
			}
			if (typeof iterable == 'undefined') iterable=arguments.callee.__args__[3][1];
			if (typeof key == 'undefined') key=arguments.callee.__args__[4][1];
			var $iter1_nextval,$iter1_type,$lambda1,$iter1_iter,item,$iter1_array,decorated,$iter1_idx;
			self._given_key = key;
			var 			$lambda1 = function(x) {

				return x;
			};
			$lambda1.__name__ = '$lambda1';

			$lambda1.__bind_type__ = 0;
			$lambda1.__args__ = [null,null,['x']];
			key = (pyjslib['bool']((key === null))? ($lambda1) : (key));
			decorated = pyjslib['sorted'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
				var $generator = function () {};
				$generator['next'] = function (noStop) {
				
					var $res;
					$yield_value = $exc = null;
					try {
						$res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res == 'undefined') {
							if (noStop === true) {
								$generator_state[0] = -1;
								return;
							}
							throw pyjslib.StopIteration;
						}
					} catch (e) {
				
						$is_executing=false;
						$generator_state[0] = -1;
						if (noStop === true && e === pyjslib['StopIteration']) {
							return;
						}
						throw e;
					}
					return $res;
				};
				$generator['__iter__'] = function () {return $generator;};
				$generator['send'] = function ($val) {
				
					$yield_value = $val;
					$exc = null;
					try {
						var $res = $generator['$genfunc']();
						if (typeof $res == 'undefined') throw pyjslib.StopIteration;
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw e;
					}
					$is_executing=false;
					return $res;
				};
				$generator['$$throw'] = function ($exc_type, $exc_value) {
				
					$yield_value = null;
					$exc=(typeof $exc_value == 'undefined'?$exc_type():$exc_type($exc_value));
					try {
						var $res = $generator['$genfunc']();
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw (e);
					}
					$is_executing=false;
					return $res;
				};
				$generator['close'] = function () {
				
					$yield_value = null;
					$exc=pyjslib['GeneratorExit'];
					try {
						var $res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res != 'undefined') throw pyjslib.RuntimeError('generator ignored GeneratorExit');
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						if (e.__name__ == 'StopIteration' || e.__name__ == 'GeneratorExit') return null;
						throw (e);
					}
					return null;
				};
				$generator['$genfunc'] = function () {
					var $yielding = false;
					if ($is_executing) throw pyjslib.ValueError('generator already executing');
					$is_executing = true;
				
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$iter1_iter = iterable;
					if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
						$iter1_type = 0;
					} else {
						$iter1_iter = $iter1_iter.__iter__();
						$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter1_idx = 0;
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state[1] = 0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0 || typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):pyjslib['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined');$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
							item = $iter1_nextval;
							$yield_value = pyjslib['tuple']([key(item), item]);
							$yielding = true;
							$generator_state[1] = 1;
							return $yield_value;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[1] = -1;
								throw $exc;
							}
							$generator_state[1]=2;
						}
						if ($generator_state[1] == 2) {
						}
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
				}

					return;
				};
				return $generator;
			}()
);
			self._keys = function(){
var $listcomp1 = pyjslib['list']();
			$iter2_iter = decorated;
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,true):pyjslib['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				k = $iter2_nextval.__array[0];
				item = $iter2_nextval.__array[1];
				$listcomp1['append'](k);
			}
return $listcomp1;}();
			self._items = function(){
var $listcomp2 = pyjslib['list']();
			$iter3_iter = decorated;
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,true):pyjslib['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				k = $iter3_nextval.__array[0];
				item = $iter3_nextval.__array[1];
				$listcomp2['append'](item);
			}
return $listcomp2;}();
			self._key = key;
			return null;
		}
	, 1, [null,null,['self'],['iterable', pyjslib['tuple']([])],['key', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '_getkey', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr1,$attr2;
			return ((($attr1=self['_key']) !== null & ($attr2=self).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, '_key'):
						self['_key']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getkey'] = $method;
		$method = $pyjs__bind_method($cls_instance, '_setkey', function(key) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}
			var $attr5,$attr4,$attr6,$attr3;
			if (pyjslib['bool']((key !== ((($attr3=self['_key']) !== null & ($attr4=self).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, '_key'):
						self['_key'])))) {
				$pyjs_kwargs_call(self, '__init__', null, null, [{key:key}, ((($attr5=self['_items']) !== null & ($attr6=self).__is_instance__) && typeof $attr5 == 'function'?
							pyjslib['getattr']($attr6, '_items'):
							self['_items'])]);
			}
			return null;
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['_setkey'] = $method;
		$method = $pyjs__bind_method($cls_instance, '_delkey', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['_setkey'](null);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_delkey'] = $method;
		$cls_definition['key'] = pyjslib['property'](pyjslib['staticmethod']($cls_definition['_getkey']), pyjslib['staticmethod']($cls_definition['_setkey']), pyjslib['staticmethod']($cls_definition['_delkey']), String('key function'));
		$method = $pyjs__bind_method($cls_instance, 'clear', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr8,$attr7;
			self['__init__'](pyjslib['list']([]), ((($attr7=self['_key']) !== null & ($attr8=self).__is_instance__) && typeof $attr7 == 'function'?
						pyjslib['getattr']($attr8, '_key'):
						self['_key']));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'copy', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,$attr10;
			return self['__class__'](self, ((($attr9=self['_key']) !== null & ($attr10=self).__is_instance__) && typeof $attr9 == 'function'?
						pyjslib['getattr']($attr10, '_key'):
						self['_key']));
		}
	, 1, [null,null,['self']]);
		$cls_definition['copy'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__len__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr11,$attr12;
			return pyjslib['len'](((($attr11=self['_items']) !== null & ($attr12=self).__is_instance__) && typeof $attr11 == 'function'?
						pyjslib['getattr']($attr12, '_items'):
						self['_items']));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__getitem__', function(i) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				i = arguments[1];
			}
			var $attr14,$attr13;
			return ((($attr13=self['_items']) !== null & ($attr14=self).__is_instance__) && typeof $attr13 == 'function'?
						pyjslib['getattr']($attr14, '_items'):
						self['_items']).__getitem__(i);
		}
	, 1, [null,null,['self'],['i']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr15,$attr16;
			return pyjslib['iter'](((($attr15=self['_items']) !== null & ($attr16=self).__is_instance__) && typeof $attr15 == 'function'?
						pyjslib['getattr']($attr16, '_items'):
						self['_items']));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__reversed__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr17,$attr18;
			return pyjslib['reversed'](((($attr17=self['_items']) !== null & ($attr18=self).__is_instance__) && typeof $attr17 == 'function'?
						pyjslib['getattr']($attr18, '_items'):
						self['_items']));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__reversed__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr20,$attr21,$attr22,$attr23,$attr19,$attr25,$attr26,$attr24;
			return pyjslib['sprintf'](String('%s(%r, key=%s)'), pyjslib['tuple']([((($attr19=self['__class__']['__name__']) !== null & ($attr20=self['__class__']).__is_instance__) && typeof $attr19 == 'function'?
						pyjslib['getattr']($attr20, '__name__'):
						self['__class__']['__name__']), ((($attr21=self['_items']) !== null & ($attr22=self).__is_instance__) && typeof $attr21 == 'function'?
						pyjslib['getattr']($attr22, '_items'):
						self['_items']), pyjslib['getattr'](((($attr23=self['_given_key']) !== null & ($attr24=self).__is_instance__) && typeof $attr23 == 'function'?
						pyjslib['getattr']($attr24, '_given_key'):
						self['_given_key']), String('__name__'), pyjslib['repr'](((($attr25=self['_given_key']) !== null & ($attr26=self).__is_instance__) && typeof $attr25 == 'function'?
						pyjslib['getattr']($attr26, '_given_key'):
						self['_given_key'])))]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__reduce__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr32,$attr31,$attr30,$attr27,$attr28,$attr29;
			return pyjslib['tuple']([((($attr27=self['__class__']) !== null & ($attr28=self).__is_instance__) && typeof $attr27 == 'function'?
						pyjslib['getattr']($attr28, '__class__'):
						self['__class__']), pyjslib['tuple']([((($attr29=self['_items']) !== null & ($attr30=self).__is_instance__) && typeof $attr29 == 'function'?
						pyjslib['getattr']($attr30, '_items'):
						self['_items']), ((($attr31=self['_given_key']) !== null & ($attr32=self).__is_instance__) && typeof $attr31 == 'function'?
						pyjslib['getattr']($attr32, '_given_key'):
						self['_given_key'])])]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__reduce__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__contains__', function(item) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}
			var i,j,$attr33,$attr37,$attr36,$attr35,$attr34,$attr38,k;
			k = self['_key'](item);
			i = SortedCollection['bisect_left'](((($attr33=self['_keys']) !== null & ($attr34=self).__is_instance__) && typeof $attr33 == 'function'?
						pyjslib['getattr']($attr34, '_keys'):
						self['_keys']), k);
			j = SortedCollection['bisect_right'](((($attr35=self['_keys']) !== null & ($attr36=self).__is_instance__) && typeof $attr35 == 'function'?
						pyjslib['getattr']($attr36, '_keys'):
						self['_keys']), k);
			return pyjslib['slice'](((($attr37=self['_items']) !== null & ($attr38=self).__is_instance__) && typeof $attr37 == 'function'?
						pyjslib['getattr']($attr38, '_items'):
						self['_items']), i, j).__contains__(item);
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['__contains__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'index', function(item) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}
			var i,j,$add2,$attr44,$add1,$attr42,$attr43,$attr40,$attr41,$attr39,k;
			k = self['_key'](item);
			i = SortedCollection['bisect_left'](((($attr39=self['_keys']) !== null & ($attr40=self).__is_instance__) && typeof $attr39 == 'function'?
						pyjslib['getattr']($attr40, '_keys'):
						self['_keys']), k);
			j = SortedCollection['bisect_right'](((($attr41=self['_keys']) !== null & ($attr42=self).__is_instance__) && typeof $attr41 == 'function'?
						pyjslib['getattr']($attr42, '_keys'):
						self['_keys']), k);
			return (typeof ($add1=pyjslib['slice'](((($attr43=self['_items']) !== null & ($attr44=self).__is_instance__) && typeof $attr43 == 'function'?
						pyjslib['getattr']($attr44, '_items'):
						self['_items']), i, j)['index'](item))==typeof ($add2=i) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				pyjslib['op_add']($add1,$add2));
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['index'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'count', function(item) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}
			var $attr47,i,$attr50,j,$attr46,$attr45,k,$attr48,$attr49;
			k = self['_key'](item);
			i = SortedCollection['bisect_left'](((($attr45=self['_keys']) !== null & ($attr46=self).__is_instance__) && typeof $attr45 == 'function'?
						pyjslib['getattr']($attr46, '_keys'):
						self['_keys']), k);
			j = SortedCollection['bisect_right'](((($attr47=self['_keys']) !== null & ($attr48=self).__is_instance__) && typeof $attr47 == 'function'?
						pyjslib['getattr']($attr48, '_keys'):
						self['_keys']), k);
			return pyjslib['slice'](((($attr49=self['_items']) !== null & ($attr50=self).__is_instance__) && typeof $attr49 == 'function'?
						pyjslib['getattr']($attr50, '_items'):
						self['_items']), i, j)['count'](item);
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['count'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'insert', function(item) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}
			var i,$attr51,$attr52,k;
			k = self['_key'](item);
			i = SortedCollection['bisect_left'](((($attr51=self['_keys']) !== null & ($attr52=self).__is_instance__) && typeof $attr51 == 'function'?
						pyjslib['getattr']($attr52, '_keys'):
						self['_keys']), k);
			self['_keys']['insert'](i, k);
			self['_items']['insert'](i, item);
			return i;
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['insert'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'insert_right', function(item) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}
			var i,$attr53,$attr54,k;
			k = self['_key'](item);
			i = SortedCollection['bisect_right'](((($attr53=self['_keys']) !== null & ($attr54=self).__is_instance__) && typeof $attr53 == 'function'?
						pyjslib['getattr']($attr54, '_keys'):
						self['_keys']), k);
			self['_keys']['insert'](i, k);
			self['_items']['insert'](i, item);
			return i;
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['insert_right'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'remove', function(item) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}
			var $attr58,i,$attr55,$attr57,$attr56;
			i = self['index'](item);
			((($attr55=self['_keys']) !== null & ($attr56=self).__is_instance__) && typeof $attr55 == 'function'?
						pyjslib['getattr']($attr56, '_keys'):
						self['_keys']).__delitem__(i);
			((($attr57=self['_items']) !== null & ($attr58=self).__is_instance__) && typeof $attr57 == 'function'?
						pyjslib['getattr']($attr58, '_items'):
						self['_items']).__delitem__(i);
			return null;
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'find', function(k) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				k = arguments[1];
			}
			var $attr59,i,$and1,$attr60,$attr61,$attr62,$attr63,$attr64,$and2;
			i = SortedCollection['bisect_left'](((($attr59=self['_keys']) !== null & ($attr60=self).__is_instance__) && typeof $attr59 == 'function'?
						pyjslib['getattr']($attr60, '_keys'):
						self['_keys']), k);
			if (pyjslib['bool']((pyjslib['bool']($and1=!pyjslib['op_eq'](i, pyjslib['len'](self)))?pyjslib['op_eq'](((($attr61=self['_keys']) !== null & ($attr62=self).__is_instance__) && typeof $attr61 == 'function'?
						pyjslib['getattr']($attr62, '_keys'):
						self['_keys']).__getitem__(i), k):$and1))) {
				return ((($attr63=self['_items']) !== null & ($attr64=self).__is_instance__) && typeof $attr63 == 'function'?
							pyjslib['getattr']($attr64, '_items'):
							self['_items']).__getitem__(i);
			}
			throw (pyjslib['ValueError'](pyjslib['sprintf'](String('No item found with key equal to: %r'), pyjslib['tuple']([k]))));
			return null;
		}
	, 1, [null,null,['self'],['k']]);
		$cls_definition['find'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'find_le', function(k) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				k = arguments[1];
			}
			var $attr68,i,$attr65,$attr67,$attr66,$sub2,$sub1;
			i = SortedCollection['bisect_right'](((($attr65=self['_keys']) !== null & ($attr66=self).__is_instance__) && typeof $attr65 == 'function'?
						pyjslib['getattr']($attr66, '_keys'):
						self['_keys']), k);
			if (pyjslib['bool'](i)) {
				return ((($attr67=self['_items']) !== null & ($attr68=self).__is_instance__) && typeof $attr67 == 'function'?
							pyjslib['getattr']($attr68, '_items'):
							self['_items']).__getitem__((typeof ($sub1=i)==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					pyjslib['op_sub']($sub1,$sub2)));
			}
			throw (pyjslib['ValueError'](pyjslib['sprintf'](String('No item found with key at or below: %r'), pyjslib['tuple']([k]))));
			return null;
		}
	, 1, [null,null,['self'],['k']]);
		$cls_definition['find_le'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'find_lt', function(k) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				k = arguments[1];
			}
			var $attr69,i,$attr72,$attr71,$attr70,$sub3,$sub4;
			i = SortedCollection['bisect_left'](((($attr69=self['_keys']) !== null & ($attr70=self).__is_instance__) && typeof $attr69 == 'function'?
						pyjslib['getattr']($attr70, '_keys'):
						self['_keys']), k);
			if (pyjslib['bool'](i)) {
				return ((($attr71=self['_items']) !== null & ($attr72=self).__is_instance__) && typeof $attr71 == 'function'?
							pyjslib['getattr']($attr72, '_items'):
							self['_items']).__getitem__((typeof ($sub3=i)==typeof ($sub4=1) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					pyjslib['op_sub']($sub3,$sub4)));
			}
			throw (pyjslib['ValueError'](pyjslib['sprintf'](String('No item found with key below: %r'), pyjslib['tuple']([k]))));
			return null;
		}
	, 1, [null,null,['self'],['k']]);
		$cls_definition['find_lt'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'find_ge', function(k) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				k = arguments[1];
			}
			var i,$attr76,$attr75,$attr74,$attr73;
			i = SortedCollection['bisect_left'](((($attr73=self['_keys']) !== null & ($attr74=self).__is_instance__) && typeof $attr73 == 'function'?
						pyjslib['getattr']($attr74, '_keys'):
						self['_keys']), k);
			if (pyjslib['bool'](!pyjslib['op_eq'](i, pyjslib['len'](self)))) {
				return ((($attr75=self['_items']) !== null & ($attr76=self).__is_instance__) && typeof $attr75 == 'function'?
							pyjslib['getattr']($attr76, '_items'):
							self['_items']).__getitem__(i);
			}
			throw (pyjslib['ValueError'](pyjslib['sprintf'](String('No item found with key at or above: %r'), pyjslib['tuple']([k]))));
			return null;
		}
	, 1, [null,null,['self'],['k']]);
		$cls_definition['find_ge'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'find_gt', function(k) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				k = arguments[1];
			}
			var $attr80,$attr79,$attr78,$attr77,i;
			i = SortedCollection['bisect_right'](((($attr77=self['_keys']) !== null & ($attr78=self).__is_instance__) && typeof $attr77 == 'function'?
						pyjslib['getattr']($attr78, '_keys'):
						self['_keys']), k);
			if (pyjslib['bool'](!pyjslib['op_eq'](i, pyjslib['len'](self)))) {
				return ((($attr79=self['_items']) !== null & ($attr80=self).__is_instance__) && typeof $attr79 == 'function'?
							pyjslib['getattr']($attr80, '_items'):
							self['_items']).__getitem__(i);
			}
			throw (pyjslib['ValueError'](pyjslib['sprintf'](String('No item found with key above: %r'), pyjslib['tuple']([k]))));
			return null;
		}
	, 1, [null,null,['self'],['k']]);
		$cls_definition['find_gt'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['object']));
	})();
	return this;
}; /* end SortedCollection */


/* end module: SortedCollection */


/*
PYJS_DEPS: ['bisect.bisect_left', 'bisect', 'bisect.bisect_right']
*/
