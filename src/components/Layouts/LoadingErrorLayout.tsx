import { ApolloError } from '@apollo/client'
import React, { ReactNode } from 'react'
import LoadingCustom from '../UI/Loading/Loading'

interface InterfaceLoadingError {
    loading: boolean
    errors: [ApolloError | undefined]
    children: ReactNode
}

const LoadingErrorLayout = ({ loading, errors, children }: InterfaceLoadingError) => {
    if (loading) {
        return (
            <div className='h-screen relative'>
                <LoadingCustom />
            </div>
        )
    }
    if (errors && errors?.length > 0) {
        return <div>LoadingErrorLayout</div>
    }
    return children
}

export default LoadingErrorLayout