#!/bin/bash

option="$1"

if [ "$option" != "f" ] && [ "$option" != "u" ]; then

  echo "usage: <option> f or u "
  exit 1
fi


if [ "$option" = "u" ]; then
  
  date
  exit 0
fi

#add conditional
date +"%Y-%m-%d %H:%M:%S"

#ust=$(date)
#echo $ust
