import { useQuery } from '@tanstack/react-query';

const mockData = [
  { date: '2025-05-10', production: 120 },
  { date: '2025-05-11', production: 150 },
  { date: '2025-05-12', production: 100 },
  { date: '2025-05-13', production: 170 },
  { date: '2025-05-14', production: 130 },
];

const tableData = [
  { machine: 'Steel Cutter', status: 'Running', output: 250, updatedAt: '2025-05-14 10:00' },
  { machine: 'Welding ', status: 'Stopped', output: 100, updatedAt: '2025-05-14 09:50' },
  { machine: 'Spinning wheels', status: 'Idle', output: 0, updatedAt: '2025-05-14 09:40' },
];
export const useProductionData = () => {
    return useQuery({
        queryKey: ['productionData'],
        queryFn: async () => {
          await new Promise(resolve => setTimeout(resolve, 1000));
          return { chartData: mockData, tableData };
        }
      });
      
};
