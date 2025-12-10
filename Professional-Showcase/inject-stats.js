const fs = require('fs');
const path = require('path');

const statsPath = process.argv[2];
if (!statsPath) {
	console.error('Usage: node inject-stats.js <path-to-stats-json>');
	process.exit(1);
}

const absoluteStatsPath = path.resolve(statsPath);

if (!fs.existsSync(absoluteStatsPath)) {
	console.error('Stats file not found:', absoluteStatsPath);
	process.exit(1);
}

const stats = JSON.parse(fs.readFileSync(absoluteStatsPath, 'utf8'));
const inputPath = path.join(__dirname, 'input.json');

let currentInput = {usernames: ['AshrafMorningstar']};
if (fs.existsSync(inputPath)) {
	try {
		currentInput = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
	} catch (e) {
		console.warn('Could not parse input.json, using default.');
	}
}

const newInput = {
	...currentInput,
	userStats: stats,
};

fs.writeFileSync(inputPath, JSON.stringify(newInput, null, 2));
console.log(`Injected stats from ${absoluteStatsPath} into input.json`);
