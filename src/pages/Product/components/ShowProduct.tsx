
const ShowProduct = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center">
  
      <div className="flex md:flex-row flex-col justify-center items-center md:w-full md:gap-0 gap-20 md:my-12 mt-12 ">
          <div className="flex-col justify-center items-start md:gap-9 gap-4 flex md:w-7/12 w-9/12">
              <img src="/images/SP1.png" alt="" className="w-lg" />
              <p className="text-left w-12/12  md:text-6xl text-4xl font-glass-antiqua">The Glenlivet 12</p>
              <p className=" font-glass-antiqua">The whisky comes in at an approachable 40% ABV and is matured in both European and American oak casks (not particularly telling). The Glenlivet 12-Year is the epitome of an acceptable, entry-level Speyside single malt scotch. Like many of its peers, this makes it easier to enjoy from a casual, entry-level standpoint.</p>
          </div>
      </div>
          
      <div className="flex md:flex-row flex-col justify-center items-center w-full p-10 md:gap-0 gap-20">
          <div className="flex-col justify-start items-start md:gap-9 gap-4 flex md:w-7/12">
              <img src="/images/SP2.png" alt="" className="w-lg" />
              <p className="text-left w-12/12  md:text-6xl text-4xl font-glass-antiqua">The Glenlivet 15</p>
              <p className="font-glass-antiqua">Whisky that has been aged for 15 years holds a special place in the world of distilled spirits, serving as a benchmark for maturity and complexity. Whisky that has been aged for 15 years holds a special place in the world of distilled spirits, serving as a benchmark for maturity and complexity.</p>
          </div>
      </div>
               
    </div>
  )
}

export default ShowProduct
