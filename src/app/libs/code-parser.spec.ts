import { isTag } from './code-parser'; // Ajusta la ruta si es necesario

describe('isTag', () => {
  // Definición de objetos para los casos de prueba
  const validTagCases = [
    { tag: '<h1>', description: 'Failed for opening h1 tag' },
    { tag: '</h1>', description: 'Failed for closing h1 tag' },
    { tag: '<div>', description: 'Failed for opening div tag' },
    { tag: '<span>', description: 'Failed for opening span tag' },
    { tag: '</span>', description: 'Failed for closing span tag' },
    { tag: '<img />', description: 'Failed for self-closing img tag' },
    { tag: '<input>', description: 'Failed for input tag' },
    { tag: '<my-custom-element>', description: 'Failed for custom element' },
    {
      tag: '<my-element-with-dash>',
      description: 'Failed for element with dash',
    },
    {
      tag: '<div >',
      description: 'Failed for tag with space before closing bracket',
    },
    {
      tag: '</div  >',
      description: 'Failed for closing tag with extra spaces',
    },
  ];

  const invalidTagCases = [
    { tag: '<1h1>', description: 'Failed for tag starting with number' },
    { tag: '< h1>', description: 'Failed for tag with leading space' },
    { tag: '<>', description: 'Failed for empty tag' },
    { tag: '<div', description: 'Failed for unclosed div tag' },
    { tag: 'div>', description: 'Failed for tag without opening bracket' },
    { tag: '</div', description: 'Failed for closing tag without opening' },
    { tag: '<di$v>', description: 'Failed for tag with invalid characters' },
    {
      tag: '</di$v>',
      description: 'Failed for closing tag with invalid characters',
    },
  ];

  const tagsWithAttributes = [
    {
      tag: '<div id="myDiv">',
      description: 'Failed for div with id attribute',
    },
    {
      tag: '<img src="image.jpg" alt="Image">',
      description: 'Failed for img with src and alt attributes',
    },
    {
      tag: '<custom-element data-info="value">',
      description: 'Failed for custom element with data attribute',
    },
    {
      tag: '<button class="btn btn-primary" disabled>',
      description:
        'Failed for button with multiple attributes and text content',
    },
  ];

  const caseInsensitiveTags = [
    { tag: '<DIV>', description: 'Failed for uppercase opening DIV tag' },
    { tag: '</DIV>', description: 'Failed for uppercase closing DIV tag' },
  ];

  // Pruebas utilizando los objetos
  it('should identify valid HTML tags', () => {
    validTagCases.forEach((testCase) => {
      expect(isTag(testCase.tag)).withContext(testCase.description).toBeTrue();
    });
  });

  it('should identify invalid HTML tags', () => {
    invalidTagCases.forEach((testCase) => {
      expect(isTag(testCase.tag)).withContext(testCase.description).toBeFalse();
    });
  });

  it('should handle tags with attributes', () => {
    tagsWithAttributes.forEach((testCase) => {
      expect(isTag(testCase.tag)).withContext(testCase.description).toBeTrue();
    });
  });

  it('should be case-insensitive', () => {
    caseInsensitiveTags.forEach((testCase) => {
      expect(isTag(testCase.tag)).withContext(testCase.description).toBeTrue();
    });
  });

  it('should handle empty strings', () => {
    expect(isTag('')).withContext('Failed for empty string').toBeFalse();
  });
});
