#!/bin/bash

echo "Checking package install..."
sleep 1.5
var='False'
type -P nodejs >/dev/null 2>&1 && var='True'
if [[ $var == 'False' ]]
then
    echo "NodeJs mancante..."
    sleep 0.5
    sudo apt-get update
    sudo apt -y update
    sudo apt -y upgrade
    sudo apt-get install nodejs
fi
var='False'
type -P npm >/dev/null 2>&1 && var='True'
if [ $var == 'False' ]
then
    echo "Npm mancante..."
    sleep 0.5
    sudo apt-get update
    sudo apt install npm
    cd ..
    cd ./WebGame
    npm i
fi

var='False'
FILE=./package.json

if test -f "$FILE"; then
    var='True'
fi

if [ $var == 'False' ]
then
    npm i
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