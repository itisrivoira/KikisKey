#!/bin/bash

echo "Checking package install..."
sleep 2
var='False'
type -P nodejs >/dev/null 2>&1 && var='True'
if [[ $var == 'False' ]]
then
    echo "Python mancante..."
    sleep 2
    sudo apt-get update
    sudo apt -y update
    sudo apt -y upgrade
    sudo apt-get install nodejs
fi
var='False'
type -P npm >/dev/null 2>&1 && var='True'
if [ $var == 'False' ]
then
    sudo apt-get update
    sudo apt install npm
    cd ..
    cd ./WebGame
    npm i
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
npm run start
fi