# Live coding: Tracing Markdown syntax

Tracing is an important coding skill to build when learning any new syntax. You
can get better at tracing by reading lots of code and trying to predict what
will happen when it is run.

## Identify purpose of markup

What is the purpose of the syntax you see in each of these examples?
What do you expect to see?

```markdown
A
# The Adventures of Luna
## Chapter 1: Into the Unknown
### A New Journey Begins

B
**Luna was fearless** as she stepped into the dark forest.

C
*The wind howled* through the trees, sending a shiver down her spine.

D
~~The path she once knew was now gone.~~

E
1. She grabbed her bag.
2. She took a deep breath.
3. She began her quest.

F
- The forest was dense.
- The night was silent.
- Only the stars guided her.

G
[Visit Luna’s Diary](https://example.com/lunas-diary)

H
![Luna’s Map](https://www.example.com/map.jpg)

K
Luna reminded herself:
> Not all those who wander are lost.

M
`**Luna was fearless** as she stepped into the dark forest.`

N
| Item          | Description      | Quantity  |
| ------------- | ---------------- | --------- |
| Healing Potion| Restores health  | 2 bottles |
| Map Fragment  | Part of the map  | 1 piece   |
| Silver Key    | Unlocks treasure | 1         |
```

## Spot the errors

Can you spot the errors in the following examples?

```markdown
P
# The Hidden Valley
## Chapter 2 - The Encounter
# The creature appraoched

Q
**The air was thick with tension** as the creature moved closer.

R
Luna stood her ground.*

S
~~Suddenly, everything went still. The wind, the trees, the stars.~

T
1. Luna reached for her dagger
2. She hesitated
3 She chose a different path

U
- The trees began to part
* Luna noticed something strange,
- Her compass was spinning wildly.

V
[More about the Hidden Valley] (https://www.example.com/hidden-valley)

W
![Image of the valley(https://www.example.com/valley.jpg)
```

## Template recognition

Recognising templates is another important skill to build with any new
language. Which of these Markdown templates (X or Y) do you think would
generally be more appropriate for an article?

X
```markdown
### ***Title of the Article***

| **Introduction**  | 
| ------------- | 
| We will briefly introduce the topic. |


# _Main Section 1_
Discuss the key idea of the section. Introduce main points:

- **Point 1**: First main point.  
- **Point 2**: Explain the second point.  

** Main Section 2 **
Further explanation with examples. Support with references or data.

## Conclusion

Finish the article with a summary of the main ideas, tying everything together.

### [1]: # References

Source One

Source Two
```

Y
```markdown
# Title of the Article

## Introduction
Briefly introduce the topic. Provide background information and context.

## Main Section 1
### Subheading
Overview of key points:

- Key point 1
- Key point 2

Explanation and details about the topic.

## Main Section 2
### Subheading
Further explanation with examples.

Support with references or data.

## Conclusion
Summarize the key takeaways. Reinforce the main message and provide closing thoughts.

### References
1. Source One
2. Source Two
```
