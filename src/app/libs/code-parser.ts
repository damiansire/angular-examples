export function isTag(str: string) {
  const tagRegex = /^<\/?[a-z][\w-]*>$/i;
  return tagRegex.test(str);
}

export function spliteInTags(htmlString: string) {
  const regex = /(<\/?\w+>)/g;
  const result = htmlString.split(regex).filter(Boolean);
  return result;
}

export class HtmlIdGeneratorService {
  private static tagCounters: { [tagName: string]: number } = {};

  private static getElementType(content: string): string {
    content = content.trim();
    const openingTagMatch = content.match(/<([a-z][a-z0-9]*)\b[^>]*>/i);
    const closingTagMatch = content.match(/<\/([a-z][a-z0-9]*)\b[^>]*>/i);
    if (openingTagMatch) {
      return openingTagMatch[1].toLowerCase();
    } else if (closingTagMatch) {
      return closingTagMatch[1].toLowerCase();
    } else if (content === '') {
      return 'space';
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
    return `${tagName}-${this.tagCounters[tagName]}`;
  }

  static getTagFromId(id: string) {
    return id.split('-')[0];
  }

  static isSpaceElement(id: string) {
    return /^space-\d+$/.test(id);
  }
}
