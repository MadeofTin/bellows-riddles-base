# Mode Settings

Mode settings defines the modes avaible.
```
"unlock" : means how many points you need to spend to unlock.
"levels" : must point to a file in ./mode-levels that contains the level information
```

## Levels in mode have an ID Style guide

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
