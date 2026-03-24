import { getByText } from '@testing-library/dom';

// Assume you have a function that loads your HTML fixture
function loadHtmlFixture(markup) {
  const container = document.createElement('div');
  container.innerHTML = markup;
  return container;
}

const sampleHtml = `
    <h1>Welcome</h1>
    <p>Hello world</p>
`;

test('should render the correct title and paragraph content', () => {
  const container = loadHtmlFixture(sampleHtml); 
  
  // Test that the paragraph has the expected text
  expect(getByText(container, 'Hello world')).toBeInTheDocument();
  expect(getByTest(container, 'Welcome')). toBeInTheDocument();
});

function testInput(re, inputStr) {
  const midString = re.test(inputStr) ? " contains" : " does not contain";
  console.log(`${inputStr}${midString} ${re.source}`);
}

testInput(/world/, str); 
testInput(/foo/, str);

function testOutput(re, outputStr) {
  const midString = re.test(outputStr) ? " contains" : " output contain";
  console.log(`${outputStr}${midString} ${re.source}`);
}

testOutput(/world/, str); 
testOutput(/foo/, str);


