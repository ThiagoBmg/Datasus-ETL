const ETL =  require('./modules/etl');

//para chamar um novo processo de ETL com um arquivo da base do datasus
// const exemplo = new ETL("./data/{nome do arquivo}.csv")
const tb_estabelecimento = new ETL("./data/tbEstabelecimento.csv"),
      tb_tipoUnidade = new ETL("./data/tbTipoUnidade.csv");

const estabelecimentos = tb_estabelecimento.d_C.filter((value)=> !value.CO_MOTIVO_DESAB);
const estabelecimentos_desativados = tb_estabelecimento.d_C.filter((value)=> !!value.CO_MOTIVO_DESAB);

console.log(`\b Quantidade de estabelecimentos (total): ${tb_estabelecimento.d_C.length} `);
console.log(`\b Quantidade de estabelecimentos desativados: ${estabelecimentos_desativados.length}`);
console.log(`\b Quantidade de estabelecimentos ativos: ${estabelecimentos.length}`);

var m_tipo = [0,0] ; // variavel responsável por guardar o tipo de unidade com mais estabelecimentos
tb_tipoUnidade.d_C.forEach((value,index)=>{
	var result = tb_estabelecimento.d_C.filter(obj=> obj.TP_UNIDADE == value.CO_TIPO_UNIDADE);
	tb_tipoUnidade.d_C[index] = {...tb_tipoUnidade.d_C[index], "quantidade_estabelecimentos":result.length};
	if (m_tipo[1]<result.length) m_tipo = [index, result.length]
});
console.log(`\b Tipo de Unidade com mais estabelecimentos: ${tb_tipoUnidade.d_C[m_tipo[0]].DS_TIPO_UNIDADE} \n Quantidade: ${tb_tipoUnidade.d_C[m_tipo[0]].quantidade_estabelecimentos}`);
