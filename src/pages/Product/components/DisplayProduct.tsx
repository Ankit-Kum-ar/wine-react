interface DisplayProductProps {
  imgSrc_1: string;
  imgSrc_2: string;
  title_1: string;
  title_2: string;
  desc_a_1: string;
  desc_a_2: string;
  desc_b_1: string;
  desc_b_2: string;
}

const DisplayProduct: React.FC<DisplayProductProps> = ({ imgSrc_1, imgSrc_2, title_1, title_2, desc_a_1, desc_a_2, desc_b_1, desc_b_2 }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#FCF5EA] md:p-14 py-9 px-5 w-full md:gap-0 gap-12">
      <div className="flex md:flex-row flex-col justify-center items-center gap-9">
        <img src={imgSrc_1} alt="" className="md:w-1/2" />
        <div className="flex flex-col justify-start items-start gap-9 md:w-1/2">
            <p className="md:text-6xl text-lg font-glass-antiqua" >{title_1}</p>
            <p className="md:text-lg text-base font-glass-anitqua">{desc_a_1}</p>
            <p className="md:text-lg text-base font-glass-anitqua">{desc_a_2}</p>
        </div>
      </div>
      <div className="md:flex md:flex-row hidden justify-center items-center gap-9">
        <div className="flex flex-col justify-start items-start gap-9 md:w-1/2">
            <p className="md:text-6xl text-lg font-glass-antiqua" >{title_2}</p>
            <p className="md:text-lg text-base font-glass-anitqua">{desc_b_1}</p>
            <p className="md:text-lg text-base font-glass-anitqua">{desc_b_2}</p>
        </div>
        <img src={imgSrc_2} alt="" className="md:w-1/2" />
      </div>
      <div className="flex md:hidden flex-col justify-center items-center gap-9">
        <img src={imgSrc_2} alt="" className="md:w-1/2" />
        <div className="flex flex-col justify-start items-start gap-9 md:w-1/2">
            <p className="md:text-6xl text-lg font-glass-antiqua" >{title_2}</p>
            <p className="md:text-lg text-base font-glass-anitqua">{desc_b_1}</p>
            <p className="md:text-lg text-base font-glass-anitqua">{desc_b_2}</p>
        </div>
      </div>
    </div>
  )
}

export default DisplayProduct;
