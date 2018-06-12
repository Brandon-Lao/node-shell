process.stdout.write('prompt > ');

process.stdin.on('data', (data) =>
	{
		const cmd = data.toString().trim();

		process.stdout.write('You typed: ' + cmd + '\n');
			if (cmd === 'pwd')
			{
				let pwd = require('./pwd.js');
				pwd();
			}
			if (cmd === 'ls')
			{
				let ls = require('./ls.js');
				ls();
			}
	});
