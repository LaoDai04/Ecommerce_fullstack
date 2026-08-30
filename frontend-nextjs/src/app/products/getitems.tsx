
import { useQuery } from "@tanstack/react-query";


export default function useGetItems() { //todo: move this into hook folder, seperate the api functions. app/api and app/hooks
const { data, isPending, isError, error } = useQuery({
    queryKey: ['items'],
    queryFn: async () => {
      const response = await fetch(`http://localhost:8080/items`);
      if (!response.ok) throw new Error('items not found');
      console.log(response);
      return response.json();
    },
    
  });
    return { data, isPending, isError, error };

} 
