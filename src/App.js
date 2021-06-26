import React from 'react';
import './App.css';
import marked from 'marked';

const defaultText = `
  # React Markdown Previewer
  Use the **Editor** field to edit the markdown.

  Edited markdown gets rendered in **Previewer** field.

  > You can even edit this blockquote. Try it!

  ## To Do List
  - walk the dog
  - wash the dishes
  - do some \`coding\`
  - cook dinner
  - water the plants

  ## Code Example
  \`\`\`
  var rating = "Awesome!"
  var message = 'This app is ' + rating
      
  console.log(message)
  
  // This app is Awesome!
  \`\`\`

  ![React Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png)

  ### App made with React and [Marked]

  ### Visit my [website] to see other projects I made!

  [website]: https://egorkabantsov.netlify.app/
  [Marked]: https://github.com/markedjs/marked/

`;

class App extends React.Component{

  // Initializing default state of input value which is assigned to textarea value
  constructor(props){
    super(props);
    this.state = {input: defaultText};
  }

  // Function that changes the state of input value
  // event.target.value gets value inserted in input field (textarea)
  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  render() {
    const markdown = marked(this.state.input, {breaks: true});

    return (
      <div className="App">
        <div className="app-container">
        <section className="editor-area">
            <div className="section-header">
              <h1>Editor</h1>
            </div>
            <textarea id="editor" value={this.state.input} onChange={this.handleChange} />
          </section>
          <section className="previewer-area">
          <div className="section-header">
              <h1>Previewer</h1>
            </div>
            <div dangerouslySetInnerHTML={{__html: markdown}} id="preview" />
          </section>
        </div>  
      </div>
    );
  }
}



export default App;
