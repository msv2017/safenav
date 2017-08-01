module.exports = 

function (obj, defaultValue){
	return function(){
		if(obj){
			var fn = Array.prototype.slice.call(arguments, -1)[0];
			var navs = fn.toString().replace(/\s+/g, '').split('.').slice(1);
			for(var i = 0; i < navs.length; i++){
				if(obj[navs[i]]){
					obj = obj[navs[i]];
				}
				else{
					return defaultValue;
				}
			}
			
			return obj;
		}
	}
};