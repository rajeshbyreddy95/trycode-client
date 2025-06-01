/* client/src/pages/Tutorials/HtmlTutorial.js */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const htmlSections = [
  {
    id: 'introduction',
    title: 'Introduction to HTML',
    content: `
HTML (HyperText Markup Language) is the standard markup language for creating web pages. It provides the structure of a webpage using a system of elements and tags. HTML works by using tags to define different parts of a webpage, such as headings, paragraphs, links, images, and more. HTML is the foundation of web development, often used alongside CSS for styling and JavaScript for interactivity.
    `,
    code: `<h1>Hello, World!</h1>`,
  },
  {
    id: 'document-structure',
    title: 'HTML Document Structure',
    content: `
Every HTML document follows a standard structure:
- <!DOCTYPE html>: Declares the document type as HTML5.
- <html>: The root element of the HTML page, with a lang attribute for accessibility (e.g., lang="en" for English).
- <head>: Contains metadata, such as the page title, character encoding, and links to external resources (e.g., CSS, favicon).
- <body>: Contains the visible content of the webpage, including text, images, and interactive elements.
    `,
    code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Webpage</title>
</head>
<body>
  <h1>Welcome to My Webpage</h1>
  <p>This is the body content.</p>
</body>
</html>`,
  },
  {
    id: 'meta-tags',
    title: 'Meta Tags (<meta>)',
    content: `
Meta tags provide metadata about the HTML document, placed inside the <head> tag. They are not visible on the page but are crucial for SEO, accessibility, and browser behavior:
- charset: Defines the character encoding (e.g., UTF-8).
- name="description": Provides a description for search engines.
- name="viewport": Ensures responsive design on mobile devices.
- name="keywords": Lists keywords for SEO (less impactful today).
- name="author": Specifies the author of the page.
    `,
    code: `
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Learn HTML with this tutorial">
  <meta name="keywords" content="HTML, tutorial, web development">
  <meta name="author" content="Your Name">
</head>`,
  },
  {
    id: 'headings',
    title: 'Headings (<h1> to <h6>)',
    content: `
HTML headings define the hierarchy of content on a webpage, ranging from <h1> (most important, typically used for the main title) to <h6> (least important, used for sub-subsections). They are crucial for organizing content in a logical structure, improving readability, and enhancing SEO and accessibility.

**SEO Best Practices:**
- Use only one <h1> tag per page as the main title to clearly indicate the primary topic.
- Follow a logical hierarchy (e.g., <h1> followed by <h2>, not skipping to <h3>).
- Include relevant keywords in headings to help search engines understand the content.

**Accessibility Considerations:**
- Screen readers rely on headings to navigate content, so ensure the hierarchy is meaningful (e.g., don’t use <h3> directly after <h1>).
- Avoid using headings for styling purposes only; use CSS instead.

**Styling Tips:**
- Customize heading appearance using CSS (e.g., font-size, color, margins).
- Example CSS: h1 { font-size: 2.5em; color: #ff99cc; }

Headings can contain nested content like paragraphs, links, or images to structure sections effectively.
    `,
    code: `
<h1>Main Heading (Page Title)</h1>
<p>Introduction paragraph under the main heading.</p>
<h2>Subheading (Section Title)</h2>
<p>First paragraph under the subheading.</p>
<h3>Sub-subheading (Subsection)</h3>
<p>Details under the subsection.</p>
<h4>Level 4 Heading</h4>
<p>More specific content.</p>
<h5>Level 5 Heading</h5>
<p>Even more specific details.</p>
<h6>Level 6 Heading</h6>
<p>Smallest heading level, often used for fine details.</p>`,
  },
  {
    id: 'paragraphs',
    title: 'Paragraphs (<p>)',
    content: `
The <p> tag defines a paragraph of text. It is a block-level element, meaning it automatically adds spacing (margin) before and after the paragraph for readability. Paragraphs are used to structure textual content on a webpage.
    `,
    code: `
<p>This is the first paragraph.</p>
<p>This is the second paragraph with more text to demonstrate spacing.</p>`,
  },
  {
    id: 'text-formatting',
    title: 'Text Formatting Tags',
    content: `
HTML provides several tags for formatting text:
- <b>: Bold text (visual styling).
- <i>: Italic text (visual styling).
- <u>: Underlined text (visual styling).
- <strong>: Indicates important text (semantic, usually bold).
- <em>: Indicates emphasized text (semantic, usually italic).
- <small>: Smaller text, often for fine print.
- <sup>: Superscript text (e.g., for exponents).
- <sub>: Subscript text (e.g., for chemical formulas).
- <mark>: Highlights text (yellow background by default).
- <del>: Strikethrough text (for deleted content).
- <ins>: Underlined text (for inserted content).
    `,
    code: `
<p><b>Bold</b> text and <i>italic</i> text.</p>
<p><u>Underlined</u> text.</p>
<p><strong>Important</strong> and <em>emphasized</em> text.</p>
<p><small>Small text</small> for fine print.</p>
<p>2<sup>3</sup> = 8 (superscript).</p>
<p>H<sub>2</sub>O (subscript).</p>
<p><mark>Highlighted</mark> text.</p>
<p><del>Deleted</del> and <ins>inserted</ins> text.</p>`,
  },
  {
    id: 'links',
    title: 'Links (<a>)',
    content: `
The <a> tag creates hyperlinks to other pages, files, or locations within the same page:
- href: Specifies the destination URL or anchor.
- target: Defines where the link opens (e.g., target="_blank" opens in a new tab).
- title: Provides a tooltip on hover for accessibility.
You can also link to email addresses or phone numbers using mailto: or tel: protocols.
    `,
    code: `
<a href="https://example.com" target="_blank" title="Visit Example">Visit Example</a>
<br>
<a href="mailto:example@email.com">Email Us</a>
<br>
<a href="tel:+1234567890">Call Us</a>`,
  },
  {
    id: 'images',
    title: 'Images (<img>)',
    content: `
The <img> tag embeds images in a webpage. It is a self-closing tag with the following attributes:
- src: The URL or path to the image.
- alt: Alternative text for accessibility (describes the image for screen readers).
- width and height: Control the image dimensions (in pixels).
- title: Tooltip on hover.
Note: External images cannot be embedded here due to sandbox restrictions, so the output shows a placeholder.
    `,
    code: `<img src="example.jpg" alt="Example Image" width="100" height="100" title="Example Image">`,
  },
  {
    id: 'lists',
    title: 'Lists (<ul>, <ol>, <li>, <dl>)',
    content: `
HTML supports multiple types of lists:
- <ul>: Unordered list (bullets).
- <ol>: Ordered list (numbers or letters). Use type attribute to change numbering (e.g., type="A" for letters).
- <li>: List item within <ul> or <ol>.
- <dl>: Description list.
- <dt>: Description term.
- <dd>: Description details.
Lists can be nested for more complex structures.
    `,
    code: `
<ul>
  <li>Bullet Item 1</li>
  <li>Bullet Item 2
    <ul>
      <li>Nested Item 1</li>
      <li>Nested Item 2</li>
    </ul>
  </li>
</ul>
<ol type="1">
  <li>Numbered Item 1</li>
  <li>Numbered Item 2</li>
</ol>
<ol type="A">
  <li>Letter Item A</li>
  <li>Letter Item B</li>
</ol>
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>`,
  },
  {
    id: 'tables',
    title: 'Tables (<table>, <tr>, <th>, <td>, <caption>)',
    content: `
HTML tables display tabular data:
- <table>: Defines the table.
- <tr>: Defines a table row.
- <th>: Defines a table header cell (bold and centered by default).
- <td>: Defines a table data cell.
- <caption>: Adds a title to the table.
Additional attributes:
- border: Adds a border (e.g., border="1").
- colspan and rowspan: Allow cells to span multiple columns or rows.
    `,
    code: `
<table border="1">
  <caption>Student Data</caption>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th colspan="2">Details</th>
  </tr>
  <tr>
    <td>John</td>
    <td>25</td>
    <td>Grade A</td>
    <td>Passed</td>
  </tr>
  <tr>
    <td rowspan="2">Jane</td>
    <td>30</td>
    <td>Grade B</td>
    <td>Passed</td>
  </tr>
  <tr>
    <td>28</td>
    <td>Grade A</td>
    <td>Passed</td>
  </tr>
</table>`,
  },
  {
    id: 'forms',
    title: 'Forms (<form>, <input>, <textarea>, <select>, <label>, <button>)',
    content: `
Forms collect user input:
- <form>: Defines the form container.
- <input>: Creates input fields (types: text, email, password, radio, checkbox, etc.).
- <textarea>: Multi-line text input.
- <select> and <option>: Dropdown menu.
- <label>: Associates a label with a form element (improves accessibility).
- <button>: Submits or triggers actions.
Attributes:
- placeholder: Placeholder text in inputs.
- required: Makes a field mandatory.
- type: Defines the input type.
Note: This form is for demonstration and won't submit due to sandbox restrictions.
    `,
    code: `
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" placeholder="Enter name" required />
  <br>
  <label for="email">Email:</label>
  <input type="email" id="email" placeholder="Enter email" required />
  <br>
  <label for="message">Message:</label>
  <textarea id="message" placeholder="Enter message" rows="3"></textarea>
  <br>
  <label for="country">Country:</label>
  <select id="country">
    <option value="usa">USA</option>
    <option value="uk">UK</option>
    <option value="india">India</option>
  </select>
  <br>
  <label>Gender:</label>
  <input type="radio" id="male" name="gender" value="male" />
  <label for="male">Male</label>
  <input type="radio" id="female" name="gender" value="female" />
  <label for="female">Female</label>
  <br>
  <label for="subscribe">Subscribe:</label>
  <input type="checkbox" id="subscribe" />
  <br>
  <button type="button">Submit</button>
</form>`,
  },
  {
    id: 'semantic-tags',
    title: 'Semantic Tags',
    content: `
Semantic tags provide meaning to the structure of a webpage, improving accessibility and SEO:
- <header>: Defines a header section (e.g., for a logo and navigation).
- <nav>: Defines a navigation section.
- <main>: Defines the main content area.
- <article>: Defines independent, self-contained content.
- <section>: Defines a thematic section.
- <aside>: Defines content aside from the main content (e.g., a sidebar).
- <footer>: Defines a footer section.
- <figure> and <figcaption>: Used for images or diagrams with captions.
    `,
    code: `
<header>
  <h1>Website Header</h1>
</header>
<nav>
  <a href="#home">Home</a> | <a href="#about">About</a>
</nav>
<main>
  <section>
    <h2>Section Title</h2>
    <p>Section content.</p>
  </section>
  <article>
    <h2>Article Title</h2>
    <p>Article content.</p>
  </article>
</main>
<aside>
  <h3>Sidebar</h3>
  <p>Additional info.</p>
</aside>
<figure>
  <img src="example.jpg" alt="Example">
  <figcaption>Caption for the image.</figcaption>
</figure>
<footer>
  <p>Website Footer © 2025</p>
</footer>`,
  },
  {
    id: 'multimedia',
    title: 'Multimedia (<audio>, <video>, <iframe>)',
    content: `
HTML supports embedding multimedia:
- <audio>: Embeds audio files. Attributes: controls (shows playback controls), autoplay, loop.
- <video>: Embeds video files. Attributes: controls, autoplay, loop, width, height.
- <iframe>: Embeds external content (e.g., YouTube videos, maps). Attributes: src, width, height.
Note: External media cannot be embedded here due to sandbox restrictions, so the output shows placeholders.
    `,
    code: `
<audio controls>
  <source src="example.mp3" type="audio/mp3">
  Your browser does not support the audio element.
</audio>
<br>
<video width="320" height="240" controls>
  <source src="example.mp4" type="video/mp4">
  Your browser does not support the video element.
</video>
<br>
<iframe width="320" height="240" src="https://www.youtube.com/embed/dQw4w9WgXcQ">
</iframe>`,
  },
  {
    id: 'div-span',
    title: 'Div and Span (<div>, <span>)',
    content: `
- <div>: A block-level container for grouping elements. Often used for layout and styling.
- <span>: An inline container for styling or grouping small portions of text.
Both are non-semantic but widely used for structuring and styling content.
    `,
    code: `
<div style="border: 1px solid black; padding: 10px;">
  <p>This is inside a div.</p>
</div>
<p>This is a <span style="color: red;">red</span> word in a sentence.</p>`,
  },
  {
    id: 'blockquote',
    title: 'Blockquote and Quote (<blockquote>, <q>)',
    content: `
- <blockquote>: Defines a quoted section from another source, often indented by browsers.
- <q>: Defines a short inline quotation, often displayed with quotation marks.
- cite attribute: Can be used to reference the source URL (not displayed by browsers).
    `,
    code: `
<blockquote cite="https://example.com">
  <p>Here is a quote from another source.</p>
</blockquote>
<p>According to someone, <q cite="https://example.com">this is a short quote</q>.</p>`,
  },
  {
    id: 'pre-code',
    title: 'Preformatted Text and Code (<pre>, <code>)',
    content: `
- <pre>: Defines preformatted text, preserving spaces and line breaks (useful for code snippets).
- <code>: Defines inline code or a code fragment (often styled in monospace font).
These tags are commonly used together to display code examples.
    `,
    code: `
<pre>
<code>
function hello() {
  console.log("Hello, World!");
}
</code>
</pre>
<p>Inline <code>console.log()</code> example.</p>`,
  },
  {
    id: 'comments',
    title: 'Comments (<!-- -->)',
    content: `
HTML comments are used to add notes in the code that are not displayed on the webpage. They are useful for documentation or temporarily disabling code.
Syntax: <!-- Comment text -->
    `,
    code: `
<!-- This is a comment -->
<p>This text is visible.</p>
<!-- <p>This text is commented out and not visible.</p> -->`,
  },
  {
    id: 'attributes',
    title: 'HTML Attributes (id, class, style, etc.)',
    content: `
HTML tags can have attributes to provide additional information:
- id: Unique identifier for an element (used for JavaScript or CSS targeting).
- class: Assigns a class for styling or JavaScript (can be used on multiple elements).
- style: Inline CSS styling.
- title: Tooltip on hover.
- lang: Specifies the language of the element.
- data-*: Custom data attributes for storing extra information.
- hidden: Hides the element (not displayed).
    `,
    code: `
<p id="intro" class="text-large" style="color: blue;" title="Tooltip" lang="en" data-info="custom data" hidden>
  This paragraph has multiple attributes (hidden, so not visible).
</p>
<p class="text-large">This paragraph shares the same class.</p>`,
  },
  {
    id: 'entities',
    title: 'HTML Entities',
    content: `
HTML entities are used to display special characters that are reserved in HTML (e.g., <, >) or not available on the keyboard:
- <: Less than (<)
- >: Greater than (>)
- &: Ampersand (&)
-  : Non-breaking space (prevents line breaks).
- ©: Copyright symbol (©)
Entities start with & and end with ;.
    `,
    code: `
<p>5 < 10 and 10 > 5</p>
<p>Use & for ampersands.</p>
<p>No break here.</p>
<p>Copyright © 2025</p>`,
  },
];

export default function HtmlTutorial() {
  const [activeSection, setActiveSection] = useState(htmlSections[0].id);

  // Animation variants for sidebar buttons
  const sidebarItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  // Animation for main content
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Animation for code and output sections
  const blockVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.4, type: 'spring', stiffness: 100 } },
  };

  // Animation for dropdown
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="flex flex-col bg-gradient-to-br from-[#1e1a3c] to-[#2a2559] text-white min-h-screen">
      {/* Mobile Filter Dropdown */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={dropdownVariants}
        className="md:hidden p-4"
      >
        <select
          value={activeSection}
          onChange={(e) => setActiveSection(e.target.value)}
          className="w-full p-2 rounded bg-black bg-opacity-50 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#ff99cc]"
        >
          {htmlSections.map((section) => (
            <option key={section.id} value={section.id} className="bg-black">
              {section.title}
            </option>
          ))}
        </select>
      </motion.div>

      <div className="flex flex-col md:flex-row">
        {/* Left Nav (Desktop) */}
        <nav className="hidden md:block w-1/5 sticky top-0 h-screen overflow-y-auto p-4 border-r border-gray-700 bg-black bg-opacity-20 backdrop-blur-md shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-[#ff99cc]">HTML Tutorial</h2>
          <ul className="space-y-4">
            {htmlSections.map((section, index) => (
              <motion.li
                key={section.id}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={sidebarItemVariants}
              >
                <button
                  className={`text-left w-full px-3 py-2 rounded transition ${
                    activeSection === section.id
                      ? 'bg-[#ff99cc] text-black font-semibold'
                      : 'text-gray-300 hover:bg-[#ff66b3] hover:text-white'
                  }`}
                  onClick={() => setActiveSection(section.id)}
                >
                  {section.title}
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Main Content */}
        <main className="w-full md:w-3/5 p-6 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={contentVariants}
              className="bg-black bg-opacity-20 backdrop-blur-md p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-4 text-[#ff99cc]">{htmlSections.find((sec) => sec.id === activeSection).title}</h2>
              <p className="mb-6 text-gray-300 whitespace-pre-line">{htmlSections.find((sec) => sec.id === activeSection).content}</p>

              <motion.div variants={blockVariants} initial="hidden" animate="visible" className="mb-4">
                <h4 className="text-[#ff99cc] text-sm mb-2">Code:</h4>
                <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto">
                  <code>{htmlSections.find((sec) => sec.id === activeSection).code}</code>
                </pre>
              </motion.div>

              <motion.div variants={blockVariants} initial="hidden" animate="visible" className="mb-6">
                <h4 className="text-[#ff99cc] text-sm mb-2">Output:</h4>
                <div className="bg-white text-black p-4 rounded shadow-inner">
                  <div dangerouslySetInnerHTML={{ __html: htmlSections.find((sec) => sec.id === activeSection).code }} />
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Right Space */}
        <div className="hidden md:block w-[40px]" />
      </div>
    </div>
  );
}