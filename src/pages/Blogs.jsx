import react from 'react'
import BlogCard from '../components/BlogCard'
import BlogCarousel from '../components/BlogCarousel'


const Blogs = () => {
    return (
        <div>
            <div className='mb-18 '>
                <p className='text-4xl font-bold text-center mb-8 mt-5 text-pink-500'>Trending</p>
                <div>

                    <BlogCarousel />
                </div>
                <div className='mt-10'>
                    <BlogCard />

                </div>

            </div>
        </div>
    )
}

export default Blogs