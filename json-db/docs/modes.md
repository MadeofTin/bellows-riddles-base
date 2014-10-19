# Mode Settings

Mode settings defines the modes avaible.

```python
"modes" : {
    "basic" : #ID
      "levels" : "/json/modes/basic-levels.json", # the path from the json-db directory
      "riddle-background" : "/assets/levels/white-wood-texture.jpg" # the path from the json-db directory
    },
```

## mode-levels

### JSON Format
```
  "l-b-1" : {
    "parent" : "start",       # The level that procedes it.
    "number-of-riddles" : 5,
    "riddles" : ["r1","r2","r3","r4","r5"]
  },
```

##### Style guide to level IDs

Basic mode is `l-1`. All other modes have an addition space inbetween `l-sci-1`.
The `l` designates it as a level object.
The `1` designates it as the first level.
The `sci` deisgnates it as belonging to the scientific mode.

You can have any url valid ascii characters in between the first and last `-`,
but you can only have alphanumerica characters before or after it.

```
l-sd-g-1
```
would be intrepreted as `l` for level, and number `1` for the level number.
`sd-g` would describe the mode the group belongs to.
