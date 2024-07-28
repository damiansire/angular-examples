export function isTag(str: string) {
  const tagRegex = /^<\/?[a-z][\w-]*>$/i; // Expresión regular para etiquetas básicas
  return tagRegex.test(str);
}

export function spliteInTags(htmlString: string) {
  const regex = /(<\/?\w+>)/g; // Expresión regular para encontrar etiquetas
  const result = htmlString.split(regex).filter(Boolean); // Dividir y eliminar elementos vacíos
  return result;
}

export class HtmlIdGeneratorService {
  private static tagCounters: { [tagName: string]: number } = {};

  private static getElementType(content: string): string {
    const isHtmlTag = content.startsWith('<') && content.endsWith('>');
    if (isHtmlTag) {
      const match = content.match(/<\/?([a-z]+)/i);
      return match ? match[1].toLowerCase() : 'unknown';
    } else {
      return 'text';
    }
  }
  static generateId(line: string): string {
    const lineClean = line.toLowerCase().trim();
    const tagName = this.getElementType(lineClean);

    if (this.tagCounters[tagName]) {
      this.tagCounters[tagName]++;
    } else {
      this.tagCounters[tagName] = 1;
    }
    debugger;
    return `${tagName}-${this.tagCounters[tagName]}`;
  }
}
