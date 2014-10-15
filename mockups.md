# Mockups

I really want to focus on athestics. Minimal UI. Eventually I would love for it to have a [Godus](https://www.google.com.tw/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CB4QFjAA&url=http%3A%2F%2Fstore.steampowered.com%2Fapp%2F232810%2F&ei=IzE7VPrZF5eD8gWSnILYCQ&usg=AFQjCNFBSD1wmZGiBe4PLBOTC1B26JdlRQ) feel. Where there is an actual world that does stuff and each riddle level you solve improves your people.
But.... that is a lot more work than we need to at the moment. So, I Think doing strait images and then doing just animation mp4s would have a similar effect. Right now I don't have many assets but really want to find someone who could make something awesome feeling. Like win an art award awesome feeling. I have high hopes...

It seems like you are sort of javascript implementing this so I found [this][http://stackoverflow.com/questions/13224037/mapping-areas-on-an-html5-video] that would explain how to do mapping over a video. (You probably already know a better way to do this though.. haha) The underlying video would not need to be interacted with so, the concern he brings would not be a big deal. But it means we could abstract out the world design as I get a better artist could do it and even move around where the levels are physically without needing to do more code. ***Do you think that would be worth the effort?***

You think it work so we could start with just an image and then move to an animated movie playing in the background. I'll put more about what kind of style I am looking for in the [branding.md](/branding.md)

https://github.com/Tinmen/bellows-riddles-base/blob/master/assets/mockups/pngs/start-screen-needs-update.png
## Mockups index

- [ ] Start Up screen
  - [ ] Up to date (doc - [img] (/assets/mockups/pngs/start-screen-uptodate.png)
  - [ ] Need to update (doc - [img](/assets/mockups/pngs/start-screen-needs-update.png))
  - [ ] Updating
- [ ] Keyboard [doc](#Keyboard)
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

*I was to lazy actually sort the items. I think you'll get the idea that they should be sorted*

| Unopened      | Opened Easy | Description |
| ------------- |------------ | :---------- |
| <img src="/assets/mockups/pngs/keyboards/keyboard-unexpanded.png"/> | <img src="/assets/mockups/pngs/keyboards/keyboard-easy-open.png"/>| Since we know they are answering our riddles we could just make a custom keyboard specialized for answering riddles. When unopen it would sit at the bottom like in the unopened img. When opened it would be different based on the difficulty. Making it similar usibility for each difficulty and makes it easy to downgrade which would be a paid feature so it would increase the chance more people would do this. There would be a random sort button that would randomly sort the answers that you see. Typing would limit the number of riddles avaible (in the current order. It would not manipulate order. Just filter. Sorting would change them from being ordered A-Z to Z-A. |

###### Keyboard Sort and Randomizer
| A->Z Unselected | A->Z Selected | Z->A Unselected | Z->A Selected |
| --------------- | ------------- | --------------- | ------------- |
| ![A-Z Unselected](/assets/mockups/pngs/keyboards/sort/keyboard-sort-a-z-unselected.png) | ![A-Z Selected ](/assets/mockups/pngs/keyboards/sort/keyboard-sort-a-z-selected.png) | ![Z-A Unselected ](/assets/mockups/pngs/keyboards/sort/keyboard-sort-z-a-unselected.png) |![Z-A Selected ](/assets/mockups/pngs/keyboards/sort/keyboard-sort-z-a-selected.png) |
| Answers are currently randomly sorted from pressing the randomizer before when in a state of A-Z sorting Selected. This is also the default when opening for the first time. If you select the A->Z button it would change it to selected and sort the answers| In this mode the answers are sorted from a-z. If you click on a-z again it would change to z-a selected. If you clicked on the randomiser it would unselect the z-a but leave it as z-a but the answers would now be sorted randomly | Items are currently random from pressing the randomizer before when you were in a state of Z-A sorting. If you select the Z->A button it would change it to selected and sort the items | Answers are currently sorted from Z-A. If you select the Z-A button it would change to A-Z selected. If you clicked on the randomizer it would randomize the answers and unselect Z-A, but leave the button as Z-A |


#### Default Mode View

| Image         | Description |
| ------------- |------------ |
| <img width=200px src="/assets/mockups/pngs/mode-view-default.png"/>  | Most of if I think is pretty self explanitory. The number at the top is your current lives/hints/free whatevers. The little bar beneath is a status bar that grows until you get your next one. If it is full then it goes grey and stays a solid line completetly filling the space.

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

