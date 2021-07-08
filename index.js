const ETL =  require('./modules/etl');


//para chamar um novo processo de ETL com um arquivo da base do datasus
// const exemplo = new ETL("./data/{nome do arquivo}.csv")
const tb_estabelecimento = new ETL("./data/tbEstabelecimento.csv");
const tb_municipio = new ETL("./data/tbMunicipio.csv");
const tb_naturezaJuridica = new ETL("./data/tbNaturezaJuridica.csv");
const tb_tipoUnidade = new ETL("./data/tbTipoUnidade.csv");
