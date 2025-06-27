import React from 'react'

export default function Skeleton() {
return (
    <>
    <div className="flex flex-col gap-4">
    <div className="w-[400] h-[20px] bg-slate-200  animate-pulse">
    </div>
    <div className="w-[70] h-[20px] bg-slate-200  animate-pulse">
    </div>
    <div className="w-[400] h-[20px] bg-slate-200  animate-pulse">
    </div>
    <div className="w-[400] h-[20px] bg-slate-200  animate-pulse">
    </div>
    <div className="w-[400] h-[20px] bg-slate-200  animate-pulse">
    </div>
    <div className="w-[70] h-[20px] bg-slate-200  animate-pulse">
    </div>
    <div className="w-[170] h-[20px] bg-slate-200  animate-pulse">
    </div>
    </div></>
)
}
