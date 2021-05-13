function addTrailingSlash(link) {
  return link.endsWith("/") ? link : `${link}/`;
}

export { addTrailingSlash };