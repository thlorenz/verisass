#!/usr/bin/env sh

# appearently after installing the sass gem neither sass nor scss are available globally as a command
(command -v scss >/dev/null 2>&1 && scss) || \
  export scss=`gem environment | grep '\- EXECUTABLE DIRECTORY:' | sed 's/\- EXECUTABLE DIRECTORY: //'`/sass
