# Basics

## Html - Hyper text markup language
Html describes how a web page should look
### Tags
- We covered tags `<h1>`. A tag is <> with some text inside which is the name of the tag. In this case a h1
- A tag gives an instruction to the computer. In this case create a large heading
- Every tag must have an opening tag `<p>` and a closing tag `</p>`.
- The exception is an input `<input type="text />

### Some tags
- `<h1>Heading1</h1>` heading
- `<h2>warning</h2>` heading
- `<h3>This</h3>` heading
- `<button>Click me!</button>` a button
- `<p>Some text</p>` paragraph
- `<label>From:</label>` a label
- A dropdown
 ```
          <select>
            <option>Micheal</option>
            <option>Edward</option>
            <option>David</option>
        </select>
  ```
  Notice you can have a tag within another tag (options within select)
## CSS
Css allows us to style a web page

For example we can change the background colour to blue:
`<h1 style="background-color: blue;">Heading1</h1>`

You add to a tag:
`style="THING TO CHANGE: VALUE TO CHANGE TO;"`


The `;` at the end tells the computer that this is the end of a style. Means you can have multiple styles:
`<h3 style="margin-top: 200px; background-color: black; color: white; ">Heading3</h3>`
 
## Class code
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Edward's Title</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="">
    </head>
    <!-- This is a comment. It is ignored-->
    <body>
        <!-- This will get ignored -->
        <!-- The body tag is where your main content-->
        
        <!-- Css allows you to style the page-->

        <h1 style="background-color: blue;">Heading1</h1>
        <h2 style="color: Red;">This is a warning</h2>
        <h3 style="margin-top: 200px; background-color: black; color: white; ">Heading3</h3>

        <p>Wishing well </p>
        <p>This is my first lesson</p>
        <button style="color: red;">Do not Press me!</button>

        <select>
            <option>Micheal</option>
            <option>Edward</option>
            <option>David</option>
        </select>

        <!-- Exception to the rule: You don't need a closing tag -->
        <input type="text">


        <div>
            <p>Wishing well </p>           
            <p>This is my first lesson</p>
        </div>

        <script src="" async defer></script>
    </body>
</html>
```
