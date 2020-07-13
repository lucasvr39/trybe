#!/bin/bash


# variável que recebe a data de hoje no formato desejado
DATA=$(date +'%m-%d-%Y')

# variável que recebe o comando pelo qual o laço fará a iteração
PROC=$(ls ./*png)

# renomeia todos arquivos png colocando a data no ínicio
for ARQUIVO in $PROC; do
	mv "$ARQUIVO" "$DATA""-""$ARQUIVO"
done
