#!/bin/bash

# Creates zip archive and puts it into OUTPUT_ZIP

# Define the name of the output ZIP file
# This will create the ZIP in the .temp directory at the project root
OUTPUT_ZIP=".temp/next-template.zip"

# Save the current directory
CURRENT_DIR=$(pwd)

# Change to the directory where the script is located
cd "$(dirname "$0")"

# Change to the project root directory (assuming the script is in a 'scripts' subdirectory)
cd ..

# Check if the .temp directory exists, if not, create it
if [ ! -d ".temp" ]; then
    echo "Creating .temp directory"
    mkdir ".temp"
fi

# Remove any existing ZIP file with the same name
if [ -f "$OUTPUT_ZIP" ]; then
    echo "Removing existing $OUTPUT_ZIP file"
    rm "$OUTPUT_ZIP"
fi

# Create a ZIP archive of the project directory excluding specified folders
echo "Creating ZIP package excluding node_modules and all dot-prefixed folders"
zip -r "$OUTPUT_ZIP" . -x "*node_modules/*" -x ".*/*" -x "*/.*/*"

# Check if the ZIP creation was successful
if [ -f "$OUTPUT_ZIP" ]; then
    echo "ZIP package created successfully: $OUTPUT_ZIP"
else
    echo "Failed to create ZIP package"
fi

# Change back to the original directory
cd "$CURRENT_DIR"
