/*

Harshad Numbers

A number n is a Harshad (also called Niven) number if it is divisible by the sum of its digits. For example, 666 is divisible by 6 + 6 + 6, so it is a Harshad number.

Write a function to determine whether the given number is a Harshad number.

Examples
is_harshad(209) ➞ True

is_harshad(41) ➞ False

is_harshad(12255) ➞ True

*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################





//#############################################################
//#  SOLUTION 1 
//#############################################################


def is_harshad(num):
    return num != 0 and num % sum(int(x) for x in str(num)) == 0



//#############################################################
//#  SOLUTION 2  
//#############################################################



def is_harshad(num):
    if num == 0:
    return False
return num % sum([int(x) for x in str(num)]) == 0


//#############################################################
//#  SOLUTION 3
//#############################################################


def is_harshad(num):
    s = str(num)
l = []
for i in s:
    l.append(int(i))
if num == 0:
    return False
elif num % sum(l) == 0:
    return True
else :
    return False