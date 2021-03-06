function colorStyleForPlayer(player) {
    // Keep this in sync with index.less
    var numColors = 10
    var offset = 8
    var mult = 3
    var colorNum = Math.abs(hashString(player) * mult + offset) % (numColors) + 1
    return `namelet-${colorNum}`
}

export function getColorFromString(player) {
    // colors from http://flatuicolors.com/
    // var colors = ["#c0392b", "#27ae60", "#3498db", "#9b59b6", "#f1c40f", "#e67e22", "#e74c3c"];
    var colors = ["#f0a975", "#f0dd75", "#cef075", "#9af075", "#75f085", "#75f0b9", "#75f0ed", "#75bff0", "#758bf0", "#9475f0"];

  const h = hashString(player);
  const L = colors.length
  const i = ((h % L) + 2 * L) % L
  return colors[i];
}

function hashString(str) {
    var hash = 0, i, chr, len;
    if (str.length == 0) return hash;
    for (i = 0, len = str.length; i < len; i++) {
        chr   = str.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0;
    }
    return hash;
}
