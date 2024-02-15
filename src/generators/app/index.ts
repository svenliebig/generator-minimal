import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import Generator from "yeoman-generator";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = resolve(__dirname, "..");

// This is the main generator
export default class extends Generator {
	private answers: Record<string, any> = {}

	constructor(args: string | string[], options: {}) {
		super(args, { ...options, resolved: root });
		this.sourceRoot(root);
	}

	async initializing() {
		this.log("👋 Welcome to minimal Generator 🤖");
	}

	async prompting() {
		this.answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname // Default to current folder name
      },
    ], this.config);
	}

	async configuring() {
		this.log(this.answers)
		this.log(this.config.getAll())
	}

	async default() {
	}

	async writing() {
		this.fs.write(this.destinationPath("jonsnow.txt"), "hello world");
	}

	async conflicts() {
	}

	async install() {
	}

	async end() {
		this.log("👋 Goodbye 👋");
	}
}
