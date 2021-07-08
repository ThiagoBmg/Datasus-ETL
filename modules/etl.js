'use strict'; 

const fs = require('fs');

class A_Pipeline{
	constructor(data_folder){
		console.time(`etl process ${data_folder}`);
		this.d_A = this.readFile(data_folder);
		this.d_B = this.transform(this.d_A);
		this.d_C = this.load(this.d_B);
		console.timeEnd(`etl process ${data_folder}`);
	}
		
	readFile(file){
		const data = fs.readFileSync(file);
		return data.toString();
	}

	transform(d_i){ // d_i === dados armazenados sem tratamento	
		var e = d_i.split("\n");
		this.header;
		var d_tmp = [];
		
		e.map((value,i)=>{
			(!i)? this.header = value.split(";") : 
			d_tmp.push(value.split(";"))
		});
	
		var r_tmp = [];
		d_tmp.map((v, i)=>{	
			var text_tmp = ''	
			v.map((value, index)=>{
				var text_format = `${this.header[index]}:"${value.replace('"','').replace('"','').split('\\')}"`;
				(!index)? text_tmp =`{${text_format},` :
				(index<this.header.length -1)? text_tmp +=`${text_format},`:
				(index === this.header.length -1)?text_tmp += `${text_format}}` : false;
			});
			try{
				return r_tmp.push(JSON.parse(text_tmp));
			}
			catch(error){
			//	console.error(`A seguinte string não foi incluida nos dados por estar em um formato inválido: ${text_tmp} \b`);
			}
		});
		return r_tmp;
	}

	load(data){
		//return fs.writeFileSync("result.json", JSON.stringify(data));
		//return console.log(data)
		return data
	}
}

module.exports = A_Pipeline; 
//const test = new A_Pipeline('./data/tbEstabelecimento202011.csv');
//const teste2 = new A_Pipeline('./data/rlEstabComplementar202011.csv');
//const teste3 = new A_Pipeline('./data/rlEstabAvaliacao.csv');
