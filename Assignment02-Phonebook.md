# Phonebook

# Phonebook part I: Create phonebook
You've been tasked to design the phone book on a phone. 
The only problem is it on one of those old Nokia brick phones.


You should create a command line phone book application that must:
1. Have an option to add a name and an *11* digit number. The number may begin with a 0.   
Here is an example input/output from the console. First line is the user input, second line is the system response
```
STORE david 07900001234
OK
STORE work 02080000110
OK
STORE peter 12345678901
OK
```
2. Have an option to retrieve a number given a name
```
GET peter
OK 12345678901
```
3. Have an option to delete/remove a name. It must return the number of the deleted person to confirm the deletion was successful
```
DEL peter
OK 12345678901
```
4. Have an option to Update the number for a person. Returns the previous number to confirm the update was successful  
```
UPDATE david 07700000000
OK last no was - 07900001234
```
