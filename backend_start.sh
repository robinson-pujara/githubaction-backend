#!/bin/bash


docker build -t my-todo-app .

mkdir -p /usr


docker run -d --name my-todo-container -p 3000:3000 -v /usr:/usr/src/app/data my-node-app

 
