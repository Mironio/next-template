const { exec } = require('child_process');
const fs = require('fs');

// Execute the git command to get the commit hash
exec('git rev-parse HEAD', (error, stdout, stderr) => {
  if (error) {
    console.error('Error getting commit hash:', error);
    return;
  }

  const commitHash = stdout.trim();

  // Create the version.ts file with the commit hash
  const versionFileContent = `export const commitHash = '${commitHash}';\n`;
  fs.writeFileSync('src/app/version.ts', versionFileContent);

  console.log('Commit hash has been written to src/app/version.ts');
});
