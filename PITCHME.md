---

# Unit Testing

Hisma Mulya S (mamaz)

Jenius Developer

@hismamaz

https://github.com/mamaz

---

# Introduction

---

## Unit testing

- Testing the smallest testable part of software.
- Mostly functions, methods, or components.
- As simple as giving input and test the output.

---

# Why unit test matters?

+++

# Force you to design your program well

+++

- More loosely-coupled code.
- Enforce reusable code.
- Force *Dependency Injection*

+++

# Dependency Injection

Example here.

+++

# Correctness

+++

## Correctness

- Checks logic errors against test cases.
- Checks it the proper and structured way.
- Makes you **trust** your methods or functions.

+++

# Reduce Bugs

+++

## Reduce Bugs

- In new features
- In existing features

+++

# Defensive Programming

+++

## Defensive Programming

- Protects against incorrect input.
- Protects against other developers.

+++

# Examples

+++?gist=b7f32062e4d593f2edad7d4349d3cb6c

+++?gist=9508e6d90844376f5f9c10fe59136b35


+++

# Makes development faster

+++

## Makes development faster

- Makes you to slow down and think (?)
- Reduce fear that something will break.
- Leads to reduce the cost of change.

+++

# Good Documentation

+++

## Good Documentations

- Developer likes examples.
- Unit tests are good documentations.

---

# How to make Unit Tests?

+++

### Typically people will make a program, after it's finished, then they create Unit tests for it.

+++

# In some cases, it's not a good practice

+++

# Your codes might be not testable

+++

## Why?

- Tightly coupled code
- MVC === Massive View Controller

+++

# TDD and BDD

+++

# Test-Driven Development (TDD)

+++

## TDD

- You write test first before writing any programs.
- Run it, makes all tests fails.
- Write methods or functions so that the tests pass, one-by-one.

+++

# Why TDD?

+++

# It forces you to design!

+++

## TDD is not a silver bullet

- Limitation of testing tools
- Limitation of platform

+++

## So?

I like to:
- Design scenarios.
- Define test cases.
- Define interface and dependencies.
- Write the codes

more.

+++

# Behavior-Driven Development (BDD)

+++

## BDD

- Basically TDD++
- Based on behavior or scenarios
- Use Gherkin Language

```
Feature: Upload 3GP video to Megaupload

  Given: User open the upload file page
  And: User has already chosen the file
  When: he taps upload video
  Then: the video will be uploaded to the backend
```

+++

## BDD in Unit Test

Example here.

---

# How can I make a good Unit Test?

+++

## Good Unit Tests

- Test for correctness.
- Test against bad or unexpected input.
- Test against edge cases.
- Enforce Dependency Injection.
- Does not have dependencies to API or database.
- Use proper techniques or tools.

---

## Unit Test Tools + Demo

- Mocks --> Call json api + view models
- Spies --> Check button tap
- Stubs --> Mock functions

---

# Q/A

Sources:

- [12 Unit Test Reasons](http://www.onjava.com/pub/a/onjava/2003/04/02/javaxpckbk.html)

- [Unit Testing and BDD](https://codeutopia.net/blog/2015/03/01/unit-testing-tdd-and-bdd/)

- [Dependency Injection in Node.js](https://blog.risingstack.com/dependency-injection-in-node-js/)
