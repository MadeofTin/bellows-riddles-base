# Animations

## not implemented this is for the Future.

This is where the animations are defined for the "reanimating" the world. Since I have basically no assets yet It would be nice if it gracefully degraded or took a few types of images. I don't know what you would need to do to process on your end but the "format" progression would be. 

* Just a Plain Image
* Animated Gif, maybe the new GIFV that just came out
* Video with no sound # Maybe don't need the GIFV step even. Don't know what filesize difference would be.
* Video with sound effects.

They would play in a loop at each step in the Riddle proccess. Might be to ambitious but I think it would be very rewarding for the user to SEE the results of them solving the riddles. You aren't just playing word games you are making the world a better place. So, Magical!

### JSON Documentation

```
not implemented
```

Not sure what is good here. Should I make a hard requirement that there be the same number of steps as there is riddles in a level? I could just use the same image at first 15 times. Maybe I should write a testing suite to verify the JSON is formated right before I hit import. At first I can get it right but as it grows it might be harder to manage if I make a small change somewhere. I don't want to break your side of the app on accident.

