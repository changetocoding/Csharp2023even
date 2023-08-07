```cs
// List vs array. You can add/remove elements from a list. You can't do that from an array
var list = new List<int>();
var arr = new int[10];
// can do this with both
list[0] = 13; // throws an error because nothing in index 0 position
arr[0] = 13; 
// Can only do this with list
list.Add(12);
list[0] = 13; // would work now as there is now something in index 0 position
// out of bounds error as trying to insert more than the size of the list/array
list[12] = 0;
arr[12] = 0;

  // Can also initialise list and arrays with values:
  var list2 = new List<int>() { 0, 10, 19 };
  var arr2 = new int[] { 10, 12 , 13 };

var list2 = new List<int>() { 0, 10, 19 };
var arr2 = new int[] { 10, 12 , 13 };

// Char vs String. Char is one character. String is a collection of characters, a sentence. Char uses ', string uses "
char c = 'c';
string str = "The time is 8pm";
var firstCharacter = str[0];
Console.WriteLine(str[0]); // 'T'


var names = new Dictionary<string, string>();

names.Add("Micheal", "Le");
names.Add("David", "Mark");

//names.Remove("David");
names["David"] = "Mike";
foreach (var keyValuePair in names)
{
    Console.WriteLine($"{keyValuePair.Key} -> {keyValuePair.Value}");
}


var myOtherDict = new Dictionary<int, string>();
myOtherDict.Add(1, "Fish");


// Phone book assignment using a dictionary
var myCheckoutItem = new Dictionary<char, decimal>();
myCheckoutItem.Add('A', 50);
myCheckoutItem.Add('B', 30);
myCheckoutItem.Add('C', 10);
myCheckoutItem.Add('D', 5);

myCheckoutItem['C'] = 11;


while (true)
{

    var input = Console.ReadLine().ToUpper();
    if (input == "EXIT")
    {
        break;
    }

    var total = 0m; // decimal - Financial stufff
    foreach (var character in input)
    {
        var price = myCheckoutItem[character];
        total += price;
    }
    Console.WriteLine(total);
}

```
