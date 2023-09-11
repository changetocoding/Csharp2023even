
## Objects Orientate languages 101:
- **Abstraction** - cell phone/car: interact with few buttons but stuff under hood is hiden from you.
- **Encapsulation** - privacy: dont want boss to know gone on holiday. But simple as bank balance. ETP: Client is basically one big encapsulation of data so interact through ui. Imagine anyone just writing to db
- **Inheritance** - Parent. Children inherit it
- **Polymorphism** - https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/polymorphism. virtual methods. subclass implements in own way.

# Object orientated principle
abstraction - cell phone/car: interact with few buttons but stuff under hood is hiden from u.  
encapsulation - privacy: dont want boss to know gone on holiday. But simple as bank balance. ETP: Client is basically one big encapsulation of data so interact through ui. Imagine anyone just writing to db  
inheritance - Parent. Children inherit it  
polymorphism - https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/polymorphism. virtual methods. subclass implements in own way.  

Overriding vs overloading

# Solid:
https://en.wikipedia.org/wiki/SOLID  
S  - Single responsiblity principle  
O  - Open/Close principle  
L  - Listov principle  
I  - Interface segregation  
D  - Dependency Inversion  


# Class code
```cs
internal class Library
{

    public string SearchByAuthor(string author)
    {
        return "";
    }

    public string SearchByAuthorAndTitle(string author, string title)
    {
        return "";
    }

    public void DisplayPersonAndAge(string name, int age)
    {
        Console.WriteLine($"{name} is {age} old");
        Console.WriteLine(name + " is " + age + " old");
    }

    public int AddTwoNumbers(int first, int second)
    {
        return first + second;
    }

    public int GetHashCodeFromString(string name)
    {
        return name.Length;
    }
}
```

```cs
public class Book
{
    public string Title { get; set; }
    public string Author { get; set; }
}
```

```cs
public class Gym
{
    private Dictionary<int, string> _idToMember = new Dictionary<int, string>();
    private int _lastId = 0;

    public void AddMember(string memberName)
    {
        _idToMember.Add(_lastId, memberName);
        _lastId++;
    }
}
```

```cs
    // PascalCase - MyBook
    // camelCase - bankAccountDescription

    // Class name is PascalCase
    internal class Book
    {
        // Field 
        public string _bookTitle;
        public string _bookAuthor;
        // [Access Mod] [Type] [name];  // name is  _camelCase

        // Property
        public string BookDescription {  get; set; }
        // [Access Mod] [Type] [Name] { get; set; }  // name is  PascalCase


        // [Access Mod] [Return Type] [Name]()
        // { 
        //      return ...;
        // } 
        public string Display()
        {
            return $"{_bookTitle} by {_bookAuthor}";
        }

        // [Access Mod] void [Name]()
        // { 
        //      
        // } 
        public void RenameDescription()
        {
            BookDescription = "Test";
        }
    }
```

# Homework:
Create several classes with methods in them. Use them within your program class.


