import axios from 'axios';

const getAllStages = () => axios.get<Array<any>>('/all')

const StageService = {
    getAllStages,
}

export default StageService;