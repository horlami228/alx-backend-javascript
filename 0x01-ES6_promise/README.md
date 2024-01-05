# Using the ES6 promise for Asynchronous operations

## such as requesting data from an API or reading from a file

``` javascript
export default function getResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
```
