# Milestones

I want to publish as soon as there is something that is viable to use because I want my release to be focused around answering specific questions I want to answer. So to fit more in line with that mental process I think, I will do Milestones a little differently. It shouldn't affect your code process to much I think. Just how I track it. It is more of a guideline then a rule, and may evolve the project progresses. If it gets unhelpful your feedback would be appreciated. My goal is to make your development process easier instead of harder. It might take a little getting used to though...

## Key Terminology

<dl>
  <dt>[Version Numbers](#version-numbers)</dt>
  <dd>
  `v1.2` A version system that counts down to a release of the code. In this case there are `2` 'problems' left to solve to be ready for a release. 
  </dd>
  <dt>[Feature Numbers](#feature-numbers)</dt>
  <dd>
  `Keyboard f0.1` A version system that counts increments a feature until it is ready for a version. In this case we are in version `0` of the keyboard that when ready for the `v1` release it will be `Keyboard f1.0`
  </dd>
</dl>

---

#### Version numbers

Version numbers are a goal to reach a milestone that answers certain questions about the app.

###### Goal
A published release is actually something you count down to rather than count up. Your goal is to get there not to track the linear progression. If counting up with your versions while trying to think "counting down" you get longer and longer version numbers. 0.9.12.4.Not.helpful...  
 
Example 
```
 v1
 v1.134
```

In this case `v1` is a release goal milestone. The number `134` is the number of related issues that need to be closed before we can be done with v1. So we are essentially counting down to the release instead of up. Every issue that comes up adds to this number and every time we close one it goes down. Makes it flexible to as many issues as we want without losing site of the goal, and seeing how close we are.

Don't worry I'll keep up with the version numbering. You just worry about closing issues related to the milestone.

#### Feature Numbers

Feature versions are used to track the linear progression of a feature counting up to a Version.

###### Goal
As featured are developed they increment up. They should increment towards a v1. You plan a little work you increase the number. So it should not limited and could count up as long as is you can maintain your sanity.

Example
```
Keyboard f0.1
keyboard f0.23
```

In this case because you are counting up `f0` (feature 0) is work relating to `v1` (version 1. Because once the keyboard becomes ready for v1 milestone it becomes `Keyboard f1.0`. Numbers after the the `.` can be whatever makes sense to you as a developer.