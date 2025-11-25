const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '..', 'src');
const distPath = path.join(__dirname, '..', 'dist');

// Check if src directory exists
if (fs.existsSync(srcPath)) {
  console.log('Building components...');
  const { execSync } = require('child_process');
  try {
    execSync('npm run build', { stdio: 'inherit', cwd: path.join(__dirname, '..') });
    console.log('Build completed successfully!');
  } catch (error) {
    console.error('Build failed:', error.message);
    process.exit(1);
  }
} else {
  console.log('src directory not found, skipping build. Using pre-built dist.');
}

