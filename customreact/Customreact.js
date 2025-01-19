function customReader(reactElement, container) {
    const domElement = document.createElement(reactElement.type);

    // Set attributes from props
    for (const prop in reactElement.props) {
        if (prop === 'children') continue; // Skip children
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    // Set the inner text content
    domElement.textContent = reactElement.children;

    // Append to the container
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',  // Fixed URL format
        target: '_blank'
    },
    children: 'Click me to visit Google' // Fixed text formatting
};

const mainContainer = document.querySelector('#root');
customReader(reactElement, mainContainer);

/*function customReader(reactElement, container){
    ====
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement)
    
    const domElement = document.createElement(reactElement.type)
    for (const prop in reactElement.props) {
        if (prop === 'children') continue
            domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type:'a',
    props: {
        href:'https/google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}

const maincontainer = document.querySelector('#root')

customReader(reactElement, maincontainer)

*/