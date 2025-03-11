const ShowProduct = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center w-full p-10 md:gap-0 gap-20">
        <div className="flex-col justify-center items-center md:gap-9 gap-4 flex md:w-1/2">
            <img src="/images/SP1.png" alt="" className="w-lg" />
            <p className="text-left md:w-9/12 w-12/12  md:text-6xl text-4xl font-glass-antiqua">The Glenlivet 12</p>
            <p className="md:w-9/12 font-glass-antiqua">The whisky comes in at an approachable 40% ABV and is matured in both European and American oak casks (not particularly telling). The Glenlivet 12-Year is the epitome of an acceptable, entry-level Speyside single malt scotch. Like many of its peers, this makes it easier to enjoy from a casual, entry-level standpoint.</p>
        </div>
        <div className="flex-col justify-start items-start md:gap-9 gap-4 flex md:w-1/2">
            <img src="/images/SP2.png" alt="" className="w-lg" />
            <p className="text-left md:w-9/12 w-12/12  md:text-6xl text-4xl font-glass-antiqua">The Glenlivet 15</p>
            <p className="md:w-9/12 font-glass-antiqua">Whisky that has been aged for 15 years holds a special place in the world of distilled spirits, serving as a benchmark for maturity and complexity. Whisky that has been aged for 15 years holds a special place in the world of distilled spirits, serving as a benchmark for maturity and complexity.</p>
        </div>       
    </div>
  )
}

export default ShowProduct
