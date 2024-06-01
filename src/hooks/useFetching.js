import { useState } from "react";

export function useFetching(callback) {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetching = async () => {
        try {
            setIsLoading(true)
            await callback()
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    return [fetching, isLoading, error]
}