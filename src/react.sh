#!/bin/bash
### Set Language
TEXTDOMAIN=virtualhost

### Set default parameters
name=$1
rootdir=$2

cd $rootdir

mkdir $name
cd  $name
touch 'index.js'

for planet in actions reducers saga view containers components constants
do
  mkdir $planet
  touch $planet'/index.js'
done
