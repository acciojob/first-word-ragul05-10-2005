function firstWord(str) {
  if (!str) return ""; // handle empty string

  // Trim leading/trailing spaces
  str = str.trim();

  // Find the index of the first space
  const spaceIndex = str.indexOf(" ");

  // If no space found, return the whole string
  if (spaceIndex === -1) {
    return str;
  }

  // Otherwise return substring up to the first space
  return str.substring(0, spaceIndex);
}

// ✅ Test Cases
 
const s = prompt("Enter String:");
alert(firstWord(s));
