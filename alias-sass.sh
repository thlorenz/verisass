#!/usr/bin/env sh

# appearently after installing the sass gem neither sass nor scss are available globally as a command
echo `gem environment | grep '\- INSTALLATION DIRECTORY:' | sed 's/\- INSTALLATION DIRECTORY: //'`/gems/sass*/bin/scss
