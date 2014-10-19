Bellow's Riddle Quest
=====================

Where I keep track of the Bellow's Riddle Quest data so I can share it with my team

# Install

Steps for installing and building this app are as follows.

### Pre-requisits

* Install [node.js](http://nodejs.org/)
* Check-out the git repository

### Building

After you have a git clone of the repo, run the following commands:

	cd app
    npm install
    npm start

This will generate the ``build`` directory which has all the combined javascript libraries.

### Serving

Just stick the entire repository behind a web server and navigate to http://webserver-root/app/index.html.  It's important to have the entire repository behind a web server so that javascript can fetch the json list of riddles.

# Goal
To make a casual game where people solve riddles. It should be chalanging but not so challenging it makes you want to listen to Justin Bieber's baby on repeat because that would be better than this...

### Observation While Testing

Things I have noticed as I have written these riddles is that people like riddles, but… only when they can figure out the answer. If you wait to long they just get frustrated and don't enjoy them. The moment they like is that "aha" moment they get when the finally know what a riddle is. "Oh, that is what it meant!". So I don't just want to give them riddles but I want to help them get to that "aha" moment with certain game mechanics and difficulty levels. I think this will make the game more enjoyable


# Difficulty Levels

To provide some progression of difficulty in the game. I think there should be an option to buy "Casual" version that lets you reduce the difficulty on a level. So, if you want to just keep playing for fun with less challenge you can. Similar to Endless mode in Dots. I don't know if I should include all of these but this is what I have thought of so far.

#### Standard

>This will be what the beginning riddle groups will be. You get a bank of all of the answers in the riddle group you are provided. As you answer correctly the list gets smaller making it easier to answer the harder riddles.

#### Extra Words

>Same as standard but you add a number of words that don't answer the riddle. So if you have 100 riddles you could have 150 words to choose from. Making it more difficult

#### Auto Complete

>No more word bank, but as you type in text if you type in two or three letters it will auto suggest words that only are in the words left to choose from

#### Auto Complete with extra words

>Same as auto complete but you add in some extra words to trick them

#### Super Hardcore Riddle Master Mode

>No word bank. No auto complete. Just you, a text input box, and your brain.


# Game Mechanics

### Lives

Lives are like lives in Candy Crush or Twodots. Because you give them all of the answers in a bank they could just quickly click all of the answers until they get one. So if you limit the number they can get wrong in an hour then they can't force the answer. They need to choose carefully.

```
Bank: 10 lives
Replenish:  1 Every 10 minutes
```

### Free Answers

Once a day Bellow will solve a riddle for you. For those really tough ones ya' know. This will make finding the rest easier because the pool is smaller

```
Free Answer Bank: 3
Replenish: 1 Every Day
```

### Hints

Hints are things you can use to help you get a better idea of the answer to a riddle. These can include
* Reveal Hint Text
* Give First Letter
* (I thought of more, but need to re-remember them)

```
Hint Bank: 5
Replenish: 1 every 20 minutes
```



# Game Progression

I haven't decided for sure how to manage game progression. I want people to enjoy the game first and foremost, but it would be nice if it could be profitable as well. So for now I think it should progress in difficulty but give you the option to purchase casual mode which would allow you to reduce the difficulty on a level. So you could have access to all of the content, but if you want to keep yourself sane you can make it eaiser on your self.

###### Should I let them recharge mechanics like lives with money?

Honestly, I don't know how I feel about this. While I do think it is profitable, I don't know if it adds value to the game. I think I want to try without being able to purchase first. If I hear all hell break loose because the users want to buy more mechanic recharges then I might change my mind.

#### Level Progression

The levels would start with the tutorial being 5 riddles and Bellow using your Free Answer Mechanic for the first one. After that the levels would get harder by giving you more riddles until an ideal riddle bank is found. Not to many to overwhelm you, and not to few to be easy. At that point the difficulty level would rise and rise untill max difficulty.

With testing you could know more of what is good, but here is an example.

* Tutorial 5 Riddles
* 10 Riddles (Basic)
* 25 Riddles (Basic)
* 25 Riddles (Extra Words)
* 50 Riddles (Basic)
* 50 Riddles (Extra Words)
* 75 Riddles (Basic)
* 75 Riddles (Extra Words)
* 50 Riddles (Auto Complete)
* 50 Riddles (Auto Complete Extra Words)
* 75 Riddles (Auto Complete)
* 75 Riddles (Auto Complete Extra Words)
* 50 Riddles (Super Hardcore)
* 75 Riddles (Super Hardcore)
* Continue with Super Hardcore from that point.

> Yes I know, that requires me to write a lot of riddles.... 565 of them. So it will depend on how many I can write and how fast I can write them. But we could always build it so I could add more later.

# Upgrades and Spending them

You unlock different game modes and mechanics with points. You get points for every word bank you complete depending on the difficulty. (So the people who lower the difficulty would need to solve more to get the better rewards. Incentivising them to try the harder difficulty first). If you don't want to wait until you have enough points to get something you will have the option to purchase them. THis will make it so all content is accessible, but if you are more impatient or rich you can get them faster.

###### Points per difficulty

For every 25 riddles you solve you get 1 point times the difficulty multiplier.

*** Multipliers ***
* Basic (1x)
* Extra (2x)
* Auto Complete (4x)
* Auto Complete Extra (6x)
* Hardcore (10x)

#### Upgrading your mechanics
If you want to have a larger bank for your Hints or Lives you can do it if you spend your upgrade points on them. I might consider letting you upgrade the frequency, but that might break the game.


### Game Modes
In addition to the standard Riddle list there will be special game modes. Basically whole new paths of riddle groups you can solve with either a special mechanic or special theme.

- [ ] (Note to self: think of a better word than Game mode for this. The problem is it isn't just a different category. It could have a whole different answering mechanic to it.)

For a full list of Gamemodes look at [mode-ideas.md](https://github.com/Tinmen/bellows-riddles-base/blob/master/mode-ideas.md)
