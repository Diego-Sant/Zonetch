"use client";

import PreviewModal from '@/components/previewModal'
import { useEffect, useState } from 'react';

const ModalProvider = () => {
    const [isMoutend, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMoutend) {
        return null;
    }

  return (
    <>
        <PreviewModal />
    </>
  )
}

export default ModalProvider