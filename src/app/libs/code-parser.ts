import { Link } from '../components-draw/components-draw.inferface';

interface TagType {
  element: string;
  isClosingTag: boolean;
}

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

  static getElementType(content: string): TagType {
    content = content.trim();
    const openingTagMatch = content.match(/<([a-z][a-z0-9]*)\b[^>]*>/i);
    const closingTagMatch = content.match(/<\/([a-z][a-z0-9]*)\b[^>]*>/i);
    if (openingTagMatch) {
      return { element: openingTagMatch[1].toLowerCase(), isClosingTag: false };
    } else if (closingTagMatch) {
      return { element: closingTagMatch[1].toLowerCase(), isClosingTag: true };
    } else if (content === '') {
      return { element: 'space', isClosingTag: false };
    } else {
      return { element: 'text', isClosingTag: false };
    }
  }

  static generateId(line: string): string {
    const elementInfo = this.getElementType(line); // Devuelve un objeto

    const tagName = elementInfo.element; // Extrae el nombre del elemento

    const counterKey = elementInfo.isClosingTag ? `${tagName}-closed` : tagName;

    if (!this.tagCounters[counterKey]) {
      this.tagCounters[counterKey] = 1;
    } else {
      this.tagCounters[counterKey]++;
    }

    return `${tagName}-${elementInfo.isClosingTag ? 'closed-' : ''}${
      this.tagCounters[counterKey]
    }`;
  }

  static getTagFromId(id: string) {
    return id.split('-')[0];
  }

  static isSpaceElement(id: string) {
    return /^space-\d+$/.test(id);
  }
}

export function generateLinks(htmlCode: string): Link[] {
  const links: Link[] = [];
  const tagStack: string[] = [];

  const tags = spliteInTags(htmlCode);

  for (const tag of tags) {
    if (!isTag(tag)) {
      continue; // Ignorar elementos que no son etiquetas
    }

    const tagId = HtmlIdGeneratorService.generateId(tag);
    const tagName = HtmlIdGeneratorService.getTagFromId(tagId);
    const isClosingTag =
      HtmlIdGeneratorService.getElementType(tag).isClosingTag;
    const isSpaceElement = HtmlIdGeneratorService.isSpaceElement(tagId);

    if (!isClosingTag && !isSpaceElement) {
      // Etiqueta de apertura (y no es espacio)
      tagStack.push(tagId);

      if (tagStack.length > 1) {
        // Si no es la etiqueta raíz
        const parentTagId = tagStack[tagStack.length - 2];
        links.push({ source: parentTagId, target: tagId });
      }
    } else if (isClosingTag && !isSpaceElement) {
      // Etiqueta de cierre (y no es espacio)
      tagStack.pop();
    }
  }

  return links;
}
