# Riddles Documentation

Riddles are ordered in ID based on the order I wrote them.

Following the pattern

```
r1 : Word
r2 : Word3
```

### JSON Documentation

```
	"answer" :          # Riddles One Word Answer,
	"riddle" :          # List of strings for each line in the riddle,
	"hint" :            # One line of hint text,
	"audio" :           # Link to Google Storage of me saying the Riddle (Don't know if this is a good idea yet),
	"back-ground-img" : # Overrides default background image if set
```

##### Template Riddle

```
"r" :{
  "id" : "r",
  "mode" : "",
  "answer" : "",
  "riddle" : [""],
  "hint" : "",
```


#### Implementation Notes

***Track completed Riddles, not completed riddles in a Level***

If the mobile device only keeps track of which riddles he has answered instead of which riddles he has answered in a level. It would give me freedom to move around riddles to find the most effiecient balance. If I move a riddle into a level that was not previously solved it would just count as not being compleleted. It wouldn't hamper their progress in unlocking the next level. Once the next level is unlocked it should remain unlocked no matter what I do to the riddles inside.

** Track

#### Need To Test

Notes on validation I could do to make sure my JSON is formated correctly

- [ ] Make sure there is a sequencial list of IDs. No missing numbers. From Beginning to end there should be one ID each.
- [ ] Make sure there are no duplicate IDs.
- [ ] Validate JSON Format
- [ ] JSON Lint (make it pretty...)
- [ ] Make sure each riddle has each field and that each field has an acceptable value. Could be default, but it should exist.
- [ ] Mode needs to connect to a real mode in the mode JSON file.
