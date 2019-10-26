# ASSESSMENT 3: INTERMEDIATE JAVASCRIPT
## Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. What are the HTTP verbs? Which CRUD action corresponds to each verb?

  Your answer:
  HTTP: Post (Create), Get (Create), Put (Update), Patch (Update), Delete (Delete);
  CRUD: Create, Read, Update, Delete;

  Researched answer:
  HTTP: Post (Create), Get (Create), Put (Update/Replace), Patch (Update/Modify), Delete (Delete);
  CRUD: Create, Read, Update, Delete;


2. Why would you use object destructuring?

  Your answer:
  To retrieve variables without repetitively adding prefix such as this.

  Researched answer:
  To reduce the amount of code needed to retrieve deeply nested data.



3. Why is testing important?

  Your answer:
  To isolate problems,  make debugging easier and help make the program more robust and stable.

  Researched answer:
  1. To spot defects and errors in the code.
  2. To ensure quality product and customer satisfaction.
  3. It's required for effective performance.
  4. To prevent failures that may be costly to fix in the later stages of development.
  5. To enhance product security.


4. What is the difference between a class and an object?

  Your answer:
  Class can be seen as the blueprint for making objects. Objects hold the data.

  Researched answer:
  A class is a template for defining objects. It specifies the names and types of variables that can exist in an object, as well as "methods"--procedures for operating on those variables. A class can be thought of as a "type", with the objects being a "variable" of that type.


5. What did you learn during the group project this week? Please include any additional feedback you may have.

  Your answer:
  Our group experimented with Hook in React.

  State Hook (useState) returns a pair: the current state value and a function that lets you update the value, can be used to set the states without creating a class, which make it easier for functional programming.

  "With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community."

  Effect Hook can replace lifecycle methods which are sometimes misused and cause unexpected problems.

  "Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data), rather than forcing a split based on lifecycle methods. You may also opt into managing the component’s local state with a reducer to make it more predictable."

### HTML/CSS Review questions: First, try to answer each question on your own then Google the answer to further your knowledge.

1. How do you link a CSS file to your HTML page?

  Your answer:
  Use the <link> tag

  Researched answer:
  1. Use external style sheet such as using a link tag:

  <link rel="stylesheet" type="text/css" href="styles.css" />

  2. Inline Style
  Apply style attribute to specific tags within the document:

  <p style="color: #0000FF">...<p>

  3. Embedded style
  Use <style> tag:

  <html>
  <head>
    <title>Embedded Style Sample</title>
    <style type="text/css">
      h1{
        color: #0000FF;
      }
      h2{
        color: #00CCFF;
      }
    </style>
  </head>
  <body>
    <h1>Embedded Style testing</h1>
    <h2>Next Line</h2>
  </body>
</html>


2. What is the difference between a div and a span?

  Your answer:
  <div> tags span the entire line while <span> can target elements inline.

  Researched answer:
  "Both are used to group together a chunk of HTML and hook some information onto that chunk.

  The difference between span and div is that a span element is in-line and usually used for a small chunk of HTML inside a line (such as inside a paragraph) whereas a div (division) element is block-line (which is basically equivalent to having a line-break before and after it) and used to group larger chunks of code."


3. What is a CSS class? When should you use an id instead of a class?

  Your answer:
  CSS class is a way to group elements.
  ID are unique class which can be used to apply styling to specific elements, and it has the highest specificity (i.e. meaning styling assigned using ID can override styling assigned to the same element using class).

  Researched answer:
  "Use a class when you want to consistently style multiple elements throughout the page/site. Classes are useful when you have, or possibly will have in the future, more than one element that shares the same style. An example may be a div of "comments" or a certain list style to use for related links.

  Additionally, a given element can have more than one class associated with it, while an element can only have one id. For example, you can give a div two classes whose styles will both take effect.

  Furthermore, note that classes are often used to define behavioral styles in addition to visual ones. For example, the jQuery form validator plugin heavily uses classes to define the validation behavior of elements (e.g. required or not, or defining the type of input format)

  Examples of class names are: tag, comment, toolbar-button, warning-message, or email.

  Use the ID when you have a single element on the page that will take the style. Remember that IDs must be unique. In your case this may be the correct option, as there presumably will only be one "main" div on the page.

  Examples of ids are: main-content, header, footer, or left-sidebar.

  A good way to remember this is a class is a type of item and the id is the unique name of an item on the page."

4. Name 4 semantic HTML tags.

  Your answer:
  <body><header><footer><style>

  Researched answer:
  "Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation."

  "Examples of non-semantic elements: <div> and <span> - Tells nothing about its content.

  Examples of semantic elements: <form>, <table>, and <article> - Clearly defines its content."


5. What are three options for creating responsive design?

  Your answer:
  Float, flexbox, grid (with flexbox). With units such as fr, em, and %.

  Researched answer:
  "A responsive website is one that has been designed to respond, or adapt, based on the technology and type of computing device used by the visitor to display the site."

  "Responsive website design consists of the following three main components:

  1. Flexible layouts - Using a flexible grid to create the website layout that will dynamically resize to any width.
  2. Media queries - An extension to media types when targeting and including styles. Media queries allow designers to specify different styles for specific browser and device circumstances.
  3. Flexible media - Makes media (images, video and other formats) scalable, by changing the size of the media as the size of the viewport changes."


### STRETCH: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

  Your answer:
  Front end development creates the interface of what users see and interact, and is critical part of user experience.
  The skills and tools required of front end developers are HTML, CSS, Javascript, and front-end framework such as React. Developers also need to be able to connect the front end with back-end servers. Design skills such as wireframing, visual design, and user research skills are also great to have.

  Researched answer:
  "The front-end is also referred to as the client-side and is sometimes considered "web design". The back-end of the web industry is often called the server-side."

  "10 Must-Have Front End Developer Skills
1. HTML/CSS
2. JavaScript/jQuery
3. CSS and JavaScript Frameworks
4. CSS Preprocessing such as Sass, LESS, or Stylus
5. Version Control/Git
6. Responsive Design
7. Testing/debugging
8. Browser Developer Tools
9. Building and automation tools/Web performance
10. Command Line


2. What is block scope in JavaScript?

  Your answer:
  The scope that only exists in {}.

  Researched answer:
  "A block scope is the area within if, switch conditions or for and while loops. Generally speaking, whenever you see {curly brackets}, it is a block."


3. How would you explain the idea of "inheritance" in object oriented programming?

  Your answer:
  If you have a class and use that class to construct objects, you can have the child objects can inherit properties from the parent object.

  Researched answer:
  "In object-oriented programming, inheritance enables new objects to take on the properties of existing objects. A class that is used as the basis for inheritance is called a superclass or base class. A class that inherits from a superclass is called a subclass or derived class."
