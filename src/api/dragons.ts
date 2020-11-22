import { put, get} from './methods';

interface IGetAllDragonsResponse {
  id: string, 
  createdAt : string,
  name: string,
  type: string,
  histories : any[],
}

const DragonAPI =  {
  getAll: () => {
    const endpoint = 'dragon';
    return get<IGetAllDragonsResponse>(endpoint);
  },
};

export default DragonAPI