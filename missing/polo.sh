#!/bin/bash

cd "$marco" || pass

if [[ $? -ne 0 ]]; then
        echo "Marco does not exist"
        marco=$(pwd)
        echo "Marco is now set to"
        echo "$marco"
fi