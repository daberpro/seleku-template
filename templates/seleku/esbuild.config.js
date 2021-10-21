const { build,serve } = require("esbuild");
const { selekuPlugin } = require("@selekudev/selekuplugin");

const args = process.argv.slice(2);

const config = {
  entryPoints: ['src/app.js'],
  bundle: true,
  outdir: 'bundle',
  platform: "browser",
  target: "es2017",
  plugins: [
	  selekuPlugin({
	  	rootDir: __dirname,
	  	precompile(args){
	  		// do something
	  		

	  	}
	  })
  ]
}

const server = async ()=>{

	const serv = await serve({
		servedir: "bundle",
	},config);

	console.log("server running at "+serv.host+" on port "+serv.port);
}

if(args[0] === "--build") build(config)
else if(args[0] === "--development") server()
else throw new Error("argument not valid !")