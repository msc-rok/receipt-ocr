
var constants = Object.freeze({
    IS_PRODUCTION: (process.env.NODE_ENV=="production"),
    IS_DEVELOPMENT: (process.env.NODE_ENV=="development")
});

console.log(`CONSTANTS:`)
for(var g of Object.keys(constants)) {
    global[g] = constants[g];
    console.log(`- ${g}:'${constants[g]}'`)
}

module.exports = constants;


