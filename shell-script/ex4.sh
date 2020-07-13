#!/bin/bash

# verifica se o caminho até o arquivo existe

PATH=/home/default/Dropbox/trybe_aulas/semana_1/unix_and_bash/shell_script/exerc_shell/

FILE=arquivo.txt

if [ -e $PATH ]
then
	echo "O caminho $PATH está habilitado!"
		if [ -w $PATH$FILE ]
		then
			echo "Você tem permissão para editar $FILE"
		else
			echo "Você não tem permissão para editar o arquivo"
		fi
else
	echo "O caminho não está habilitado"
fi
