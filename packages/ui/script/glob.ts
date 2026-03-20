import { glob } from 'glob';
import { writeFile } from 'fs/promises';
const data = await glob('src/lib/components/**/');
const result = data
	.filter((f) => f !== 'src\\lib\\components\\')
	.map((f) => f.replace('src\\lib\\components\\', '').replace('src\\lib\\components', ''))
	.filter((f) => f !== '');
function capitalize(str: string) {
	if (!str.includes('-')) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	return str
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join('');
}
let dataComponent: string = '';
result.map((f) => {
	dataComponent += `export * as ${capitalize(f)} from './${f}';\n`;
	// appendFileSync(`src/lib/components/index.ts`, `export * as ${capitalize(f)} from './${f}';\n`, 'utf-8');
	// console.log(`export * as ${capitalize(f)} from './${f}';`);
});
writeFile(`src/lib/components/index.ts`, dataComponent, 'utf-8');
