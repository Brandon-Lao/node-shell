const fs = require('fs');

function foo()
{
	fs.readdir('./', 'utf8', (err, files) =>
	{
		if (err)
		{
			throw err;
		}
		else
		{
			process.stdout.write(files.join('\n'));
			process.stdout.write('prompt > ');
		}
	});
}
module.exports = foo;