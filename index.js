function transform(str, x, y) {
  var points = str.split(/(?=[MLZ])|(?<=[MLZ])| /ig).filter(word => word != '')
  var isX = true
  for (var i in points) {
    var word = points[i]
    if (!/^[MLZ]$/i.test(word)) {
      points[i] = Number(word) + (isX?x:y)
      isX = !isX
    }
  }
  return points.join(' ')
}