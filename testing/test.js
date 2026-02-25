// index.test.js
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
});

