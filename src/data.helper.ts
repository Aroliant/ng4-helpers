export class DataHelper{
	data : String = ""
	count  = 0

	addParam(param,value){
		if(this.count != 0){
			this.data += "&" + param + "=" + encodeURIComponent(value)
		}else{
			this.data += param + "=" + encodeURIComponent(value)
		}
		this.count++
	}

	clear(){
		this.data = ""
		this.count = 0;
	}

	addAll(obj,scope=""){

		if(typeof obj !== "object")
		if(typeof console !== "undefined"){
			console.log("ng4-helpers : Provide a JSON Object");
			return null;
		}

		let u = encodeURIComponent;
	    let encodedURL = "";
	    let keys = Object.keys(obj);

	    for(let i=0; i < keys.length; i++){
	    
	    	let k = scope ? scope + "[" + keys[i] + "]" : keys[i];

	    	if(typeof obj[keys[i]] !== "object"){
	        encodedURL += u(k) + "=" + u(obj[keys[i]]);
	      } else {
	        encodedURL += this.addAll(obj[keys[i]], k)
	      }
	      if(i < (keys.length-1))encodedURL+="&";
	    }


		return encodedURL;
	}

	getData(){
		return this.data;
	}

}