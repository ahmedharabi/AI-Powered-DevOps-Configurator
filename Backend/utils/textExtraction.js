const escapeRegex = (str) =>
    str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

const extractSection = (text, startTag, endTag) => {
    const escapedStart = escapeRegex(startTag);
    const escapedEnd = escapeRegex(endTag);
    const regex = new RegExp(`${escapedStart}([\\s\\S]*?)${escapedEnd}`, 'm');
    const match = text.match(regex);
    return match ? match[1].trim() : null;
};

export default extractSection;

