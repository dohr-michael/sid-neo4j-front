const pkg = require('./package.json');

var deps = "";
for (var pk in pkg.dependencies) {
    deps += " && npm install --save " + pk;
}
for (var pk in pkg.devDependencies) {
    deps += " && npm install --save-dev " + pk;
}

console.log(deps);