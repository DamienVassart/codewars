# Create a method each_cons that accepts a list and a number n, 
# and returns cascading subsets of the list of size n, like so:

# each_cons([1,2,3,4], 2)
# => [[1,2], [2,3], [3,4]]

# each_cons([1,2,3,4], 3)
# => [[1,2,3],[2,3,4]]

def each_cons(lst, n):
    subsets = []
    for i in range(len(lst) - n + 1):
        subsets.append(lst[i:i+n])
    return subsets