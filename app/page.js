import React from 'react'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import ProductCard from '@/components/productCard/ProductCard'

const page = () => {
  return (
      <div>
          <ProductCard
              status="New"
              productName="T-shirt"
              discountedPrice={349}
              originalPrice={499}
              productImage="https://images.unsplash.com/photo-1682687219612-b12805df750d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
          />
      </div>
  );
}

export default page