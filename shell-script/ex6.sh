#!/bin/bash

# recebe o caminho do arquivo/diretório como argumento
# imprime se é arquivo comum

if [ -d $1 ]
then
	echo "Diretório"
elif [ -f $1 ]
then	
	echo "Arquivo comum"
else
	echo "Outro tipo de arquivo"
fi
