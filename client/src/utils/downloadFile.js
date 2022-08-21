const downloadFile = (content, extension, filename = "code") => {
  var a = document.createElement("a");
  a.href = window.URL.createObjectURL(
    new Blob([content], { type: `text/plain` })
  );
  a.download = `${filename}.${extension.toLowerCase()}`;
  a.click();
};

export default downloadFile;
