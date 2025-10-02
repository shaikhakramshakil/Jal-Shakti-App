"use client";

import { sampleData } from '@/lib/data';

export function PastAssessments() {
  // Using first 3 samples for the list
  const assessments = sampleData.slice(0, 3).map((item, index) => ({
    id: item.id,
    name: `Assessment ${index + 1}`,
    location: item.location,
    value: item.hmpi.toFixed(1),
  }));

  return (
    <section>
      <h2 className="text-lg font-bold mb-3">Past Assessments</h2>
      <div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
            {assessments.map((assessment) => (
              <div key={assessment.id} className="flex items-center justify-between py-4">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{assessment.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{assessment.location}</p>
                </div>
                <p className="font-medium text-lg text-gray-900 dark:text-white">{assessment.value}</p>
              </div>
            ))}
      </div>
    </section>
  );
}
