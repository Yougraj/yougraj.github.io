#!/bin/bash
git submodule update --remote --merge
git add *
git commit --allow-empty-message -m "" 
git push
