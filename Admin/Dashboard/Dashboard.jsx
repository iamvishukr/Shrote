import React from 'react'
import FiltersSidebar from './FiltersSidebar'
import Header from './Header'
import RightSidebar from './RightSideBar'
import Scholarship from './ScholarshipList' 
import SearchBar from './SearchBar' 

const Dashboard = () => {
  return (
    <>
        <Header />
        <RightSidebar />
        <FiltersSidebar />
        <Scholarship />
        <SearchBar />
    </>
  )
}

export default Dashboard