#!/bin/bash

# pede ao usuário o caminho de arquivo/diretório 
# imprime se é arquivo comum, diretório ou outro tipo de arquivo

read -p "Informe o caminho do arquivo ou diretório: " PATH

if [ -d $PATH ]
then
	echo "Diretório"
elif [ -f $PATH ]
then	
	echo "Arquivo comum"
else
	echo "Outro tipo de arquivo"
fi
