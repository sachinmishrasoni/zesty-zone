import SectionBanner from '@/components/common/SectionBanner'
import dynamic from 'next/dynamic';
import React from 'react'

const LeafletMap = dynamic(() => import("@/components/ui/LeafletMap"), {
    ssr: false, // This ensures the component is only rendered on the client
});

const MapSection = () => {
    return (
        <SectionBanner
            backgroundImage="/images/restaurent.jpg"
            padding="py-16"
        >
            <div className="text-center mb-8 text-white">
                <h2 className="text-3xl font-semibold mb-0">Find on the Map</h2>
                <p className="text-yellow-600">You can find us on the map below</p>
            </div>
            <div className="h-[350px] bg-gray-100 rounded-lg">
                <LeafletMap height="350px" />
            </div>
        </SectionBanner>
    )
}

export default MapSection