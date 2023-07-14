import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
    data: BillboardType
};

const Billboard: React.FC<BillboardProps> = ({ data }) => {
    return (
        <div className="p-4 sm:p-6 lg:p-8 roundend-xl overflow-hidden">
            <div className="lg:flex lg:justify-center lg:items-center mb-2">
                <div className="rounded-xl md:rounded-3xl relative aspect-[2.3/1] lg:w-[600px] overflow-hidden bg-cover" style={{backgroundImage: `url(${data?.imageUrl})`}}>
                            <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                            </div>
                </div>
            </div>
            <div className="bg-[#09303c] h-12 md:h-12 flex items-center justify-center">
                <div className="font-bold text-white text-xl sm:text-2xl sm:max-w-xl max-w-xs">
                    {data.label}
                </div>
            </div>
        </div>   
    )
}

export default Billboard;