/* <- Question ->

Recall that a "power of 2" is any integer of the form 2^n for integer n.

Recall that the "median" of a list of numbers is defined as the "middle" of the sorted list of numbers. For example the median of [3, 1, 5, 7, 4] is 4.

Design a data structure that supports the following operations:

A constructor, with no parameters.
Insert(x), adds x to the data set, where x is an integer.
LooseMedian(), returns any integer within the nearest powers of 2 of the median of all inserted elements.
Nearest powers of 2 of the median m is defined as:

If m is NOT a power of two, and we have 2^k< m < 2^(k+1), then any integer in [2^k, 2^(k+1)] is acceptable.
If m IS a power of two, i.e. m=2^k, then any integer in [2^(k-1), 2^(k+1)] is acceptable.
Example:

Insert(3). Inserted elements are [3].
LooseMedian(). Median is 3. Acceptable return values of are any of 2, 3, 4.
Insert(5). Inserted elements are [3, 5].
Insert(4). Inserted elements are [3, 5, 4].
LooseMedian(). Median is 4. Acceptable return values are any of 2, 3, 4, 5, 6, 7, 8.

<- Discussion ->
[1,2,9,10] -> Insert(3)


*/

// <- Code ->
