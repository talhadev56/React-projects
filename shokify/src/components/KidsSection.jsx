import React from 'react'

const KidsSection = () => {
    let data = [

    {
        image : "https://i.pinimg.com/474x/f2/ae/54/f2ae54027a81d78239f4adcf36d45ba1.jpg",
        para : "Boys Jersey/Terry 2 Piece Suit-Jet Black",
        orgPrice :"Rs.2,895",
        disPrice : "Rs.2,571",
    },
    {
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6GPN0gkDsv2SazRumurAhzX7UczlIv8C20A&s",
        para : "Boys Cotton 2 Piece with Waskit white only",
        orgPrice :"Rs.2,000",
        disPrice : "Rs.1,599",
    },
    {
        image : "https://www.junaidjamshed.com/media/wysiwyg/KIDFESTIVE22FORMAL/J._Kids_Wedding_And_Formal_Collection3.jpg",
        para : "Boys Kurta 2 Piece || All colors available",
        orgPrice :"Rs.3,000",
        disPrice : "Rs.2,599",
    },
    {
        image : "https://hipkids.pk/cdn/shop/files/2_3_305e9f11-f651-4ad9-a0d2-95e7fd9d74c2.png?v=1749904974&width=600",
        para : "Boys Cotton Jersey H/S Character Regular",
        orgPrice :"Rs.2,500",
        disPrice : "Rs.1,999",
    },
     {
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRW9Wm6GcdZqcp5GdIO4Fc4Jp80w2DIRLvhQ&s",
        para : "Boys Cotton Jersey Suit-Jet Black",
        orgPrice :"Rs.3,500",
        disPrice : "Rs.3,999",
       
    },
    ]
  return (
    <>
    <section className="max-w-[1050] m-25 ">
                <div className='text-center mt-5 mb-5'>
                    <h2 className='text-xl'>Top quality</h2>
                    <h3 className='text-3xl font-mono  text-amber-400'>Kids Wears</h3>
                    <p className='mb-4'>This is the place where the  prestigious designs and richest collections availables</p>
                    <marquee behavior="" direction="" className="text-xl text-red-600">|| Limited Time offer on Kids Wears || Sale upto 30% off now! ||</marquee>
                </div>
        <div className='grid lg:grid-cols-5 sm:grid-cols-2  grid-cols-1 gap-4'>
                {
                    data.map(function(elem,idx){
                        return (
                            <>
                             <div className='bg-[#f3f4f6] p-3 mb-5 hover:bg-gray-200 shadow-lg' key={idx}>
                 <img src={elem.image} alt="img" className="w-[200px] h-[250px] object-cover mx-auto"/>
                  <h3 className='mt-4 text-center text-md-left'>{elem.para}</h3>
                <h2 className='text-xl mb-3 mt-3 text-center text-md-left'><del>{elem.orgPrice}</del>  <span className='text-red-500'>{elem.orgPrice}</span></h2>

               </div>
                            </>

                        )
                    })
                }
            </div>
    </section>
    </>
  )
}

export default KidsSection