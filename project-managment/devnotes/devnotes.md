# Notes
First I am really grateful for you taking a look at this for me. I tried to hide my giddy excitement when you responded but it was there. Trust me. What I don't want to have happen is you spend a few days helping me get set up and then have me keep pinging you for help when you don't have time later. I want to do whatever I can to make this as easy for you as possible. These are some of the things I thought up.

###### Disclaimer
>Before I get into that. As you read my notes you may notice I have a problem... I like to think big. But, don't worry. I am fine starting small and proving the concept. Sort of "looking far but taking small steps". I just have a lot of ideas about things and I want to make sure I write them down in case we do use them. I am not tied to any of them personally and I understand the idea may evolve to something else entirely. The success of the app and it's goal is my number one priority. I am totally fine being wrong.

#### To Ask

Something I thought of but don't want to put into and issue yet.

---

###### Easily update assets and settings

I have been trying to think of a way to make it easy for me to edit without you needing to go in and edit things or even redeploy the app. It could just sync updates. Could I keep all of the assets in the Git Repo, put a small server somewhere that pulls with a webhook when I push to the master branch. Parse listens to this and updates the assets in parse?

Obviously I would need to write some pretty good tests and make sure it runs before pushing to master for this to work. Validating the JSON and all of the 'Foreign Key' relationships between the JSON files so there won't be any bugs for the user.

There are also a few things you could do on your end to make it a lot easier for me to manage the riddles on my end. A few abstractions of things (that might not be the right word). I'll write more about it throughout the documentation.

---