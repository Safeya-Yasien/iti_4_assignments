### Self Invoking Function

- what is self invoking function?
  - self invoking function is a function that is called immediately after it is defined
  - it's shape

    ```
    (function(){
        //Bunch of code...
    })();
    ```

    - what is the purpose of this function?
      - it's purpose is to execute the code inside the function immediately after it is defined means we can use it to initialize the variables

    - source info
      - https://stackoverflow.com/questions/6715805/self-invoking-functions-javascript

### Arrow function

    - Arrow functions don’t have this.They only borrow it.
    -

### template literal

     - it's `` tag

### ES6 new features

    - Optional Chaining (?.)

        Optional chaining makes it easier to access deeply nested properties in an object without having to explicitly check for null or undefined values. This feature prevents your code from throwing errors when trying to access properties of undefined or null objects.

        ```
        const user = {

        name: "Jane",
        address: {
        city: "New York"
        }
        };

        console.log(user.address?.city); // "New York"
        console.log(user.contact?.phone); // undefined, but no error

        ```

    - Nullish Coalescing Operator (??)

    The nullish coalescing operator (??) allows you to provide default values for null or undefined variables. It is similar to the logical OR (||) operator but more specific in handling falsy values.
    ```

        const age = 0;
        const defaultAge = age ?? 18; // defaultAge will be 0, not 18 (because 0 is neither null nor undefined)

    ```

    - 4. Top-Level Await

    With top-level await, you can use the await keyword in modules without wrapping them inside an async function. This is a big win for making asynchronous code more readable in modules.
    ```
    // You can now directly use await at the top level in an ES module

    const data = await fetch('https://api.example.com/data');
    console.log(data);

```


```
