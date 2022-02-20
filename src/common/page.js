export function changePage (index, page) {
  const _start = (index - 1) * page.pageSize
  const _end = index * page.pageSize
  return page.data.slice(_start, _end)
}
