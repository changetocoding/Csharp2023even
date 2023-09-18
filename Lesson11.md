# Lesson 11 code


```program.cs
    class Program
    {
        static void Main(string[] args)
        {
            var kendraAccount = new BankAccount2("Kendra");

            var myLoanReq = 50;
            kendraAccount.TakeLoan(myLoanReq);

            var kellysAccount = new BankAccount2("Kelly");
            var michealsAccount = new BankAccount2("Micheal", 0, -100);
            michealsAccount.TakeLoan(500); // yes he can


            var michealsAccount2 = new BankAccount2("Micheal", 0, -100);
            michealsAccount2.TakeLoan(50); // yes can

            var michealsAccount3 = new BankAccount2("Micheal", 0, -100);
            michealsAccount3.TakeLoan(10_000); // no cant    10,000

            Console.WriteLine(kendraAccount._amount);  // what will it show?  - nothing
                                                       //Console.WriteLine(hammocksAccount._amount);  // what will it show?  - 100

            myLoanReq = 50;
            if(michealsAccount.CanTakeLoan(myLoanReq))
            {
                michealsAccount.TakeLoan(myLoanReq);
            }
        }
    }
```

```BankAccount2.cs
    public class BankAccount2
    {
        // Property
        public string Name { get; set; } 

        // field
        public decimal _amount = 0;  // equilvalent to doing it through constructor. What's used if not set in constructor

        public decimal _overdraftLimit = -1000m;


        // constructor - Name must match name of class
        // constructor - It has no return type
        public BankAccount2(string name)
        {
            Name = name;
        }

        // method - call it whatever you want except the name of the class
        // second 'word' is the return type
        public void BankAccount(string name)
        {
            Name = name;
        }

        // parameter
        // Parameter we pass into a constructor
        // constructor
        public BankAccount2(string name, decimal amount, decimal overdraftLimit)
        {
            Name = name;
            _amount = amount; // Set it in constructor
            _overdraftLimit = overdraftLimit;
        }

        // parameter
        // Parameter we pass into a method
        // constructor
        public void TakeLoan(decimal req)
        {
            // parameter - what you get given
            // test = variable - what you create within the method
            // _amount = field 
            var newAmount = _amount - req;

            if (newAmount < _overdraftLimit) 
            {
                Console.WriteLine("Can't take this loan");
            }
            else
            {
                _amount = newAmount;
            }
        }

        public bool CanTakeLoan(decimal req)
        {
            var newAmount = _amount - req;
            if (newAmount < _overdraftLimit) 
            {
                return false;
            }
            else
            {
                return true;
            }
        }
    }
```


# Homework
1. Watch videos: 16, 17 here https://learn.microsoft.com/en-us/shows/csharp-101/
2. Read https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/tutorials/classes?WT.mc_id=Educationalcsharp-c9-scottha  and https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/tutorials/oop
