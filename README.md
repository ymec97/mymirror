# Gift Mirror
#Stuff i learned or need
In order to execute the mirror every boot I used pm2 service.
I created a script called mm.sh that executes the mirror, and registerd it to pm2 so it will execute it every boot.
The script must be placed in the same driectory as the MagicMirror directory.
Also if I want to change the path of mm i need to notify it to the pm2 service

Files i configured and their original paths
["index.html": "index.html"]
["config.js": "config/config.js"]
["custom.css": "css/custom.css"]

Also I need to keep watch on the modules im using (right now only MMM-GooglePhotos - it has specific files ! like my credentials and token so

Modules confiurable files:
["Module": "MMM-GooglePhotos"]
["token.json"] - Private file! shouldn't be uploaded to a public repo, might have to create another repo for that
["credentials.json"] - Private file! shouldn't be uploaded to a public repo, might have to create another repo for that
 
#to turn off the display
vcgencmd display_power 0
#turn it back on is the same with 1 ofcourse

# The mirror will be turned off every day at 10 pm and turned back on at 07
# to do this i used
crontab -e 
# then added the following lines
00 07 * * * vcgencmd display_power 1
00 22 * * * vcgencmd display_power 0


# To rotate the display 90 degress to the right
# Add this line to /boot/config.txt
display_rotate=1 90 degrees


# Tokens!
In order to present pictures on the mirror i use a module named MMM-GooglePhotos which is deprecated (no live support).
This means using Google API to get the pictures from an album i created with pictures.
In order to do that I had to create an API key for google photos, create credentials and an OAuth 2.0 screen for my application
and then use a script the module provided for generating a toekn. The token is used to access the private user data I permitted the application to access.
Tokens can expire, luckily the module handles refreshing them (the token file has a "refresh_token" field provided that the module uses)
In the future if any problems rise with an expired token i should look at GPhotos file located in the module.
