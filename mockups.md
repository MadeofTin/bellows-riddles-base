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
- [ ] Default Mode View [doc](#default-mode-view) - [img] (/assets/mockups/pngs/mode-view-default.png) <sub><sup>*The normal screen you get to when you hit play*</sup></sub>
  - [ ] Level Completed
- [ ] World View <sub><sup>*One step above world view*</sup></sub>
 - [ ] Choose a new mode
- [ ] Level View [img](/assets/mockups/pngs/level.png)
  - [ ] Riddle Basic Difficulty ([doc](#riddle-basic-difficulty) - [img](/assets/mockups/pngs/riddle.png) -  [UX](/testing/ux-testing/answerbank/index.html))
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

#### Default Mode View

| Image         | Description |
| ------------- |------------ |
| <img width="400px" src="/assets/mockups/pngs/mode-view-default.png"/>  | Most of if I think is pretty self explanitory. The number at the top is your current lives/hints/free whatevers. The little bar beneath is a status bar that grows until you get your next one. If it is full then it goes grey and stays a solid line completetly filling the space.

If you download the app it actually changes as you move up the screen. Don't know how hard it is to do that (maybe paralax? I am note techinally inclined enough to know) but it probably isn't worth it the first time since I haven't found a good animator and that would be largely up to him. But the idea of a path of levels I like with pretty stuff around it that would change (loading a different image or video file) as you complelete levels. Mine paths would be more spread out because there would be significantly less levels. In this example getting to level 41 with 50 riddles per level would mean ***2,050 riddles*** or ***82 days*** of riddle writing at 25 riddles a day... Yeah... not happening that fast...

- [ ] Need to redo the top bar so it one, looks better, and two, fits a lot smaller. @TinmanPiano

#### Riddle Basic Difficulty


| Image         | Description   |
| ------------- | ------------- |
| <img width="400px" src="/assets/mockups/pngs/riddle.png"/>  | I think I have the basic layout how I would like it. If you have any other ideas ket me know. Your first question is probably why are the words on top? That is because I had this idea (Let me know how possible it would be on your end). I would like the User experiance to stay as close as it can for the different difficulty levels. So I thought it would be nice if you could start by also being able to type in text and it would filter out the words that don't match. This would happen dynamically as you type. (In web it makes more sense to me, but I don't know how using the iPhone Keyboard might change the way you can implement this.)  |

