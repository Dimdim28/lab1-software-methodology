# Quadratic Equation Solver

## Description 

This is a console application designed to solve quadratic equations, it supports two modes of operation: interactive and non-interactive (file) mode.

In the interactive mode (application is launched without any arguments) application prompts user to enter the values of the coefficients a, b, and c one by one, then displays the resulting equation on the screen, and computes and displays the roots of the equation. If user enter invalid values he will see an error and application prompts him to try again. 

In the non-interactive (file) mode, application accepts a single argument, which is the path to a file with coefficients of the equation. The file should contain three numbers: a, b, and c separated by a single space.
An example of what should be the entry of numbers in the file: 1.2 228 1337

## How to Run

### To start in interactive mode:
```
$ node main.js
```

### To start in interactive mode:
```
$ node main.js /path/to/your/file
```

## Application output

### Interactive mode:

```
a = 0
Error. a cannot be 0
a = 1
b =  pdofgndg
Error. Expected a valid real number, got pdofgndg instead
b = 2
c = 1
Equation is: 1 x^2 + (2) x + (1) = 0
There is 1 root
x1 = -1
```

### Non-interactive

File numbers.txt: 1 2 -3

```
node main.js oiagu.txt
Error: file oiagu.txt does not exist
node numbers.txt 
Equation is: 1 x^2 + (2) x + (-3) = 0
There are 2 roots
x1 = -3
x2 = 1
```


File numbers.txt: 0 2.7 1

```
node numbers.txt 
Error. a cannot be 0
```

File numbers.txt: 6 fghjh 1

```
node numbers.txt 
invalid file format
```

File numbers.txt: 6 4 1
pdosghopdf djfjg

```
node numbers.txt 
invalid file format
```


File numbers.txt: 1 2.7 -3.1

```
node numbers.txt 
Equation is: 1 x^2 + (2.7) x + (-3.1) = 0
There are 2 roots
x1 = -3.568670773233379
x2 = 0.8686707732333789
```

# Link on Revert Commit

[Revert readme changing](https://github.com/Dimdim28/lab1-software-methodology/commit/28bc3640bfd25f3600cb6b8bcb484044f8b3357b)



