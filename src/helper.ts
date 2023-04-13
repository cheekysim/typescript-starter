function hello() {
    console.log('Hello World');
}

function goodbye() {
    console.log('Goodbye World');
}

// Allows for { hello, goodbye } to be imported
export { hello, goodbye }; 

// Allows for default import ( helper.hello() )
export default {
    hello,
    goodbye
};