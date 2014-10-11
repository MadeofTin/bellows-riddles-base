# Welcome to the settings file

This will define the default of all of the apps. If someone is at the default level of something and I change it on my end then it would change on their end. If they bought and upgrade to something it would stay at the upgraded amount. So I shouldn't overide their settings unless we do like a force or something. But we probably won't need to do that.


### JSON Docs

```
   "default-background-image" : #Somewhere in the google cloud storage
   "default-style" : #ID of a style image that is in the styles.json
   
   "mechanic-rules" : # Defines the mechanics
		"lives" :                    # Rule name
			"default-bank-size": 10, # Starting bank size. Probably upgradeable so don't change back if the user has changed it.
			"replenish":10,          # Amount of time in minutes that it should wait to refresh.
	...
```

