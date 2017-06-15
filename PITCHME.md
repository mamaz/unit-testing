---

# Unit Testing

Hisma Mulya S (mamaz)

Jenius Developer

@hismamaz

https://github.com/mamaz

---

# Introduction

## Unit testing

- Testing the smallest testable part of software.
- Mostly functions, methods, or components.
- As simple as giving input and test the output.

---

# Why unit test matters?

+++

# Force you to design your program well

- More loosely-coupled code.
- Enforce reusable code.
- Force *Dependency Injection*

+++

# Dependency Injection

Example here.

+++

# Correctness

- Checks logic errors against test cases.
- Checks it the proper and structured way.
- Makes you **trust** your methods or functions.

+++

# Reduce bugs

- In new features
- In existing features

+++

# Defensive Programming

- Protects against incorrect input.
- Protects against other developers.

+++

# Examples

Example here

+++

# Makes development faster

- Makes you slow down and think (?)
- Reduce fear that something will break.
- Leads to reduce the cost of change.

+++

# Good Documentation

- Developer likes examples.
- Unit tests are good documentations.

---

# How to make Unit Tests?

Typically people will make a program, after it's finished, then they create Unit tests for it.

---

# In some cases, it's not a good practice

---

# Your code could be not testable

- Tightly coupled code
- MVC === Massive View Controller

+++

# TDD and BDD

+++

# Test-Driven Development (TDD)

- You write test first before writing any programs.
- Makes all tests fails.
- Write methods or functions so that the test pass, one-by-one.

+++

# Behavior-Driven Development (BDD)

```
/**
 * Remove special characters in a given string.
 *
 * Special characters including [`~!@#$%^&*()_|+-=?;:'",.<>{}[]\/ and whitespace
 * will be replaced by empty string ('')
 *
 * @param {string} string
 * @returns {string} - sanitized string
 */
const removeSpecialChars = (string) => {
  if (!string) return string;
  return string.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi, '');
};
```

+++

# BDD (Cont'd)

```
describe('StringSanitizer: Remove special characters', () => {
  const fullnameNormal = 'Anjani';
  const fullnameWithSpecialChar = '(Mika)';
  const rubbishFullname = '(Anamika)*)(*)(%&^%^&$#@$!';
  const rubbish = '`~!@#$%^&*()_|+-=?;:\'",.<>{}[]\\/';
  const empty = '';
  const nullString = null;
  const undefinedString = undefined;

  test('it should be able to do nothing if the string contains no special characters', () => {
    expect(removeSpecialChars(fullnameNormal)).toBe('Anjani');
  });

  test('it should be able to remove simple special chars from a string', () => {
    expect(removeSpecialChars(fullnameWithSpecialChar)).toBe('Mika');
  });

  test('it should be able to remove all special characters from a complex string', () => {
    expect(removeSpecialChars(rubbishFullname)).toBe('Anamika');
  });

  test('it should be able to remove all special characters from all special chars string', () => {
    expect(removeSpecialChars(rubbish)).toBe('');
  });

  test('it should be able to return null if the string is null', () => {
    expect(removeSpecialChars(empty)).toBe('');
  });

  test('it should be able to return undefined if the string is undefined', () => {
    expect(removeSpecialChars(nullString)).toBe(null);
  });

  test('it should be able to return empty string if the string is empty string', () => {
    expect(removeSpecialChars(undefinedString)).toBe(undefined);
  });
});
```

---

# How can I make a good Unit test?

- Test for correctness.
- Test against bad or unexpected input.
- Test against edge cases.
- Enforce Dependency Injection.
- Use proper techniques or tools.

---

# Unit Test Tools + Demo

- Mocks --> Call json api + view models
- Spies --> Check button tap
- Stubs --> Mock functions

# End

Sources:

- [12 Unit Test Reasons](http://www.onjava.com/pub/a/onjava/2003/04/02/javaxpckbk.html)

- [Unit Testing and BDD](https://codeutopia.net/blog/2015/03/01/unit-testing-tdd-and-bdd/)

- [Dependency Injection in Node.js](https://blog.risingstack.com/dependency-injection-in-node-js/)