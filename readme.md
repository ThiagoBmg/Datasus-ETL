Após encontrar alguns problemas com a base do Datasus, resolvi desenvolver este script que realiza um processo de ETL.
Basicamente realiza a leitura de um arquivo CSV, utiliza o delimitador ";" e depois disto corrige os valores que estão errados no datasus. 

Estes erros na base, geram problemas de tipagem na hora de importar para um banco de dados. 

Este script transforma csv em JSON, e pode ser manipulado e utilizado também para realizar a importação para um banco de dados de sua preferência. 

Por conta do tamanho dos arquivos, não foi importado também o diretório com a base do datasus.
Após realizar o download da base, será necessário criar um diretório chamado data, na raiz do projeto,e depois mover a base toda do datasus para o mesmo. 
