#!/bin/bash
# Used by pm2 to autostart mirror on startup
cd MagicMirror
DISPLAY=:0 nohup npm start
