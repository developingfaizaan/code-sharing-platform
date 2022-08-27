const rawCodeFile = (code, title = "Raw Code") => {
  const newTab = window.open();

  newTab?.document.write(`<!DOCTYPE html><head><title>${title}</title></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;"><xmp>${code}</xmp></pre></body></html>`);

  newTab?.document.close();
};

export default rawCodeFile;
