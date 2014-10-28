# Styles

## not implemented this is for the Future.

### JSON Docs
```
"default" :       # Style Name
    "font-base" : # Base font the Riddle will be using
    "font-emph" : # Emphasis font for the words that stand out!
```
#### Implementation Notes

Styles sort of work like CSS as in that it will cascade. There will be a base style in settings.json, but there could also be a level style in level.json that would override the settings. And, there could be a style in a riddle itself that would overide all of those, if it was there of course. Heck, If I really wanted to I could even hardcode a syle into one line in the riddle text line it's self.

