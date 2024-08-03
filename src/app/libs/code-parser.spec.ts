import { isTag } from './code-parser'; // Ajusta la ruta si es necesario

describe('isTag', () => {
  // Valid Test Cases
  it('should identify valid HTML tags', () => {
    expect(isTag('<h1>')).withContext('Failed for opening h1 tag').toBeTrue();
    expect(isTag('</h1>')).withContext('Failed for closing h1 tag').toBeTrue();
    expect(isTag('<div>')).withContext('Failed for opening div tag').toBeTrue();
    expect(isTag('<span>'))
      .withContext('Failed for opening span tag')
      .toBeTrue();
    expect(isTag('</span>'))
      .withContext('Failed for closing span tag')
      .toBeTrue();
    expect(isTag('<img />'))
      .withContext('Failed for self-closing img tag')
      .toBeTrue();
    expect(isTag('<input>')).withContext('Failed for input tag').toBeTrue();
    expect(isTag('<my-custom-element>'))
      .withContext('Failed for custom element')
      .toBeTrue();
    expect(isTag('<my-element-with-dash>'))
      .withContext('Failed for element with dash')
      .toBeTrue();
    expect(isTag('<div >'))
      .withContext('Failed for tag with space before closing bracket')
      .toBeTrue();
    expect(isTag('</div  >'))
      .withContext('Failed for closing tag with extra spaces')
      .toBeTrue();
  });

  // Invalid Test Cases
  it('should identify invalid HTML tags', () => {
    expect(isTag('<1h1>'))
      .withContext('Failed for tag starting with number')
      .toBeFalse();
    expect(isTag('< h1>'))
      .withContext('Failed for tag with leading space')
      .toBeFalse();
    expect(isTag('<>')).withContext('Failed for empty tag').toBeFalse();
    expect(isTag('<div'))
      .withContext('Failed for unclosed div tag')
      .toBeFalse();
    expect(isTag('div>'))
      .withContext('Failed for tag without opening bracket')
      .toBeFalse();
    expect(isTag('</div'))
      .withContext('Failed for closing tag without opening')
      .toBeFalse();
    expect(isTag('<di$v>'))
      .withContext('Failed for tag with invalid characters')
      .toBeFalse();
    expect(isTag('</di$v>'))
      .withContext('Failed for closing tag with invalid characters')
      .toBeFalse();
  });

  it('should handle tags with attributes', () => {
    expect(isTag('<div id="myDiv">'))
      .withContext('Failed for div with id attribute')
      .toBeTrue();
    expect(isTag('<img src="image.jpg" alt="Image">'))
      .withContext('Failed for img with src and alt attributes')
      .toBeTrue();
    expect(isTag('<custom-element data-info="value">'))
      .withContext('Failed for custom element with data attribute')
      .toBeTrue();
    expect(isTag('<button class="btn btn-primary" disabled>'))
      .withContext(
        'Failed for button with multiple attributes and text content'
      )
      .toBeTrue();
  });

  it('should be case-insensitive', () => {
    expect(isTag('<DIV>'))
      .withContext('Failed for uppercase opening DIV tag')
      .toBeTrue();
    expect(isTag('</DIV>'))
      .withContext('Failed for uppercase closing DIV tag')
      .toBeTrue();
  });

  it('should handle empty or null strings', () => {
    expect(isTag('')).withContext('Failed for empty string').toBeFalse();
  });
});
