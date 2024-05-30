import { useEffect, useState } from 'react'

export const useHover = (ref) => {
    const [isHovering, setIsHovering] = useState(false)

    const onHover = () => setIsHovering(true)
    const offHover = () => setIsHovering(false)

    useEffect(() => {
        if(!ref.current) {
            return
        }
        const element = ref.current

        element.addEventListener('mouseenter', onHover)
        element.addEventListener('mousemove', onHover)
        element.addEventListener('mouseleave', offHover)

        return function () {
            element.removeEventListener('mouseenter', onHover)
            element.removeEventListener('mousemove', onHover)
            element.removeEventListener('mouseleave', offHover)
        }
    }, [])

    return isHovering
}
