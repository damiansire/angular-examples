import { number } from 'echarts';
import { Link, NodeTree } from '../components-draw/components-draw.inferface';

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

export class HtmlHelper {
  static getTagFromId(id: string) {
    return id.split('-')[0];
  }

  static isSpaceElement(id: string) {
    return /^space-\d+$/.test(id);
  }

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
}

export class HtmlIdGeneratorService {
  private tagCounters: { [tagName: string]: number } = {};

  generateId(line: string): string {
    const elementInfo = HtmlHelper.getElementType(line); // Devuelve un objeto

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
}

export function generateLinks(htmlCode: string): Link[] {
  const links: Link[] = [];
  const tagStack: string[] = [];
  const htmlIdGenerator = new HtmlIdGeneratorService();

  const tags = spliteInTags(htmlCode);

  for (const tag of tags) {
    if (!isTag(tag)) {
      continue; // Ignorar elementos que no son etiquetas
    }

    const tagId = htmlIdGenerator.generateId(tag);
    const tagName = HtmlHelper.getTagFromId(tagId);
    const isClosingTag = HtmlHelper.getElementType(tag).isClosingTag;
    const isSpaceElement = HtmlHelper.isSpaceElement(tagId);

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

export function generateNodes(htmlCode: string): NodeTree[] {
  const nodes: NodeTree[] = [];
  const tagStack: TagType[] = [];
  const htmlIdGenerator = new HtmlIdGeneratorService();

  const tags = spliteInTags(htmlCode);

  let x = 550;
  let y = 100;
  const xOffset = 150;
  const yOffset = 100;
  const elementForLevel: number[] = [];

  for (const tag of tags) {
    if (!isTag(tag)) {
      //Falta contemplar el caso de texto
      continue; // Ignorar elementos que no son etiquetas
    }
    const currentTagType: TagType = HtmlHelper.getElementType(tag);
    const tagId = htmlIdGenerator.generateId(tag);
    //Si es un tag de abierto, lo agrego a la pila
    if (currentTagType.isClosingTag === false) {
      tagStack.push(currentTagType);
      const node = {
        name: tagId,
        x: 0,
        y: y + tagStack.length * yOffset,
        id: tagId,
        level: tagStack.length,
      };
      nodes.push(node);
    } else {
      //Si es un tag de cerrado, verifico en la pila y el ultimo y lo saco
      if (tagStack.at(-1)?.element === currentTagType.element) {
        tagStack.pop();
      }
    }
  }
  for (const node of nodes) {
    elementForLevel[node.level] = (elementForLevel[node.level] ?? 0) + 1;
    node.x = x + xOffset * elementForLevel[node.level];
  }
  return nodes;
}
