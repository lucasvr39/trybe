#!/bin/bash

# recebe caminhos de arquivo/diretório ilimitados como argumento e transforma em um array
ARG=$@

# imprime se é arquivo comum, diretório ou outro tipo de arquiv
for PARAMETRO in $ARG; 
do
	if [ -d $PARAMETRO ]
	then
		echo "Diretório"
	elif [ -f $PARAMETRO ]
	then	
		echo "Arquivo comum"
	else
		echo "Outro tipo de arquivo"
	fi
done
