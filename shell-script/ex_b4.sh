#!/bin/bash

# recebe diretório e extensão como argumentos e armazena em variáveis
DIR=$1
EXT=$2

# variável que recebe a data de hoje no formato desejado
DATA=$(date +'%m-%d-%Y')

cd $DIR # transfere o Script numa subshell para o diretório informado

# itera pelos arquivos da extensão informada
# apresenta como ficará o nome do arquivo antes serem renomeados
for ARQUIVO in $(ls *.$EXT); do
	echo "O $ARQUIVO passará a se chamar $DATA-$ARQUIVO."; sleep 1
done

read -r -p "Deseja continuar? s/n " RESP # recebe a resposta do usuário se deseja continuar a operação

if [ "$RESP" = "s" ]; then #testa a resposta do usuário para dar continuidade
	
	for ARQUIVO in $(ls *.$EXT); do #renomeia os arquivos
		mv "$ARQUIVO" "$DATA""-""$ARQUIVO"
	done

else
	echo "Operação cancelada!"
	exit
fi