/* start module: pong */
var pong;
$pyjs.loaded_modules['pong'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pong'].__was_initialized__) return $pyjs.loaded_modules['pong'];
	pong = $pyjs.loaded_modules["pong"];
	pong.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pong';
	var __name__ = pong.__name__ = __mod_name__;


	pong['SortedCollection'] = pyjslib['___import___']('SortedCollection.SortedCollection', null, null, false);
	pong['GAME_WIDTH'] = 800;
	pong['GAME_HEIGHT'] = 400;
	pong['BALL_VELOCITY'] = pyjslib['tuple']([1, 0]);
	pong['PADDLE_VELOCITY'] = 2;
	pong['GameObject'] = (function(){
		var $cls_instance = $pyjs__class_instance('GameObject');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'c29173f7cb6da720c465b1429df601e2';
		$cls_definition['max_x'] = pong['GAME_WIDTH'];
		$cls_definition['max_y'] = pong['GAME_HEIGHT'];
		$method = $pyjs__bind_method($cls_instance, '__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.collided_x = false;
			self.collided_y = false;
			self.position_x = 0;
			self.position_y = 0;
			self.velocity_x = 0;
			self.velocity_y = 0;
			if (pyjslib['bool'](!pyjslib['bool'](pyjslib['hasattr'](self, String('width'))))) {
				self.width = 0;
			}
			if (pyjslib['bool'](!pyjslib['bool'](pyjslib['hasattr'](self, String('height'))))) {
				self.height = 0;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'tick', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr8,$attr1,$attr2,$attr5,$attr4,new_x,$attr6,$add2,$add3,$add1,$attr7,$add4,new_y,$attr3;
			self.collided_x = true;
			self.collided_y = true;
			new_x = (typeof ($add1=((($attr1=self['position_x']) !== null & ($attr2=self).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, 'position_x'):
						self['position_x']))==typeof ($add2=((($attr3=self['velocity_x']) !== null & ($attr4=self).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, 'velocity_x'):
						self['velocity_x'])) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				pyjslib['op_add']($add1,$add2));
			new_y = (typeof ($add3=((($attr5=self['position_y']) !== null & ($attr6=self).__is_instance__) && typeof $attr5 == 'function'?
						pyjslib['getattr']($attr6, 'position_y'):
						self['position_y']))==typeof ($add4=((($attr7=self['velocity_y']) !== null & ($attr8=self).__is_instance__) && typeof $attr7 == 'function'?
						pyjslib['getattr']($attr8, 'velocity_y'):
						self['velocity_y'])) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				pyjslib['op_add']($add3,$add4));
			self.position_x = self['check_collision_x'](new_x);
			self.position_y = self['check_collision_y'](new_y);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['tick'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'check_collision_x', function(new_x) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				new_x = arguments[1];
			}
			var $attr20,$div2,$attr22,$attr23,$attr24,$attr14,$div1,$div6,$div7,$attr13,$sub3,$sub2,$sub1,$div5,$sub4,$attr9,$div8,$attr19,$attr18,$attr15,$div3,$attr17,$attr16,$attr11,$attr10,$div4,$attr12,$attr21,$add6,$add7,$add5,$add8;
			if (pyjslib['bool']((((pyjslib['cmp']((typeof ($add5=new_x)==typeof ($add6=(typeof ($div1=((($attr9=self['width']) !== null & ($attr10=self).__is_instance__) && typeof $attr9 == 'function'?
						pyjslib['getattr']($attr10, 'width'):
						self['width']))==typeof ($div2=2) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				pyjslib['op_div']($div1,$div2))) && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				pyjslib['op_add']($add5,$add6)), ((($attr11=self['max_x']) !== null & ($attr12=self).__is_instance__) && typeof $attr11 == 'function'?
						pyjslib['getattr']($attr12, 'max_x'):
						self['max_x'])))|1) == 1))) {
				new_x = (typeof ($sub1=((($attr13=self['max_x']) !== null & ($attr14=self).__is_instance__) && typeof $attr13 == 'function'?
							pyjslib['getattr']($attr14, 'max_x'):
							self['max_x']))==typeof ($sub2=(typeof ($div3=((($attr15=self['width']) !== null & ($attr16=self).__is_instance__) && typeof $attr15 == 'function'?
							pyjslib['getattr']($attr16, 'width'):
							self['width']))==typeof ($div4=2) && typeof $div3=='number' && $div4 !== 0?
					$div3/$div4:
					pyjslib['op_div']($div3,$div4))) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					pyjslib['op_sub']($sub1,$sub2));
				self.velocity_x = (typeof ($usub1=((($attr17=self['velocity_x']) !== null & ($attr18=self).__is_instance__) && typeof $attr17 == 'function'?
							pyjslib['getattr']($attr18, 'velocity_x'):
							self['velocity_x']))=='number'?
					-$usub1:
					pyjslib['op_usub']($usub1));
			}
			else if (pyjslib['bool']((pyjslib['cmp']((typeof ($sub3=new_x)==typeof ($sub4=(typeof ($div5=((($attr19=self['width']) !== null & ($attr20=self).__is_instance__) && typeof $attr19 == 'function'?
						pyjslib['getattr']($attr20, 'width'):
						self['width']))==typeof ($div6=2) && typeof $div5=='number' && $div6 !== 0?
				$div5/$div6:
				pyjslib['op_div']($div5,$div6))) && (typeof $sub3=='number'||typeof $sub3=='string')?
				$sub3-$sub4:
				pyjslib['op_sub']($sub3,$sub4)), 0) < 1))) {
				new_x = (typeof ($add7=0)==typeof ($add8=(typeof ($div7=((($attr21=self['width']) !== null & ($attr22=self).__is_instance__) && typeof $attr21 == 'function'?
							pyjslib['getattr']($attr22, 'width'):
							self['width']))==typeof ($div8=2) && typeof $div7=='number' && $div8 !== 0?
					$div7/$div8:
					pyjslib['op_div']($div7,$div8))) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					pyjslib['op_add']($add7,$add8));
				self.velocity_x = (typeof ($usub2=((($attr23=self['velocity_x']) !== null & ($attr24=self).__is_instance__) && typeof $attr23 == 'function'?
							pyjslib['getattr']($attr24, 'velocity_x'):
							self['velocity_x']))=='number'?
					-$usub2:
					pyjslib['op_usub']($usub2));
			}
			else {
				self.collided_x = false;
			}
			return new_x;
		}
	, 1, [null,null,['self'],['new_x']]);
		$cls_definition['check_collision_x'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'check_collision_y', function(new_y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				new_y = arguments[1];
			}
			var $attr40,$add12,$attr25,$attr26,$attr27,$attr28,$attr29,$div14,$div15,$div10,$div11,$div12,$div13,$sub8,$sub7,$sub6,$sub5,$attr33,$attr32,$attr31,$div9,$add10,$attr36,$attr35,$attr34,$attr39,$attr38,$attr30,$attr37,$add9,$div16,$add11;
			if (pyjslib['bool']((((pyjslib['cmp']((typeof ($add9=new_y)==typeof ($add10=(typeof ($div9=((($attr25=self['height']) !== null & ($attr26=self).__is_instance__) && typeof $attr25 == 'function'?
						pyjslib['getattr']($attr26, 'height'):
						self['height']))==typeof ($div10=2) && typeof $div9=='number' && $div10 !== 0?
				$div9/$div10:
				pyjslib['op_div']($div9,$div10))) && (typeof $add9=='number'||typeof $add9=='string')?
				$add9+$add10:
				pyjslib['op_add']($add9,$add10)), ((($attr27=self['max_y']) !== null & ($attr28=self).__is_instance__) && typeof $attr27 == 'function'?
						pyjslib['getattr']($attr28, 'max_y'):
						self['max_y'])))|1) == 1))) {
				new_y = (typeof ($sub5=((($attr29=self['max_y']) !== null & ($attr30=self).__is_instance__) && typeof $attr29 == 'function'?
							pyjslib['getattr']($attr30, 'max_y'):
							self['max_y']))==typeof ($sub6=(typeof ($div11=((($attr31=self['height']) !== null & ($attr32=self).__is_instance__) && typeof $attr31 == 'function'?
							pyjslib['getattr']($attr32, 'height'):
							self['height']))==typeof ($div12=2) && typeof $div11=='number' && $div12 !== 0?
					$div11/$div12:
					pyjslib['op_div']($div11,$div12))) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					pyjslib['op_sub']($sub5,$sub6));
				self.velocity_y = (typeof ($usub3=((($attr33=self['velocity_y']) !== null & ($attr34=self).__is_instance__) && typeof $attr33 == 'function'?
							pyjslib['getattr']($attr34, 'velocity_y'):
							self['velocity_y']))=='number'?
					-$usub3:
					pyjslib['op_usub']($usub3));
			}
			else if (pyjslib['bool']((pyjslib['cmp']((typeof ($sub7=new_y)==typeof ($sub8=(typeof ($div13=((($attr35=self['height']) !== null & ($attr36=self).__is_instance__) && typeof $attr35 == 'function'?
						pyjslib['getattr']($attr36, 'height'):
						self['height']))==typeof ($div14=2) && typeof $div13=='number' && $div14 !== 0?
				$div13/$div14:
				pyjslib['op_div']($div13,$div14))) && (typeof $sub7=='number'||typeof $sub7=='string')?
				$sub7-$sub8:
				pyjslib['op_sub']($sub7,$sub8)), 0) < 1))) {
				new_y = (typeof ($add11=0)==typeof ($add12=(typeof ($div15=((($attr37=self['height']) !== null & ($attr38=self).__is_instance__) && typeof $attr37 == 'function'?
							pyjslib['getattr']($attr38, 'height'):
							self['height']))==typeof ($div16=2) && typeof $div15=='number' && $div16 !== 0?
					$div15/$div16:
					pyjslib['op_div']($div15,$div16))) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					pyjslib['op_add']($add11,$add12));
				self.velocity_y = (typeof ($usub4=((($attr39=self['velocity_y']) !== null & ($attr40=self).__is_instance__) && typeof $attr39 == 'function'?
							pyjslib['getattr']($attr40, 'velocity_y'):
							self['velocity_y']))=='number'?
					-$usub4:
					pyjslib['op_usub']($usub4));
			}
			else {
				self.collided_y = false;
			}
			return new_y;
		}
	, 1, [null,null,['self'],['new_y']]);
		$cls_definition['check_collision_y'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'initialize', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['initialize'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'clone', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr46,$attr47,$attr44,$attr45,$attr42,$attr43,$attr41,$attr48,$attr49,$attr60,copy,$attr59,$attr58,$attr51,$attr50,$attr53,$attr52,$attr55,$attr54,$attr57,$attr56;
			copy = self['__class__']();
			copy.max_x = ((($attr41=self['max_x']) !== null & ($attr42=self).__is_instance__) && typeof $attr41 == 'function'?
						pyjslib['getattr']($attr42, 'max_x'):
						self['max_x']);
			copy.max_y = ((($attr43=self['max_y']) !== null & ($attr44=self).__is_instance__) && typeof $attr43 == 'function'?
						pyjslib['getattr']($attr44, 'max_y'):
						self['max_y']);
			copy.position_x = ((($attr45=self['position_x']) !== null & ($attr46=self).__is_instance__) && typeof $attr45 == 'function'?
						pyjslib['getattr']($attr46, 'position_x'):
						self['position_x']);
			copy.position_y = ((($attr47=self['position_y']) !== null & ($attr48=self).__is_instance__) && typeof $attr47 == 'function'?
						pyjslib['getattr']($attr48, 'position_y'):
						self['position_y']);
			copy.velocity_x = ((($attr49=self['velocity_x']) !== null & ($attr50=self).__is_instance__) && typeof $attr49 == 'function'?
						pyjslib['getattr']($attr50, 'velocity_x'):
						self['velocity_x']);
			copy.velocity_y = ((($attr51=self['velocity_y']) !== null & ($attr52=self).__is_instance__) && typeof $attr51 == 'function'?
						pyjslib['getattr']($attr52, 'velocity_y'):
						self['velocity_y']);
			copy.width = ((($attr53=self['width']) !== null & ($attr54=self).__is_instance__) && typeof $attr53 == 'function'?
						pyjslib['getattr']($attr54, 'width'):
						self['width']);
			copy.height = ((($attr55=self['height']) !== null & ($attr56=self).__is_instance__) && typeof $attr55 == 'function'?
						pyjslib['getattr']($attr56, 'height'):
						self['height']);
			copy.collided_x = ((($attr57=self['collided_x']) !== null & ($attr58=self).__is_instance__) && typeof $attr57 == 'function'?
						pyjslib['getattr']($attr58, 'collided_x'):
						self['collided_x']);
			copy.collided_y = ((($attr59=self['collided_y']) !== null & ($attr60=self).__is_instance__) && typeof $attr59 == 'function'?
						pyjslib['getattr']($attr60, 'collided_y'):
						self['collided_y']);
			return copy;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clone'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'corners', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr67,y1,y2,$div18,$div19,$attr64,$attr65,$div17,$attr61,$attr62,$attr63,$sub9,$sub12,$sub11,$sub10,$add14,$add15,$add16,$add13,x2,$attr68,x1,$attr69,$div21,$div20,$div23,$div22,$div24,$attr76,$attr75,$attr74,$attr73,$attr72,$attr71,$attr70,$attr66;
			x1 = (typeof ($sub9=((($attr61=self['position_x']) !== null & ($attr62=self).__is_instance__) && typeof $attr61 == 'function'?
						pyjslib['getattr']($attr62, 'position_x'):
						self['position_x']))==typeof ($sub10=(typeof ($div17=((($attr63=self['width']) !== null & ($attr64=self).__is_instance__) && typeof $attr63 == 'function'?
						pyjslib['getattr']($attr64, 'width'):
						self['width']))==typeof ($div18=2) && typeof $div17=='number' && $div18 !== 0?
				$div17/$div18:
				pyjslib['op_div']($div17,$div18))) && (typeof $sub9=='number'||typeof $sub9=='string')?
				$sub9-$sub10:
				pyjslib['op_sub']($sub9,$sub10));
			x2 = (typeof ($add13=((($attr65=self['position_x']) !== null & ($attr66=self).__is_instance__) && typeof $attr65 == 'function'?
						pyjslib['getattr']($attr66, 'position_x'):
						self['position_x']))==typeof ($add14=(typeof ($div19=((($attr67=self['width']) !== null & ($attr68=self).__is_instance__) && typeof $attr67 == 'function'?
						pyjslib['getattr']($attr68, 'width'):
						self['width']))==typeof ($div20=2) && typeof $div19=='number' && $div20 !== 0?
				$div19/$div20:
				pyjslib['op_div']($div19,$div20))) && (typeof $add13=='number'||typeof $add13=='string')?
				$add13+$add14:
				pyjslib['op_add']($add13,$add14));
			y1 = (typeof ($sub11=((($attr69=self['position_y']) !== null & ($attr70=self).__is_instance__) && typeof $attr69 == 'function'?
						pyjslib['getattr']($attr70, 'position_y'):
						self['position_y']))==typeof ($sub12=(typeof ($div21=((($attr71=self['height']) !== null & ($attr72=self).__is_instance__) && typeof $attr71 == 'function'?
						pyjslib['getattr']($attr72, 'height'):
						self['height']))==typeof ($div22=2) && typeof $div21=='number' && $div22 !== 0?
				$div21/$div22:
				pyjslib['op_div']($div21,$div22))) && (typeof $sub11=='number'||typeof $sub11=='string')?
				$sub11-$sub12:
				pyjslib['op_sub']($sub11,$sub12));
			y2 = (typeof ($add15=((($attr73=self['position_y']) !== null & ($attr74=self).__is_instance__) && typeof $attr73 == 'function'?
						pyjslib['getattr']($attr74, 'position_y'):
						self['position_y']))==typeof ($add16=(typeof ($div23=((($attr75=self['height']) !== null & ($attr76=self).__is_instance__) && typeof $attr75 == 'function'?
						pyjslib['getattr']($attr76, 'height'):
						self['height']))==typeof ($div24=2) && typeof $div23=='number' && $div24 !== 0?
				$div23/$div24:
				pyjslib['op_div']($div23,$div24))) && (typeof $add15=='number'||typeof $add15=='string')?
				$add15+$add16:
				pyjslib['op_add']($add15,$add16));
			return pyjslib['tuple']([x1, y1, x2, y2]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['corners'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'intersects_with', function(obj) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
			}
			var b_y2,b_y1,a_y2,$and1,$and3,b_x1,a_y1,b_x2,$and4,a_x1,a_x2,$and2;
			var $tupleassign1 = self['corners']();
			a_x1 = $tupleassign1.__getitem__(0);
			a_y1 = $tupleassign1.__getitem__(1);
			a_x2 = $tupleassign1.__getitem__(2);
			a_y2 = $tupleassign1.__getitem__(3);
			var $tupleassign2 = obj['corners']();
			b_x1 = $tupleassign2.__getitem__(0);
			b_y1 = $tupleassign2.__getitem__(1);
			b_x2 = $tupleassign2.__getitem__(2);
			b_y2 = $tupleassign2.__getitem__(3);
			return (pyjslib['bool']($and1=(pyjslib['cmp'](a_x1, b_x2) == -1))?(pyjslib['bool']($and2=(pyjslib['cmp'](a_x2, b_x1) == 1))?(pyjslib['bool']($and3=(pyjslib['cmp'](a_y1, b_y2) == -1))?(pyjslib['cmp'](a_y2, b_y1) == 1):$and3):$and2):$and1);
		}
	, 1, [null,null,['self'],['obj']]);
		$cls_definition['intersects_with'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['object']));
	})();
	pong['Ball'] = (function(){
		var $cls_instance = $pyjs__class_instance('Ball');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'c83331ad56648952bcfec32dc5fdbdb6';
		$cls_definition['width'] = 10;
		$cls_definition['height'] = 10;
		$method = $pyjs__bind_method($cls_instance, 'initialize', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr80,$div25,$div27,$attr79,$div26,$attr77,$div28,$attr78;
			self.position_x = (typeof ($div25=((($attr77=self['max_x']) !== null & ($attr78=self).__is_instance__) && typeof $attr77 == 'function'?
						pyjslib['getattr']($attr78, 'max_x'):
						self['max_x']))==typeof ($div26=2) && typeof $div25=='number' && $div26 !== 0?
				$div25/$div26:
				pyjslib['op_div']($div25,$div26));
			self.position_y = (typeof ($div27=((($attr79=self['max_y']) !== null & ($attr80=self).__is_instance__) && typeof $attr79 == 'function'?
						pyjslib['getattr']($attr80, 'max_y'):
						self['max_y']))==typeof ($div28=2) && typeof $div27=='number' && $div28 !== 0?
				$div27/$div28:
				pyjslib['op_div']($div27,$div28));
			var $tupleassign3 = pong['BALL_VELOCITY'];
			self.velocity_x = $tupleassign3.__getitem__(0);
			self.velocity_y = $tupleassign3.__getitem__(1);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['initialize'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pong['GameObject']));
	})();
	pong['Paddle'] = (function(){
		var $cls_instance = $pyjs__class_instance('Paddle');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '48f77b0f748e6c3b816db4190a5ab93d';
		$cls_definition['width'] = 10;
		$cls_definition['height'] = 50;
		$method = $pyjs__bind_method($cls_instance, 'check_collision_y', function(new_y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				new_y = arguments[1];
			}
			var $attr82,$attr83,$div30,$attr81,$attr86,$attr87,$attr84,$attr85,$attr89,$div32,$div33,$sub13,$sub16,$sub15,$sub14,$add17,$div36,$add18,$attr91,$attr90,$attr92,$div29,$div35,$div31,$attr88,$div34;
			if (pyjslib['bool']((((pyjslib['cmp']((typeof ($add17=new_y)==typeof ($add18=(typeof ($div29=((($attr81=self['height']) !== null & ($attr82=self).__is_instance__) && typeof $attr81 == 'function'?
						pyjslib['getattr']($attr82, 'height'):
						self['height']))==typeof ($div30=2) && typeof $div29=='number' && $div30 !== 0?
				$div29/$div30:
				pyjslib['op_div']($div29,$div30))) && (typeof $add17=='number'||typeof $add17=='string')?
				$add17+$add18:
				pyjslib['op_add']($add17,$add18)), ((($attr83=self['max_y']) !== null & ($attr84=self).__is_instance__) && typeof $attr83 == 'function'?
						pyjslib['getattr']($attr84, 'max_y'):
						self['max_y'])))|1) == 1))) {
				new_y = (typeof ($sub13=((($attr85=self['max_y']) !== null & ($attr86=self).__is_instance__) && typeof $attr85 == 'function'?
							pyjslib['getattr']($attr86, 'max_y'):
							self['max_y']))==typeof ($sub14=(typeof ($div31=((($attr87=self['height']) !== null & ($attr88=self).__is_instance__) && typeof $attr87 == 'function'?
							pyjslib['getattr']($attr88, 'height'):
							self['height']))==typeof ($div32=2) && typeof $div31=='number' && $div32 !== 0?
					$div31/$div32:
					pyjslib['op_div']($div31,$div32))) && (typeof $sub13=='number'||typeof $sub13=='string')?
					$sub13-$sub14:
					pyjslib['op_sub']($sub13,$sub14));
				self.velocity_y = 0;
			}
			else if (pyjslib['bool']((pyjslib['cmp']((typeof ($sub15=new_y)==typeof ($sub16=(typeof ($div33=((($attr89=self['height']) !== null & ($attr90=self).__is_instance__) && typeof $attr89 == 'function'?
						pyjslib['getattr']($attr90, 'height'):
						self['height']))==typeof ($div34=2) && typeof $div33=='number' && $div34 !== 0?
				$div33/$div34:
				pyjslib['op_div']($div33,$div34))) && (typeof $sub15=='number'||typeof $sub15=='string')?
				$sub15-$sub16:
				pyjslib['op_sub']($sub15,$sub16)), 0) < 1))) {
				new_y = (typeof ($div35=((($attr91=self['height']) !== null & ($attr92=self).__is_instance__) && typeof $attr91 == 'function'?
							pyjslib['getattr']($attr92, 'height'):
							self['height']))==typeof ($div36=2) && typeof $div35=='number' && $div36 !== 0?
					$div35/$div36:
					pyjslib['op_div']($div35,$div36));
				self.velocity_y = 0;
			}
			return new_y;
		}
	, 1, [null,null,['self'],['new_y']]);
		$cls_definition['check_collision_y'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'initialize', function(is_player2) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				is_player2 = arguments[1];
			}
			if (typeof is_player2 == 'undefined') is_player2=arguments.callee.__args__[3][1];
			var $attr95,$attr94,$attr97,$attr96,$div37,$attr93,$div40,$attr99,$div39,$sub17,$attr98,$div41,$sub18,$attr100,$div38,$div42;
			self.velocity_x = 0;
			self.velocity_y = 0;
			if (pyjslib['bool'](is_player2)) {
				self.position_x = (typeof ($sub17=((($attr93=self['max_x']) !== null & ($attr94=self).__is_instance__) && typeof $attr93 == 'function'?
							pyjslib['getattr']($attr94, 'max_x'):
							self['max_x']))==typeof ($sub18=(typeof ($div37=((($attr95=self['width']) !== null & ($attr96=self).__is_instance__) && typeof $attr95 == 'function'?
							pyjslib['getattr']($attr96, 'width'):
							self['width']))==typeof ($div38=2) && typeof $div37=='number' && $div38 !== 0?
					$div37/$div38:
					pyjslib['op_div']($div37,$div38))) && (typeof $sub17=='number'||typeof $sub17=='string')?
					$sub17-$sub18:
					pyjslib['op_sub']($sub17,$sub18));
			}
			else {
				self.position_x = (typeof ($div39=((($attr97=self['width']) !== null & ($attr98=self).__is_instance__) && typeof $attr97 == 'function'?
							pyjslib['getattr']($attr98, 'width'):
							self['width']))==typeof ($div40=2) && typeof $div39=='number' && $div40 !== 0?
					$div39/$div40:
					pyjslib['op_div']($div39,$div40));
			}
			self.position_y = (typeof ($div41=((($attr99=self['max_y']) !== null & ($attr100=self).__is_instance__) && typeof $attr99 == 'function'?
						pyjslib['getattr']($attr100, 'max_y'):
						self['max_y']))==typeof ($div42=2) && typeof $div41=='number' && $div42 !== 0?
				$div41/$div42:
				pyjslib['op_div']($div41,$div42));
			return null;
		}
	, 1, [null,null,['self'],['is_player2', false]]);
		$cls_definition['initialize'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pong['GameObject']));
	})();
	pong['GameState'] = (function(){
		var $cls_instance = $pyjs__class_instance('GameState');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'dd7d202e3cf4dda889da47682552dd88';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(ball, paddle1, paddle2) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ball = arguments[1];
				paddle1 = arguments[2];
				paddle2 = arguments[3];
			}
			if (typeof ball == 'undefined') ball=arguments.callee.__args__[3][1];
			if (typeof paddle1 == 'undefined') paddle1=arguments.callee.__args__[4][1];
			if (typeof paddle2 == 'undefined') paddle2=arguments.callee.__args__[5][1];

			self.objects = pyjslib['tuple']([paddle1, paddle2, ball]);
			self.match_over = false;
			return null;
		}
	, 1, [null,null,['self'],['ball', pong['Ball']()],['paddle1', pong['Paddle']()],['paddle2', pong['Paddle']()]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'ball', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr102,$attr101;
			return ((($attr101=self['objects']) !== null & ($attr102=self).__is_instance__) && typeof $attr101 == 'function'?
						pyjslib['getattr']($attr102, 'objects'):
						self['objects']).__getitem__(2);
		}
	, 1, [null,null,['self']]);
		$cls_definition['ball'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'paddle1', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr104,$attr103;
			return ((($attr103=self['objects']) !== null & ($attr104=self).__is_instance__) && typeof $attr103 == 'function'?
						pyjslib['getattr']($attr104, 'objects'):
						self['objects']).__getitem__(0);
		}
	, 1, [null,null,['self']]);
		$cls_definition['paddle1'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'paddle2', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr106,$attr105;
			return ((($attr105=self['objects']) !== null & ($attr106=self).__is_instance__) && typeof $attr105 == 'function'?
						pyjslib['getattr']($attr106, 'objects'):
						self['objects']).__getitem__(1);
		}
	, 1, [null,null,['self']]);
		$cls_definition['paddle2'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'initialize', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.match_over = false;
			self['ball']()['initialize']();
			self['paddle1']()['initialize'](false);
			self['paddle2']()['initialize'](true);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['initialize'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'winner', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub19,$attr111,$attr110,$attr112,$attr114,$attr107,$sub20,$attr113,$attr108,$attr109;
			if (pyjslib['bool'](!pyjslib['bool'](((($attr107=self['match_over']) !== null & ($attr108=self).__is_instance__) && typeof $attr107 == 'function'?
						pyjslib['getattr']($attr108, 'match_over'):
						self['match_over'])))) {
				return null;
			}
			if (pyjslib['bool']((pyjslib['cmp'](((($attr109=self['ball']()['position_x']) !== null & ($attr110=self['ball']()).__is_instance__) && typeof $attr109 == 'function'?
						pyjslib['getattr']($attr110, 'position_x'):
						self['ball']()['position_x']), (typeof ($sub19=((($attr111=self['ball']()['max_x']) !== null & ($attr112=self['ball']()).__is_instance__) && typeof $attr111 == 'function'?
						pyjslib['getattr']($attr112, 'max_x'):
						self['ball']()['max_x']))==typeof ($sub20=((($attr113=self['ball']()['position_x']) !== null & ($attr114=self['ball']()).__is_instance__) && typeof $attr113 == 'function'?
						pyjslib['getattr']($attr114, 'position_x'):
						self['ball']()['position_x'])) && (typeof $sub19=='number'||typeof $sub19=='string')?
				$sub19-$sub20:
				pyjslib['op_sub']($sub19,$sub20))) == -1))) {
				return 1;
			}
			else {
				return 0;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['winner'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'tick', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr119,$attr118,$iter1_nextval,$iter1_type,$attr115,$attr117,$iter1_iter,$attr120,$attr121,$attr122,$iter1_array,obj,$attr116,$iter1_idx;
			if (pyjslib['bool'](((($attr115=self['match_over']) !== null & ($attr116=self).__is_instance__) && typeof $attr115 == 'function'?
						pyjslib['getattr']($attr116, 'match_over'):
						self['match_over']))) {
				return null;
			}
			$iter1_iter = self['objects'];
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):pyjslib['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				obj = $iter1_nextval;
				obj['tick']();
			}
			if (pyjslib['bool'](((($attr117=self['ball']()['collided_x']) !== null & ($attr118=self['ball']()).__is_instance__) && typeof $attr117 == 'function'?
						pyjslib['getattr']($attr118, 'collided_x'):
						self['ball']()['collided_x']))) {
				self.match_over = true;
			}
			if (pyjslib['bool'](self['paddle1']()['intersects_with'](self['ball']()))) {
				self['ball']().velocity_x = pyjslib['abs'](((($attr119=self['ball']()['velocity_x']) !== null & ($attr120=self['ball']()).__is_instance__) && typeof $attr119 == 'function'?
							pyjslib['getattr']($attr120, 'velocity_x'):
							self['ball']()['velocity_x']));
			}
			else if (pyjslib['bool'](self['paddle2']()['intersects_with'](self['ball']()))) {
				self['ball']().velocity_x = (typeof ($usub5=pyjslib['abs'](((($attr121=self['ball']()['velocity_x']) !== null & ($attr122=self['ball']()).__is_instance__) && typeof $attr121 == 'function'?
							pyjslib['getattr']($attr122, 'velocity_x'):
							self['ball']()['velocity_x'])))=='number'?
					-$usub5:
					pyjslib['op_usub']($usub5));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['tick'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'clone', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter2_nextval,$iter2_type,$iter2_iter,$iter2_idx,x,$$new,$iter2_array;
			$$new = self['__class__']();
			$$new.objects = pyjslib['tuple'](function(){
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
					$iter2_iter = self['objects'];
					if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
						$iter2_type = 0;
					} else {
						$iter2_iter = $iter2_iter.__iter__();
						$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter2_idx = 0;
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state[1] = 0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0 || typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):pyjslib['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined');$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
							x = $iter2_nextval;
							$yield_value = x['clone']();
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
			return $$new;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clone'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'clone_tick', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $$new;
			$$new = self['clone']();
			$$new['tick']();
			return $$new;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clone_tick'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'toJSON', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var jsond,obj,$attr127,$iter3_type,$attr130,$attr123,$iter3_idx,$attr124,$iter3_iter,$attr126,$iter3_array,$attr128,$attr129,$iter3_nextval,$attr125;
			jsond = pyjslib['list']([]);
			$iter3_iter = self['objects'];
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):pyjslib['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				obj = $iter3_nextval;
				jsond['append'](pyjslib['dict']([[String('position'), pyjslib['tuple']([((($attr123=obj['position_x']) !== null & ($attr124=obj).__is_instance__) && typeof $attr123 == 'function'?
							pyjslib['getattr']($attr124, 'position_x'):
							obj['position_x']), ((($attr125=obj['position_y']) !== null & ($attr126=obj).__is_instance__) && typeof $attr125 == 'function'?
							pyjslib['getattr']($attr126, 'position_y'):
							obj['position_y'])])], [String('velocity'), pyjslib['tuple']([((($attr127=obj['velocity_x']) !== null & ($attr128=obj).__is_instance__) && typeof $attr127 == 'function'?
							pyjslib['getattr']($attr128, 'velocity_x'):
							obj['velocity_x']), ((($attr129=obj['velocity_y']) !== null & ($attr130=obj).__is_instance__) && typeof $attr129 == 'function'?
							pyjslib['getattr']($attr130, 'velocity_y'):
							obj['velocity_y'])])]]));
			}
			return pyjslib['dict']([[String('ball'), jsond.__getitem__(2)], [String('paddle1'), jsond.__getitem__(0)], [String('paddle2'), jsond.__getitem__(1)]]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['toJSON'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['object']));
	})();
	pong['Pong'] = (function(){
		var $cls_instance = $pyjs__class_instance('Pong');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'aefad7fafb0614cd31bb6016d263768e';
		$cls_definition['PLAYER1'] = 0;
		$cls_definition['PLAYER2'] = 1;
		$cls_definition['NULL'] = String('N');
		$cls_definition['BALL'] = String('B');
		$cls_definition['UP_PRESS'] = String('PU');
		$cls_definition['UP_RELEASE'] = String('RU');
		$cls_definition['DOWN_PRESS'] = String('PD');
		$cls_definition['DOWN_RELEASE'] = String('RD');
		$method = $pyjs__bind_method($cls_instance, '__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr133,$attr132,$attr131,$attr134;
			self.last_action_time = pyjslib['list']([0, 0]);
			self.actions = pong['SortedCollection'](pyjslib['list']([pyjslib['tuple']([(typeof ($usub6=1)=='number'?
				-$usub6:
				pyjslib['op_usub']($usub6)), 0, ((($attr131=self['NULL']) !== null & ($attr132=self).__is_instance__) && typeof $attr131 == 'function'?
						pyjslib['getattr']($attr132, 'NULL'):
						self['NULL'])])]));
			self.states = pyjslib['list']([pong['GameState']()]);
			self.current_state = ((($attr133=self['states']) !== null & ($attr134=self).__is_instance__) && typeof $attr133 == 'function'?
						pyjslib['getattr']($attr134, 'states'):
						self['states']).__getitem__(0);
			self.current_time = 0;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'action', function(player, action_time, action, state) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				player = arguments[1];
				action_time = arguments[2];
				action = arguments[3];
				state = arguments[4];
			}
			if (typeof state == 'undefined') state=arguments.callee.__args__[6][1];
			var new_state,$attr142,index,$attr140,$attr141,$add20,action_tuple,ball,paddle2,paddle1,now,$add19,$attr137,$attr136,$attr135,$attr139,$attr138;
			if (pyjslib['bool']((pyjslib['cmp'](((($attr135=self['last_action_time']) !== null & ($attr136=self).__is_instance__) && typeof $attr135 == 'function'?
						pyjslib['getattr']($attr136, 'last_action_time'):
						self['last_action_time']).__getitem__(player), action_time) == 1))) {
				return null;
			}
			((($attr137=self['last_action_time']) !== null & ($attr138=self).__is_instance__) && typeof $attr137 == 'function'?
						pyjslib['getattr']($attr138, 'last_action_time'):
						self['last_action_time']).__setitem__(player, action_time);
			action_tuple = pyjslib['tuple']([action_time, player, action]);
			index = self['actions']['insert_right'](action_tuple);
			pyjslib['__delslice'](((($attr139=self['states']) !== null & ($attr140=self).__is_instance__) && typeof $attr139 == 'function'?
						pyjslib['getattr']($attr140, 'states'):
						self['states']), (typeof ($add19=index)==typeof ($add20=1) && (typeof $add19=='number'||typeof $add19=='string')?
				$add19+$add20:
				pyjslib['op_add']($add19,$add20)), null);
			if (pyjslib['bool']((state !== null))) {
				new_state = pong['GameState']();
				ball = new_state['ball']();
				var $tupleassign4 = state.__getitem__(String('ball')).__getitem__(String('position'));
				ball.position_x = $tupleassign4.__getitem__(0);
				ball.position_y = $tupleassign4.__getitem__(1);
				var $tupleassign5 = state.__getitem__(String('ball')).__getitem__(String('velocity'));
				ball.velocity_x = $tupleassign5.__getitem__(0);
				ball.velocity_y = $tupleassign5.__getitem__(1);
				paddle1 = new_state['paddle1']();
				var $tupleassign6 = state.__getitem__(String('paddle1')).__getitem__(String('position'));
				paddle1.position_x = $tupleassign6.__getitem__(0);
				paddle1.position_y = $tupleassign6.__getitem__(1);
				var $tupleassign7 = state.__getitem__(String('paddle1')).__getitem__(String('velocity'));
				paddle1.velocity_x = $tupleassign7.__getitem__(0);
				paddle1.velocity_y = $tupleassign7.__getitem__(1);
				paddle2 = new_state['paddle2']();
				var $tupleassign8 = state.__getitem__(String('paddle2')).__getitem__(String('position'));
				paddle2.position_x = $tupleassign8.__getitem__(0);
				paddle2.position_y = $tupleassign8.__getitem__(1);
				var $tupleassign9 = state.__getitem__(String('paddle2')).__getitem__(String('velocity'));
				paddle2.velocity_x = $tupleassign9.__getitem__(0);
				paddle2.velocity_y = $tupleassign9.__getitem__(1);
				self['states']['append'](new_state);
			}
			now = ((($attr141=self['current_time']) !== null & ($attr142=self).__is_instance__) && typeof $attr141 == 'function'?
						pyjslib['getattr']($attr142, 'current_time'):
						self['current_time']);
			self['simulate']();
			self['tick_until'](now);
			return null;
		}
	, 1, [null,null,['self'],['player'],['action_time'],['action'],['state', null]]);
		$cls_definition['action'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'simulate', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub22,$attr143,current_action,$sub21,$attr146,$attr147,$attr144,$attr145,$add21,$attr149,$add22,current_idx,$add24,$attr152,$attr151,$add23,$attr148,$attr150;
			current_idx = (typeof ($sub21=pyjslib['len'](((($attr143=self['states']) !== null & ($attr144=self).__is_instance__) && typeof $attr143 == 'function'?
						pyjslib['getattr']($attr144, 'states'):
						self['states'])))==typeof ($sub22=1) && (typeof $sub21=='number'||typeof $sub21=='string')?
				$sub21-$sub22:
				pyjslib['op_sub']($sub21,$sub22));
			self.current_state = ((($attr145=self['states']) !== null & ($attr146=self).__is_instance__) && typeof $attr145 == 'function'?
						pyjslib['getattr']($attr146, 'states'):
						self['states']).__getitem__((typeof ($usub7=1)=='number'?
				-$usub7:
				pyjslib['op_usub']($usub7)));
			self.current_time = ((($attr147=self['actions']) !== null & ($attr148=self).__is_instance__) && typeof $attr147 == 'function'?
						pyjslib['getattr']($attr148, 'actions'):
						self['actions']).__getitem__(current_idx).__getitem__(0);
			current_idx = (typeof ($add21=current_idx)==typeof ($add22=1) && (typeof $add21=='number'||typeof $add21=='string')?
				$add21+$add22:
				pyjslib['op_add']($add21,$add22));
			while (pyjslib['bool']((pyjslib['cmp'](current_idx, pyjslib['len'](((($attr149=self['actions']) !== null & ($attr150=self).__is_instance__) && typeof $attr149 == 'function'?
						pyjslib['getattr']($attr150, 'actions'):
						self['actions']))) == -1))) {
				current_action = ((($attr151=self['actions']) !== null & ($attr152=self).__is_instance__) && typeof $attr151 == 'function'?
							pyjslib['getattr']($attr152, 'actions'):
							self['actions']).__getitem__(current_idx);
				current_idx = (typeof ($add23=current_idx)==typeof ($add24=1) && (typeof $add23=='number'||typeof $add23=='string')?
					$add23+$add24:
					pyjslib['op_add']($add23,$add24));
				self['tick_until'](current_action.__getitem__(0));
				self['_run_action'](current_action);
				self['states']['append'](self['current_state']['clone']());
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['simulate'] = $method;
		$method = $pyjs__bind_method($cls_instance, '_run_action', function(action_tuple) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				action_tuple = arguments[1];
			}
			var $sub23,$sub24,$add25,$attr172,player,$attr162,$attr163,$attr168,$attr169,$attr164,$attr165,$attr167,$attr160,$attr161,paddle,$add26,$attr173,$attr154,$attr155,action_time,$attr157,$attr156,$attr153,$attr174,$attr159,$attr158,$attr171,$attr170,action,$attr166;
			var $tupleassign10 = action_tuple;
			action_time = $tupleassign10.__getitem__(0);
			player = $tupleassign10.__getitem__(1);
			action = $tupleassign10.__getitem__(2);
			paddle = ((($attr153=self['current_state']['objects']) !== null & ($attr154=self['current_state']).__is_instance__) && typeof $attr153 == 'function'?
						pyjslib['getattr']($attr154, 'objects'):
						self['current_state']['objects']).__getitem__(player);
			if (pyjslib['bool'](pyjslib['op_eq'](action, ((($attr155=self['NULL']) !== null & ($attr156=self).__is_instance__) && typeof $attr155 == 'function'?
						pyjslib['getattr']($attr156, 'NULL'):
						self['NULL'])))) {
			}
			else if (pyjslib['bool'](pyjslib['op_eq'](action, ((($attr157=self['BALL']) !== null & ($attr158=self).__is_instance__) && typeof $attr157 == 'function'?
						pyjslib['getattr']($attr158, 'BALL'):
						self['BALL'])))) {
				self['current_state']['initialize']();
			}
			else if (pyjslib['bool'](pyjslib['op_eq'](action, ((($attr159=self['UP_PRESS']) !== null & ($attr160=self).__is_instance__) && typeof $attr159 == 'function'?
						pyjslib['getattr']($attr160, 'UP_PRESS'):
						self['UP_PRESS'])))) {
				paddle.velocity_y = pyjslib['min']((typeof ($add25=((($attr161=paddle['velocity_y']) !== null & ($attr162=paddle).__is_instance__) && typeof $attr161 == 'function'?
							pyjslib['getattr']($attr162, 'velocity_y'):
							paddle['velocity_y']))==typeof ($add26=pong['PADDLE_VELOCITY']) && (typeof $add25=='number'||typeof $add25=='string')?
					$add25+$add26:
					pyjslib['op_add']($add25,$add26)), pong['PADDLE_VELOCITY']);
			}
			else if (pyjslib['bool'](pyjslib['op_eq'](action, ((($attr163=self['UP_RELEASE']) !== null & ($attr164=self).__is_instance__) && typeof $attr163 == 'function'?
						pyjslib['getattr']($attr164, 'UP_RELEASE'):
						self['UP_RELEASE'])))) {
				if (pyjslib['bool']((pyjslib['cmp'](((($attr165=paddle['velocity_y']) !== null & ($attr166=paddle).__is_instance__) && typeof $attr165 == 'function'?
							pyjslib['getattr']($attr166, 'velocity_y'):
							paddle['velocity_y']), 0) == 1))) {
					paddle.velocity_y = 0;
				}
			}
			else if (pyjslib['bool'](pyjslib['op_eq'](action, ((($attr167=self['DOWN_PRESS']) !== null & ($attr168=self).__is_instance__) && typeof $attr167 == 'function'?
						pyjslib['getattr']($attr168, 'DOWN_PRESS'):
						self['DOWN_PRESS'])))) {
				paddle.velocity_y = pyjslib['max']((typeof ($sub23=((($attr169=paddle['velocity_y']) !== null & ($attr170=paddle).__is_instance__) && typeof $attr169 == 'function'?
							pyjslib['getattr']($attr170, 'velocity_y'):
							paddle['velocity_y']))==typeof ($sub24=pong['PADDLE_VELOCITY']) && (typeof $sub23=='number'||typeof $sub23=='string')?
					$sub23-$sub24:
					pyjslib['op_sub']($sub23,$sub24)), (typeof ($usub8=pong['PADDLE_VELOCITY'])=='number'?
					-$usub8:
					pyjslib['op_usub']($usub8)));
			}
			else if (pyjslib['bool'](pyjslib['op_eq'](action, ((($attr171=self['DOWN_RELEASE']) !== null & ($attr172=self).__is_instance__) && typeof $attr171 == 'function'?
						pyjslib['getattr']($attr172, 'DOWN_RELEASE'):
						self['DOWN_RELEASE'])))) {
				if (pyjslib['bool']((pyjslib['cmp'](((($attr173=paddle['velocity_y']) !== null & ($attr174=paddle).__is_instance__) && typeof $attr173 == 'function'?
							pyjslib['getattr']($attr174, 'velocity_y'):
							paddle['velocity_y']), 0) == -1))) {
					paddle.velocity_y = 0;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['action_tuple']]);
		$cls_definition['_run_action'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'tick_until', function(time) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				time = arguments[1];
			}
			var $attr178,$attr177,$attr176,$and5,$and6,$attr175;
			while (pyjslib['bool']((pyjslib['bool']($and5=!pyjslib['bool'](((($attr175=self['current_state']['match_over']) !== null & ($attr176=self['current_state']).__is_instance__) && typeof $attr175 == 'function'?
						pyjslib['getattr']($attr176, 'match_over'):
						self['current_state']['match_over'])))?(pyjslib['cmp'](((($attr177=self['current_time']) !== null & ($attr178=self).__is_instance__) && typeof $attr177 == 'function'?
						pyjslib['getattr']($attr178, 'current_time'):
						self['current_time']), time) == -1):$and5))) {
				self['tick']();
			}
			return null;
		}
	, 1, [null,null,['self'],['time']]);
		$cls_definition['tick_until'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'tick', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add28,$attr180,$attr179,$add27;
			self['current_state']['tick']();
			self.current_time = (typeof ($add27=((($attr179=self['current_time']) !== null & ($attr180=self).__is_instance__) && typeof $attr179 == 'function'?
						pyjslib['getattr']($attr180, 'current_time'):
						self['current_time']))==typeof ($add28=1) && (typeof $add27=='number'||typeof $add27=='string')?
				$add27+$add28:
				pyjslib['op_add']($add27,$add28));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['tick'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['object']));
	})();
	return this;
}; /* end pong */


/* end module: pong */


/*
PYJS_DEPS: ['SortedCollection.SortedCollection', 'SortedCollection']
*/
