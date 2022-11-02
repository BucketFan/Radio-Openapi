#!/bin/sh
set -ex

DOCKER_VOLUME="/local"
SPEC_PATH=openapi.yaml
PACKAGE_DIR=packages/api_client_ts

# クライアントコードの生成
docker run --rm -v "${PWD}:$DOCKER_VOLUME" openapitools/openapi-generator-cli generate \
     -i $DOCKER_VOLUME/$SPEC_PATH \
     -g typescript-fetch \
     -o $DOCKER_VOLUME/$PACKAGE_DIR \
     --additional-properties=supportsES6=true,withInterfaces=true,useSingleRequestParameter=false,typescriptThreePlus=true

(cd $PACKAGE_DIR && npm version patch)