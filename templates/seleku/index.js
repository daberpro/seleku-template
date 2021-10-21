const { SelekuCompiler } = require("@selekudev/compiler");

const fs = require("fs");

const compiler = new SelekuCompiler({
	rootDir: __dirname,
	filename: "app",
	precompile(){

	}
});


console.log(compiler.compile(fs.readFileSync(__dirname+"/src/app.seleku").toString("utf-8")).JS);
console.log(compiler.compileImportComponent(fs.readFileSync(__dirname+"/lib/h1.selekux").toString("utf-8")).JS);

