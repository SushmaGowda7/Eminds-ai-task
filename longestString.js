const longestConsec = (strarr, k) => {
  const n = strarr.length;
  if (n === 0 || k > n || k <= 0) {
    return '';
  }

  let maxLength = 0;
  let result = '';

  for (let i = 0; i < n - k + 1; i++) {
    const currentString = strarr.slice(i, i + k).join('');
    const currentLength = currentString.length;
    if (currentLength > maxLength) {
      maxLength = currentLength;
      result = currentString;
    }
  }

  return result;
}

// Edge cases
console.log(longestConsec([], 2)); // ""
console.log(longestConsec(['a'], 0)); // ""
console.log(longestConsec(['a'], 2)); // ""
console.log(longestConsec(['a'], -1)); // ""

// Normal cases
console.log(longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas', 'theta', 'abigail'], 2)); // 'abigailtheta'
console.log(longestConsec(['tree', 'foling', 'trashy', 'blue', 'abcdef', 'uvwxyz'], 2)); // 'folingtrashy'
console.log(longestConsec(['a', 'ab', 'abc', 'abcd'], 2)); // 'abcabcd'
console.log(longestConsec(['a', 'ab', 'abc', 'abcd'], 3)); // 'ababcabcd'
console.log(longestConsec(['a', 'ab', 'abc', 'abcd'], 4)); // 'aababcabcd'

// Time complexity: O(n), where n is the length of the input array strarr.

// Space complexity: O(n), where n is the length of the input array strarr.
