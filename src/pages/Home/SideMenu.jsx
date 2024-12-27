import React from 'react'

function SideMenu() {
  return (
    <div className='border-r me-8 pt-8 mt-[-40px] hidden lg:block'>
        <ul className='flex flex-col gap-4 font-semibold w-[200px]'>
            <li>Woman's Fashion</li>
            <li>Man's Fashion</li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby's & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
        </ul>
    </div>
  )
}

export default SideMenu