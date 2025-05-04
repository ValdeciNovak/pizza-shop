import React from 'react'
import { Skeleton } from '../../../components/ui/skeleton'

export function MetricCardSkeleton() {
  return (
    <>
      <Skeleton className="w-36 h-7 mt-1" />
      <Skeleton className="w-53 h-4" />
    </>
  )
}
