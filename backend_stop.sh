#!/bin/bash

# Stop the Docker container
docker stop my-node-container

# Remove the Docker container
docker rm my-node-container

# Remove the Docker image
docker rmi my-node-app
