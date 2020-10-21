#!/usr/bin/env bash

# get latest tag
tag="$(git tag | tail -n 1)"

# caian/yant:latest && vX.Y.Z
latest="$imageName:latest"
tagged="$imageName:$tag"

# log to dockerhub
echo "$dockerHubPassword" | docker login -u caian --password-stdin

# build image and push latest
docker build -t "$latest" .
docker push "$latest"

# tag from git tag and push
docker tag "$latest" "$tagged"
docker push "$tagged"
