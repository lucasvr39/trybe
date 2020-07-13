#!/bin/bash

# recebe um diretório como argumento ou parâmetro
# mostra quantos arquivos o diretório tem

if [ -d $1 ]; then
	echo "O $1 tem `find $1 -type f | wc -l` arquivos."
else
	echo "O argumento $1 não é um diretório!"

fi
