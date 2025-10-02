export interface GroundwaterSample {
  id: number;
  location: string;
  latitude: number;
  longitude: number;
  hmpi: number;
  quality: 'Low' | 'Medium' | 'High' | 'Very High';
}

function getQuality(hmpi: number): GroundwaterSample['quality'] {
  if (hmpi < 10) return 'Low';
  if (hmpi < 20) return 'Medium';
  if (hmpi < 30) return 'High';
  return 'Very High';
}

export const sampleData: GroundwaterSample[] = [
  { id: 1, location: 'Colaba Well', latitude: 18.9220, longitude: 72.8347, hmpi: 25.2, quality: getQuality(25.2) },
  { id: 2, location: 'Dadar Borehole', latitude: 19.0176, longitude: 72.8478, hmpi: 15.8, quality: getQuality(15.8) },
  { id: 3, location: 'Andheri Spring', latitude: 19.1197, longitude: 72.8464, hmpi: 32.1, quality: getQuality(32.1) },
  { id: 4, location: 'Thane Reservoir', latitude: 19.2183, longitude: 72.9781, hmpi: 35.5, quality: getQuality(35.5) },
  { id: 5, location: 'Powai Lake Aquifer', latitude: 19.1226, longitude: 72.9095, hmpi: 8.9, quality: getQuality(8.9) },
  { id: 6, location: 'Chembur Industrial Well', latitude: 19.0632, longitude: 72.9038, hmpi: 45.0, quality: getQuality(45.0) },
];
