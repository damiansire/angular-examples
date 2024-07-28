export function isTag(str: string) {
  const tagRegex = /^<\/?[a-z][\w-]*>$/i; // Expresión regular para etiquetas básicas
  return tagRegex.test(str);
}

export function spliteInTags(htmlString: string) {
  const regex = /(<\/?\w+>)/g; // Expresión regular para encontrar etiquetas
  const result = htmlString.split(regex).filter(Boolean); // Dividir y eliminar elementos vacíos
  return result;
}
