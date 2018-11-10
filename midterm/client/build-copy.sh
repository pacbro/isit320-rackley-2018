#! /usr/bin/env bash
# run build script for assignment
# by jordan rackley

SERVER_DIR=echo $(cd ../server/public && pwd)

echo "build client"
npm run build

echo "remove old build files"
sudo rm -r ""$SERVER_DIR"/precache-manifest*.js" 
sudo rm -r ""$SERVER_DIR"/static"

echo "copy build into server/public"
sudo cp -r build "$SERVER_DIR"
 

