import copyToClipboard from "./copyToClipboard";
import downloadFile from "./downloadFile";
import rawCodeFile from "./rawCodeFile";

const nameInitialsGenerator = (name) => {
  let rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");

  let initials = [...name.matchAll(rgx)] || [];

  initials = ((initials.shift()?.[1] || "") + (initials.pop()?.[1] || "")).toUpperCase();

  return initials;
};

export { copyToClipboard, downloadFile, nameInitialsGenerator, rawCodeFile };
