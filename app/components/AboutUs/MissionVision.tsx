import Image from "next/image";

export default function MissionVision() {
    return (
        <section className="w-full bg-white py-20">
          <div className="flex m-w-222 mx-auto justify-center items-center h-167">
             {/* Left */}
            <div className="w-[30%] relative">

                <div className="overflow-hidden rounded-3xl">
                            <Image
                                src="/about-us/missionvission.png"
                                alt="Warehouse packaging boxes"
                                width={600}
                                height={400}
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Center Icon */}
                        <div className="absolute bottom-50 -right-11.25 -translate-y-1/2 z-10">
                            <div className="flex size-40 items-center justify-center">
                                <Image
                                src="/about-us/arrow.png"
                                alt="Warehouse packaging boxes"
                                width={400}
                                height={400}
                                className="object-cover"
                                priority
                            />
                                
                            </div>
                        </div>

            </div>
            {/* Right */}
            
            <div className="w-[40%] flex flex-col gap-10">
{/* Mission Card */}
                        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm pl-35">
                            <h3 className="mb-2 text-lg font-semibold text-black">
                                Mission
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-700">
                                To deliver innovative, durable, and eco-friendly packaging
                                solutions that safeguard products, streamline operations,
                                and create value for industries worldwide.
                            </p>
                        </div>

                        {/* Vision Card (Overlapping) */}
                        <div className="pl-20 relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm mr-20">

                            <h3 className="mb-2 text-lg font-semibold text-black">
                                Vision
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-700">
                                To become a global leader in sustainable packaging, setting
                                benchmarks in quality, customization, and environmental
                                responsibility for industrial packaging solutions.
                            </p>
                        </div>

                        {/* Goals Card */}
                        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm pl-35">
                            <h3 className="mb-2 text-lg font-semibold text-black">
                                Goals
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-700">
                                Continuously develop advanced packaging designs to meet
                                evolving industry needs.
                            </p>
                        </div>
            </div>
           










            </div>
                
            
        </section>
    );
}
