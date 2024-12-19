
const ParameterTable = () => {
  return (
    <div className="mb-6 text-white">
        <div className="bg-[#151515] border-[1px] border-[#434343] rounded-3xl px-6 py-5 my-3 shadow-lg">
           {/* Table Header */}
           <div className="grid grid-cols-[8%_70%_20%] gap-4 font-semibold text-[#A3A3A3] bg-[#222222] rounded-xl px-4 py-3">
    <p className="text-left">Number</p>
    <p className="text-left">Parameter</p>
  <p className="text-right">Current Value</p>
</div>

<div className="mt-4 space-y-3">
<div className="grid grid-cols-[8%_70%_20%] gap-4 font-normal text-white/80 px-4 py-1">
    <p className="text-left">1</p>
    <p className="text-left">The maintenance time interval</p>
  <p className="text-right">Committee Proposals</p>
</div>

<div className="grid grid-cols-[8%_70%_20%] gap-4 font-normal text-white/80 px-4 py-1">
    <p className="text-left">2</p>
    <p className="text-left">The cost of applying for SR account</p>
  <p className="text-right">Committee Proposals</p>
</div>


<div className="grid grid-cols-[8%_70%_20%] gap-4 font-normal text-white/80 px-4 py-1">
    <p className="text-left">3</p>
    <div className="text-left">When creating an account, if the creator’s account does not have enough bandwidth obtained through staking, then the value 
      corresponding to this parameter needs to be burned to pay for the bandw
  </div>
  <p className="text-right">Committee Proposals</p>
</div>

<div className="grid grid-cols-[8%_70%_20%] gap-4 font-normal text-white/80 px-4 py-1">
    <p className="text-left">4</p>
    <p className="text-left">The maintenance time interval</p>
  <p className="text-right">Committee Proposals</p>
</div>
  </div>

        </div>
    </div>
  )
}

export default ParameterTable