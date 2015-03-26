var TIME = (function(module){

	module.CLICK = function(resultObject){
		resultObject.prepend(Date() + '<br/>');
	};

	return module;
}(TIME || {})); 