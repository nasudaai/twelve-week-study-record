#!/bin/bash

day=$(date +"%Y-%m-%d")
time=$(date +"%H:%M:%S")

if [ "$1" = "day" ]; then

  echo "$day"
  
elif [ "$1" = "time" ]; then

  echo "$time"
fi
