export class DataHelper{
	data : String = ""
	count  = 0

	addParam(param : any,value : any){
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

	addAll(obj : any, prefix : any) : any {
        var str = [],
            p;
        for (p in obj) {
            if (obj.hasOwnProperty(p)) {
                var k = prefix ? prefix + "[" + p + "]" : p,
                    v = obj[p];
                str.push((v !== null && typeof v === "object") ?
                    this.addAll(v, k) :
                    encodeURIComponent(k) + "=" + encodeURIComponent(v));
            }
        }
        return str.join("&");

    }

	getData(){
		return this.data;
	}

}