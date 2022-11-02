#!/bin/sh
set -ex

SPEC_PATH=openapi.yaml
PACKAGE_DIR=packages/api_interfaces_ts
OUTPUT_PATH=$PACKAGE_DIR/types.ts

rm -rf $OUTPUT_PATH
npx openapi-typescript ./$SPEC_PATH --output $OUTPUT_PATH
(cd $PACKAGE_DIR && npm version patch)
