# Plain English Solution

1 - We create an object with the Roman letter and values
2 - We have to create an array to convert the input and divide them with .split()
3 - Add .toUppercase() so it'll be "true" even if we don't use capital letters
4 - Add .reduce() so we can pass the previous value we'll type (for 2+ digits)

5 - We get the value of the Roman letter within the array - line 18
6 - We return the value
7 - We add the negative value so we can get numbers like IV (4)
8 - Then we add it to the total value
