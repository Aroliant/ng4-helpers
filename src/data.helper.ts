export class DataHelper{
	data : String = ""
	count  = 0

	addParameter(param,value){
		if(this.count != 0){
			this.data += "&" + param + "=" + encodeURIComponent(value)
		}else{
			this.data += param + "=" + encodeURIComponent(value)
		}
		this.count++
	}

	addAll(obj){
		this.data = ""
		for (var key in obj) {
		    if (this.data != "") {
		        this.data += "&";
		    }
		    this.data += key + "=" + encodeURIComponent(obj[key]);
		}
	}

	getData(){
		return this.data;
	}

}