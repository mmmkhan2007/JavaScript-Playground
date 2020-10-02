/*

Words that Start with a Vowel

Write a function that retrieves all words that begin with a vowel.

Examples
retrieve("A simple life is a happy life for me.") ➞ ["a", "is", "a"]

retrieve("Exercising is a healthy way to burn off energy.")
➞ ["exercising", "is", "a", "off", "energy"]

retrieve("The poor ostrich was ostracized.")
➞ ["ostrich", "ostracized"]

retrieve("")
➞ []

Notes
Make all words lower case in the output.
Retrieve the words in the order they appear in the sentence.

*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################





//#############################################################
//#  SOLUTION 1 
//#############################################################


import re

def retrieve(txt):
    return re.findall(r '\b[aeiou]\w*\b', txt.lower())



//#############################################################
//#  SOLUTION 2  
//#############################################################


def retrieve(txt):
    vowels = ['a', 'e', 'i', 'o', 'u']
txt = txt.replace(".", "")
lower = txt.casefold()
v_words = [word
    for word in lower.split() if word[0] in vowels
]
return v_words




//#############################################################
//#  SOLUTION 3
//#############################################################



def retrieve(txt):
    return list(filter(lambda x: x[0] in ('a', 'i', 'e', 'u', 'o'), txt.lower()[: -1].split()))


//#############################################################
//#  SOLUTION 4
//#############################################################


def retrieve(txt):
    txt1 = txt.split()
holder = [x.lower() for x in txt1
    if x[0].lower() in 'aeiou'
]
return [x[: -1]
    if x[-1] == '.'
    else x
    for x in holder
]