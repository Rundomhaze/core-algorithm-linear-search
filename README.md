## Algorithm exercises: Linear search

```javascript
let array = ['A', 'B', 'A'];
// => [A, B, A]
array.indexOf('A');
// => 0
array.indexOf('B');
// => 1
array.indexOf('C');
// => -1
```
*Figure 1*. Finding the index of an element in an array.

You need to write a method that mimics the behavior of the JavaScript `indexOf()` method. This method returns the index of a particular element in the array, or -1 if the element is not found in the array. If the element is found more than once in the array, then the first index is returned. (see Figure 1)

JS helps us with the routine work and low-level programming by providing methods like `indexOf()`. We don't need to know how the index of an element is found, we only need to know what that index means and how to use it in our programs.

It can be noted that it is very nice that JS provides these abstractions. However, we want to know how to implement some of these things ourselves. In this task, you implement the search operation using its specific algorithm - linear search.

## Linear search

In the previous tasks, you saw that there are different ways to solve the same problem, and that there are many ways to search for data in a collection of items. Understanding the various algorithms and patterns for searching and sorting datasets is an essential part of computer science.

Linear search is one of the main search algorithms. This is a brute-force algorithm where we just check each element once until we find the element we are looking for; or we will go through all the elements and find no match.

### Release 0. Linear search

```javascript
let numbers = [0, 8, 5, 9, 7, 2];
// => [0, 8, 5, 9, 7, 2]
linearSearch(7, numbers);
// => 4
linearSearch(1, numbers);
// => -1
```
*Figure 2*. Example of using linear search.

Write a `linearSearch` function that takes two arguments: an element and an array. It should iterate over each element in the array sequentially and return the index at which the element was originally found. If the element is not found, the function returns -1.

**Testing**

One test for each function has already been written. However, you need more tests to determine if the feature is performing as expected. Are there any edge cases you should consider?

To install jest - use
`npm install`  
To start tests - use
`npm test`  
in the console in the project's source folder.

Use [tests](https://github.com/Elbrus-Bootcamp/manuals/blob/master/jasmine.md)

**Limitations**: You need to write a function without relying on the built-in methods of the `Enumerable (map/reduce/fiter)`. The only properties you can use to work with arrays are `Array[]` and `Array.length`. You can also use `for` and ` while` loops to write a linear search algorithm.

### Release 1. Global linear search

```javascript
let letters = 'bananas'.split('');
// => ['b', 'a', 'n', 'a', 'n', 'a', 's']
globalLinearSearch('s', letters);
// => [6]
globalLinearSearch('a', letters);
// => [1, 3, 5]
globalLinearSearch('z', letters);
// => []
```
*Figure 3*. Example of using global linear search.

In the `linearSearch` method you return the index of the first occurrence of the element. Let's write a new `globalLinearSearch` method that returns an array of all the indexes at which the element is found.

Figure 3 shows an example of using this function. First, create tests to check that it works correctly, and then write a function to test it. What happens if an element is found only once? And what if it is not found?

## Conclusion

Linear search is one way to find a collection of objects. Consider the performance of your algorithm. How would it function if you had to browse a very large collection? Let's say you have a collection containing a million items - how would the linear search work in this case?

[wikipedia linear search]: http://en.wikipedia.org/wiki/Linear_search
