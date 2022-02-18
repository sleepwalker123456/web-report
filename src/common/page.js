export function changePage (index, data) {
  const _start = (index - 1) * this.pageSize
  const _end = index * this.pageSize
  return data.slice(_start, _end)
}
