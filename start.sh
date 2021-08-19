#!/bin/bash

./node_modules/.bin/concurrently \
    "yarn workspace mod-header start" \
    "yarn workspace mod-home start" \
    "yarn workspace mod-about start" \
    "yarn workspace mod-app start" \
    "yarn workspace app-main start"
