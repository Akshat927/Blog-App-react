import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards';
import Pagination from './Pagination';

const BlogPage = () => {
  const [blogs,setBlogs]=useState([]);
  const [currentPage,setCurrentPage]=useState(1);
  const pageSize=12 //blog per page
  const [selectedCategory,setSelectedCategory]=useState(null);
  const[activeCategory,setActiveCategory]=useState(null)

  useEffect(()=>{
    async function fetchBlogs(){
      let url =`http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;

      if(selectedCategory){
        url +=`&category=${selectedCategory}`;
      }
      const response = await fetch(url);
      const data=await response.json();
      setBlogs(data);

    }
    fetchBlogs()
  },[currentPage,pageSize,selectedCategory])

  //page changing control

  const handlePageChange=(pageNumber)=>{
    setCurrentPage(pageNumber);
  }
  const handleCategoryChange=(Category)=>{
    setCurrentPage(Category);
    setCurrentPage(1);
    setActiveCategory(Category);
  }

  
  return (
    <div>
      {/* category section  */}
      <div>Page Category</div>

      
      {/* blog */}
      <div>
        <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize}/>
      </div>

      {/* pagination */}
      <div><Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize}/></div>
    </div>
  )
}

export default BlogPage