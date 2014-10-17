# Styles

### JSON Docs
```
"default" :       # Style Name
    "font-base" : # Base font the Riddle will be using
    "font-emph" : # Emphasis font for the words that stand out!
```
#### Implementation Notes

Styles sort of work like CSS as in the cascade there will be a base style in settings.json, but there could also be a base style in level that would override that. And, there could be a style in a riddle itself that would overide all of those, if it was there of course.

Not sure how to store fonts and things. Maybe just put them up in the google-cloud-storage?
