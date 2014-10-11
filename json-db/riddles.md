# Riddles Documentation

Riddles are ordered in ID based on the order I wrote them.

Following the pattern

```
r-1 : Word
r-2 : Word3
```

### JSON Documentation

```
	"answer" :          # Riddles One Word Answer,
	"riddle" :          # List of strings for each line in the riddle,
	"hint" :            # One line of hint text,
	"audio" :           # Link to Google Storage of me saying the Riddle (Don't know if this is a good idea yet),
	"back-ground-img" : # Overrides default background image if set
```


#### Implementation Notes

*** Track completed Riddles, not completed riddles in a Level ***

If the mobile device only keeps track of which riddles he has answered instead of which riddles he has answered in a level. It would give me freedom to move around riddles to find the most effiecient balance. If I move a riddle into a level that was not previously solved it would just count as not being compleleted. It wouldn't hamper their progress in unlocking the next level. Once the next level is unlocked it should remain unlocked no matter what I do to the riddles inside.

** Track