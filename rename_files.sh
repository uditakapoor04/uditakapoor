#!/bin/bash

# Rename files in visual.pdf directory
cp "images/visual.pdf/FINAL PROJECT.pdf" "images/visual.pdf/FINAL_PROJECT.pdf" 2>/dev/null
cp "images/visual.pdf/Kapoor- Diesel collection.pdf" "images/visual.pdf/Kapoor-Diesel_collection.pdf" 2>/dev/null
cp "images/visual.pdf/Madeleine Vionnet Udita Kapoor .pdf" "images/visual.pdf/Madeleine_Vionnet_Udita_Kapoor.pdf" 2>/dev/null

# Ensure all file references in script.js are updated
echo "Files have been renamed to be compatible with GitHub Pages."
echo "Make sure to update any references in your code to use the new filenames." 