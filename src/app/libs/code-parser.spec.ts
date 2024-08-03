import { isTag, spliteInTags } from './code-parser'; // Ajusta la ruta si es necesario

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
    {
      tag: '<button (click)="increment()">',
      description: 'Failed for angular example - click event with funciton',
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

describe('spliteInTags', () => {
  // Casos de prueba
  it('should split a simple HTML string into tags and content', () => {
    const htmlString = '<div><p>Hello</p></div>';
    const expectedResult = ['<div>', '<p>', 'Hello', '</p>', '</div>'];

    expect(spliteInTags(htmlString)).toEqual(expectedResult);
  });

  it('should handle self-closing tags', () => {
    const htmlString = '<div><img src="image.jpg" /></div>';
    const expectedResult = ['<div>', '<img src="image.jpg" />', '</div>'];

    expect(spliteInTags(htmlString)).toEqual(expectedResult);
  });

  it('should handle tags with attributes', () => {
    const htmlString =
      '<div class="container"><p id="my-paragraph">Content</p></div>';
    const expectedResult = [
      '<div class="container">',
      '<p id="my-paragraph">',
      'Content',
      '</p>',
      '</div>',
    ];

    expect(spliteInTags(htmlString)).toEqual(expectedResult);
  });

  it('should handle nested tags', () => {
    const htmlString =
      '<div><p>Hello <b>world</b>!</p><span> hello word2 </span></div>';
    const expectedResult = [
      '<div>',
      '<p>',
      'Hello',
      '<b>',
      'world',
      '</b>',
      '!',
      '</p>',
      '<span>',
      'hello word2',
      '</span>',
      '</div>',
    ];

    expect(spliteInTags(htmlString)).toEqual(expectedResult);
  });

  it('should ignore whitespace around tags', () => {
    const htmlString = '  <div>  \n\t<p>Text</p>  </div>  ';
    const expectedResult = ['<div>', '<p>', 'Text', '</p>', '</div>'];

    expect(spliteInTags(htmlString)).toEqual(expectedResult);
  });

  it('should handle empty tags', () => {
    const htmlString = '<div></div><br /><hr />';
    const expectedResult = ['<div>', '</div>', '<br />', '<hr />'];

    expect(spliteInTags(htmlString)).toEqual(expectedResult);
  });

  it('should handle tags with forward slashes in attributes', () => {
    const htmlString = '<img src="/images/logo.png" alt="Logo" />';
    const expectedResult = ['<img src="/images/logo.png" alt="Logo" />'];

    expect(spliteInTags(htmlString)).toEqual(expectedResult);
  });

  it('should handle CDATA sections', () => {
    const htmlString = '<div><![CDATA[This is CDATA content]]></div>';
    const expectedResult = [
      '<div>',
      '<![CDATA[This is CDATA content]]>',
      '</div>',
    ];

    expect(spliteInTags(htmlString)).toEqual(expectedResult);
  });

  it('should return an empty array for an empty string', () => {
    expect(spliteInTags('')).toEqual([]);
  });

  it('return the string for a string', () => {
    expect(spliteInTags('This is just plain text')).toEqual([
      'This is just plain text',
    ]);
  });

  it('should split angular tags', () => {
    const htmlString = '<button (click)="increment()"> Increment </button>';
    const expectedResult = [
      '<button (click)="increment()">',
      ' Increment ',
      '</button>',
    ];

    expect(spliteInTags(htmlString)).toEqual(expectedResult);
  });
});
