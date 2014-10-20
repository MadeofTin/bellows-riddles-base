# Mockups

I really want to focus on athestics. Minimal UI. People who like riddles I think are closer to artists and so I want to make it an 'artistic' game. Like win an art or design award level. I have high hopes... but, actually don't care about awards. I care about adding the the users experiance.

You think it would work if we could start with just an image and then move to an animated movie playing in the background. For the world, level, and riddle view. Real simple animations I think. I'll put more about what kind of style I am looking for in the [branding.md](/branding.md)

https://github.com/Tinmen/bellows-riddles-base/blob/master/assets/mockups/pngs/start-screen-needs-update.png
## Mockups index

- [ ] Start Up screen
  - [ ] Up to date (doc - [img] (/assets/mockups/pngs/start-screen-uptodate.png)
  - [ ] Need to update (doc - [img](/assets/mockups/pngs/start-screen-needs-update.png))
  - [ ] Updating
- [ ] Keyboard [doc](#keyboard)
  - [ ] Function Keys [doc](#keyboard-sort-and-randomizer)
  - [ ] Difficulty Selector [doc](#difficulty-selector)
- [ ] Default Mode View [doc](#default-mode-view) - [img] (/assets/mockups/pngs/mode-view-default.png) <sub><sup>*The normal screen you get to when you hit play*</sup></sub>
  - [ ] Level Completed
- [ ] World View <sub><sup>*One step above world view*</sup></sub>
 - [ ] Choose a new mode
- [ ] Level View ([doc](#level-view) - [img](/assets/mockups/pngs/level.png))
  - [ ] Riddle ([doc](#riddle-basic-difficulty) - [img](/assets/mockups/pngs/riddle.png) -  [UX](/testing/ux-testing/answerbank/index.html))
    - [ ] Keyboard Closed
    - [ ] Keyboard Open Easy
    - [ ] Wrong Answer
    - [ ] Right Answer
  - [ ] Riddle - Auto Complete Difficulty
  - [ ] Riddle - Riddle Master
- [ ] Settings View
  - [ ] Game Settings
    - [ ] Voice Setting 
  - [ ] Achievements <sub><sup>(*Not a Priority*)</sup></sub>
  - [ ] Upgrades <sub><sup>*Upgrades that take points or in-app-purchases*</sup></sub>
  - [ ] Facebook Connect <sub><sup>(*Not a Priority*)</sup></sub>
  - [ ] Authors Page
    - [ ] Me
    - [ ] Paul


## Mockup Documentations

#### Keyboard


| Unopened      | Opened Easy | Description |
| ------------- |------------ | :---------- |
| <img src="/assets/mockups/pngs/keyboards/keyboard-unexpanded.png"/> | <img src="/assets/mockups/pngs/keyboards/keyboard-easy-open.png"/>| Since we know they are answering our riddles we could just make a custom keyboard specialized for answering riddles. When unopen it would sit at the bottom like in the unopened img. When opened it would be different based on the difficulty. Making it similar usibility for each difficulty and makes it easy to downgrade which would be a paid feature so it would increase the chance more people would do this. There would be a random sort button that would randomly sort the answers that you see. Typing would limit the number of riddles avaible (in the current order. It would not manipulate order. Just filter what is there). Sorting would change the order from A-Z and Z-A. |

###### Keyboard Sort and Randomizer

*I was to lazy to actually sort the answers. I think you'll get the idea that they should be sorted. The Important Part is the keyboard Sort and Randomizer Buttons*

| A->Z Unselected | A->Z Selected   | Z->A Unselected | Z->A Selected   |
| --------------- | --------------- | --------------- | --------------- |
| ![A-Z Unselected](/assets/mockups/pngs/keyboards/sort/keyboard-sort-a-z-unselected.png) | ![A-Z Selected ](/assets/mockups/pngs/keyboards/sort/keyboard-sort-a-z-selected.png) | ![Z-A Unselected ](/assets/mockups/pngs/keyboards/sort/keyboard-sort-z-a-unselected.png) |![Z-A Selected ](/assets/mockups/pngs/keyboards/sort/keyboard-sort-z-a-selected.png) |
| Answers are currently randomly sorted from pressing the randomizer before when in a state of A-Z sorting Selected. This is also the default when opening for the first time. If you select the A->Z button it would change it to selected and sort the answers| In this mode the answers are sorted from a-z. If you click on a-z again it would change to z-a selected. If you clicked on the randomiser it would unselect the z-a but leave it as z-a but the answers would now be sorted randomly | Items are currently random from pressing the randomizer before when you were in a state of Z-A sorting. If you select the Z->A button it would change it to selected and sort the items | Answers are currently sorted from Z-A. If you select the Z-A button it would change to A-Z selected. If you clicked on the randomizer it would randomize the answers and unselect Z-A, but leave the button as Z-A |

###### Difficulty Selector

| Image         | Description |
| ------------- |------------ |
| <img style="width:200px" src="/assets/inspirations/enable-the-emojis-keyboard.jpg"/> | This would be similar in functionality like switching between different keyboards in the current ios keyboard. The key difference is you could not change difficulty if you didn't buy the upgrade, and you can only go down in difficulty. I posted an image of what the keyboard selector in Apple looks like for now as a place holder. We would need to come up with difficulty images and colors (I'll explain colors later in the branding doc when I make it). You can see the [inspiration doc](assets/inspirations.md#Difficulty%20Symbols) 


#### Default Mode View

| Image         | Description |
| ------------- |------------ |
| <img width=200px src="/assets/mockups/pngs/mode-view-default.png"/>  | Most of it I think is pretty self explanitory. The number at the top is your current lives/hints/free whatevers. The little bar beneath is a status bar that grows until you get your next one. If it is full then it goes grey and stays a solid line completetly filling the space.

I like TwoDots implementation. If you download the app the image actually animates as you move up the screen. Don't know how hard it is to do that (maybe paralax? I am not techinally inclined enough to know) but it probably isn't worth it the first time since I haven't found a good animator and that would be largely up to him. But I like the idea of a path of levels I with pretty stuff around it that would change (loading a different image or video file) as you complelete levels. My paths would be more spread out because there would be significantly less levels. In this example getting to level 41 with 50 riddles per level would mean ***2,050 riddles*** or ***82 days*** of riddle writing at 25 riddles a day... Yeah... not happening that fast...

- [ ] Need to redo the top bar so it one, looks better, and two, fits a lot smaller. I think I can do more with less... @TinmanPiano

#### Level View

| Image         | Description   |
| ------------- | ------------- |
| <img width=200px src="/assets/mockups/pngs/level.png"/>  | The bar on the right would scroll if there are to many levels to fit. On default it will remove the riddle as you solve them, but if you check the "Show All" then it will show you the ones you have completed just in a different color. When you select a riddle it would replace that part of the screen. If you selected a different riddle it would chage to that. If you clicked on the same riddle it would go back to the main level screen so you can see how your people are doing. I need to do some testing on how big or small I can make these. Again, I want the image to be as big as it can without making it impossible to hit the right buttons. I have a lot of work to make it look better. 

- [ ] Add Progress Indicator @tinmanpiano


#### Riddle Basic Difficulty


| Image         | Description   |
| ------------- | ------------- |
| <img width="400px" src="/assets/mockups/pngs/riddle.png"/>  | I think I have the basic layout how I would like it. If you have any other ideas ket me know. Your first question is probably why are the words on top? That is because I had this idea (Let me know how possible it would be on your end). I would like the User experiance to stay as close as it can for the different difficulty levels. So I thought it would be nice if you could start by also being able to type in text and it would filter out the words that don't match. This would happen dynamically as you type. (In web it makes more sense to me, but I don't know how using the iPhone Keyboard might change the way you can implement this.) ***Other Features*** Play audio version and the Voice (We can advertise purchaseing other ones at this point). When solving the riddles I think it would be helpful if you could sort them so it can give you a fresh view. So you can sort alphabetically up or down or shuffle them. Sometimes If I am looking at the same thing to long it makes it harder. Make sure to check out the [UX test](/testing/ux-testing/answerbank/)|

