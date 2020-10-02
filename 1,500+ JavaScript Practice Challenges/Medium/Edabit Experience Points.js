/*

Edabit Experience Points

As you complete questions on Edabit, you gain experience points depending on the difficulty of the question. The points for each difficulty are as follows:

Difficulty	Experience Points
Very Easy	5XP
Easy	10XP
Medium	20XP
Hard	40XP
Very Hard	80XP
Given a dictionary of how many questions a person has completed of each difficulty, return how many experience points they'll have.

Examples
get_xp({
  "Very Easy" : 89,
  "Easy" : 77,
  "Medium" : 30,
  "Hard" : 4,
  "Very Hard" : 1
}) ➞ "2055XP"


get_xp({
  "Very Easy" : 254,
  "Easy" : 32,
  "Medium" : 65,
  "Hard" : 51,
  "Very Hard" : 34
}) ➞ "7650XP"


get_xp({
  "Very Easy" : 11,
  "Easy" : 0,
  "Medium" : 2,
  "Hard" : 0,
  "Very Hard" : 27
}) ➞ "2255XP"

Notes
Return values as a string and make sure to add "XP" to the end.

*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################





//#############################################################
//#  SOLUTION 1 
//#############################################################

def get_xp(d):
    v = { 'Very Easy': 5, 'Easy': 10, 'Medium': 20, 'Hard': 40, 'Very Hard': 80 }
return '{}XP'.format(sum({ d[i] * v[i] for i in d.keys() }))


//#############################################################
//#  SOLUTION 2  
//#############################################################

def get_xp(d):
    points = [
        d.get('Very Easy') * 5,
        d.get('Easy') * 10,
        d.get('Medium') * 20,
        d.get('Hard') * 40,
        d.get('Very Hard') * 80
    ]
return '{}XP'.format(sum(points))



//#############################################################
//#  SOLUTION 3
//#############################################################


def get_xp(d):
    total = 0
for i, j in d.items():
    if i == 'Very Easy':
    total += j * 5
if i == 'Easy':
    total += j * 10
if i == 'Medium':
    total += j * 20
if i == 'Hard':
    total += j * 40
if i == 'Very Hard':
    total += j * 80
return str(total) + 'XP'



//#############################################################
//#  SOLUTION 4
//#############################################################


def get_xp(d):
    d["Very Easy"] = d["Very Easy"] * 5
d["Easy"] = d['Easy'] * 10
d["Medium"] = d["Medium"] * 20
d["Hard"] = d["Hard"] * 40
d["Very Hard"] = d["Very Hard"] * 80
return '{}XP'.format(sum(d.values()))