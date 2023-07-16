import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import Pagination from '@mui/material/Pagination'
import { fetchMovies, fetchSearch } from '../../../../api/api'
import style from './Pagination.module.css'

function Paginaton() {
  const dispatch = useDispatch()

  const { totalResults, pageSize, currentPage, searchQuery } = useSelector(
    ({ movies }) => movies
  )

  const [pageNumber, setPageNumber] = useState(currentPage)
  let pagesCount = Math.ceil(totalResults / pageSize)
  const handleChange = (event, value) => {
    setPageNumber(value)
    if (searchQuery) {
      return dispatch(fetchSearch({ value: searchQuery, pageNumber: value }))
    }
    dispatch(fetchMovies(value))

    window.scrollTo(0, 0)
  }
  return (
    <Pagination
      className={style.pagination}
      page={pageNumber}
      count={pagesCount}
      onChange={handleChange}
      shape="rounded"
    />
  )
}

export { Paginaton }
