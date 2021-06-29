## Question 1
- Output: First logs 2 to the console, then logs 1 to the console after 100ms
- First, the setTimeout function is called, which triggers the execution of the web API, which adds the callback to the event queue (FIFO)
- Javascript is single-threaded, so has one call stack, which executes one thing at a time (LIFO)
- After the event loop has checked the call stack is empty, the  second console log call is then pushed to the call stack, and 2 is logged to the console
- After 100ms, the timeout function expires, and the call back is passed to the call stack by the event loop (after the call stack is empty)
- The call back is executed and the first console log statement is added to the top of the stack
- Finally the console log statement is executed and 1 is logged to the console

## Question 2
- Output: Logs all integers from 10 to 0 to the console (recursion)
- First, foo(0) is called and passes the inner conditional statement
- The function then makes the nested foo call, which pauses the current function
- The execution context associated with the previous function call is remembered in the execution context stack
- The nested foo call then executes (foo(1))
- This repeats until d=10, which fails the inner conditional statement, and 10 is logged to the console
- The previous execution context is then removed from the top of the stack, and the function continues, printing 9 to the console
- This continues until the stack is empty, and 0 is logged to the console

## Question 3
- This function may cause a issue as d will be set to 5 when any falsy value is provided to foo();
- E.g. if undefined or null is provided to foo(), d will be set to 5, which may not have been the original purpose of the function

## Question 4
- Output: Logs 3 to the console (closure)
- Bar is a reference to the instance of the inner function (function(b)) that is created when foo is run
- The instance of the inner function maintains a reference to its lexical environment, within which, a=1
- Therefore when bar(2) is executed, 2 is added to a (which is 1 in bar's lexical environment), and 3 is returned

## Question 5
- The double function takes in a (a number) and done (a function)
- The done function must first be defined, which would take in a doubled value
- Upon execution, the setTimeout function is called. This will execute the done() function after 100ms, which will take in an input of twice the value of a
