/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // Trim the string to remove leading and trailing spaces
    s = s.trim();
    
    // Find the index of the last space
    const lastSpaceIndex = s.lastIndexOf(' ');
    
    // If there's no space, the entire string is one word
    if (lastSpaceIndex === -1) {
        return s.length;
    }
    
    // Otherwise, return the length of substring after the last space
    return s.length - lastSpaceIndex - 1;
};