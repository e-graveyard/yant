#!/usr/bin/env bash

# generate documentation assets
npm run docs

# zip and move to the artifacts directory
zip -r "$documentationArtifactObject" docs/
