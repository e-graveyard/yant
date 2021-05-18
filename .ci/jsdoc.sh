#!/usr/bin/env bash

# generate documentation assets
npm run build:docs

# zip and move to the artifacts directory
zip -r "$documentationArtifactObject" docs/
