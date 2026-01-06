import { useQuery } from '@tanstack/react-query';
import { getSummaryAction } from '../actions/get-summary.action';




export const useHeroSummary = () => {
   return useQuery({
    queryKey: ['summary-information'],
    queryFn: getSummaryAction, // se manda la funcion como referencia
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}
