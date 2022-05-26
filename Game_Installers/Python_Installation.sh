#!/bin/bash

echo "Checking package install..."
sleep 2
var='False'
type -P python3 >/dev/null 2>&1 && var='True'
if [[ $var == 'False' ]]
then
    echo "Python mancante..."
    sleep 2
    sudo apt-get update
    sudo apt-get install python3.6
fi
var='False'
type -P pip >/dev/null 2>&1 && var='True'
if [ $var == 'False' ]
then
    sudo apt-get update
    sudo apt install python3-pip
fi
var='False'

if python3 -c 'import pkgutil; exit(not pkgutil.find_loader("pygame"))'; then     var='True'; else     var='False'; fi

if [ $var == 'False' ]
then
    sudo pip install pygame
    var='True'
fi

if [ $var == 'True' ]
then
    echo "All packages are succefly installed..."
    sleep 1
fi

echo -n "Vuoi avviare il gioco(s/n): "
read avvia

if [ $avvia == 's' ]
then
cd ..
cd ./Python
python3 main.py
fi