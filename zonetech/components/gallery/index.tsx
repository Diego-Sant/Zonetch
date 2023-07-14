"use client";

import {Image as ImageType} from "@/types";
import { Tab } from "@headlessui/react";
import GalleryTab from "./galleryTab";
import Image from "next/image";

interface GalleryProps {
    images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
        <div className="mx-auto mt-6 w-[300px] sm:w-[400px] max-w-2xl sm:block lg:max-w-none">
            <Tab.List className="grid grid-cols-4 gap-6">
                {images.map((image) => (
                    <GalleryTab key={image.id} image={image} />
                ))}
            </Tab.List>
        </div>
        <Tab.Panels className="w-full">
            {images.map((image) => (
                <Tab.Panel key={image.id} className="flex justify-center items-center">
                        <div className="aspect-square relative w-[250px] rounded-lg overflow-hidden">
                            <Image fill src={image.url} alt="" className="object-cover object-center" />
                        </div>
                </Tab.Panel>
            ))}
        </Tab.Panels>
    </Tab.Group>
  )
}

export default Gallery