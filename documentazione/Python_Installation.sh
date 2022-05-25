#!/bin/bash

echo "Checking package install..."
sleep 2
var='False'
type -P python3 >/dev/null 2>&1 && var='True'
if [[ $var == 'False' ]]
then
    sudo apt-get update
    sudo apt-get install python3.6
fi
var='False'
type -P pip >/dev/null 2>&1 && var='True'
if [ $var == 'False' ]
then
    sudo apt install python3-pip
fi
var='False'
type -P pygame >/dev/null 2>&1 && var='True'
if [ $var == 'False' ]
then
    sudo pip install pygame
fi



