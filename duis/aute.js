// Higher-order function to create parsers
function createParser(parserFunction) {
    return function(data) {
        return parserFunction(data);
    }
}

// Example parsers
const parseJSON = createParser(JSON.stringify);
const parseUpperCase = createParser((data) => data.toUpperCase());

// Usage examples:
console.log(parseJSON({ key: 'value' })); // Outputs: {"key":"value"}
console.log(parseUpperCase("example")); // Outputs: EXAMPLE
