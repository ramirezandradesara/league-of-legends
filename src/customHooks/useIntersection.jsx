import React, { useEffect, useRef, useState } from 'react'

function useIntersection(opciones = {}) {

    const elementoRef = useRef<HTMLLIElement>(undefined)
    const [isIntersecting, setIsIntersecting] = useState(false)

    useEffect(() => {
        const elemento = elementoRef.current
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                setIsIntersecting(entry.isIntersecting)
            })
        }, opciones);

        if (elemento) {
            observer.observe(elemento)
        }

        return () => {
            if (elemento) {
                observer.unobserve(elemento)
            }
        }

    }, [opciones, elementoRef])

    return [elementoRef, isIntersecting]
}

export default useIntersection