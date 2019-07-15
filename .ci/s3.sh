#!/usr/bin/env bash

# Install pip dependencies
pip install setuptools wheel

# install AWS CLI
pip install awscli --user

# make awscli visible on PATH
export PATH="$PATH:$HOME/.local/bin"

# export the AWS access and secret keys
export AWS_ACCESS_KEY_ID="$accessKey"
export AWS_SECRET_ACCESS_KEY="$secretKey"

# copy the artifact and unzip it
cp "${artifactDir}/${artifactObj}" .
unzip "$artifactObj"

# delete previous documentation assets on S3
aws s3 rm --recursive "$s3Bucket"

# upload all files to the bucket
aws s3 cp --recursive ./docs "$s3Bucket"

# configure the bucket to host a static website
aws s3 website "$s3Bucket" --index-document index.html
