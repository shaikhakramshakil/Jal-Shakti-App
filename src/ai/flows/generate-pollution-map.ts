'use server';

/**
 * @fileOverview Flow for generating a color-scaled pollution map based on HMPI data.
 *
 * - generatePollutionMap - A function that generates the pollution map.
 * - GeneratePollutionMapInput - The input type for the generatePollutionMap function.
 * - GeneratePollutionMapOutput - The return type for the generatePollutionMap function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePollutionMapInputSchema = z.object({
  hmpiData: z
    .string()
    .describe(
      'A stringified JSON array of objects, where each object contains geo-coordinates (latitude and longitude) and the corresponding HMPI value.'
    ),
  colorScale: z
    .string()
    .default('viridis')
    .describe(
      'The color scale to use for the pollution map.  Some example scales are "viridis", "plasma", "inferno", "magma", "cividis".'
    ),
});
export type GeneratePollutionMapInput = z.infer<typeof GeneratePollutionMapInputSchema>;

const GeneratePollutionMapOutputSchema = z.object({
  mapImage: z
    .string()
    .describe(
      'A data URI containing a base64-encoded image of the color-scaled pollution map.'
    ),
});
export type GeneratePollutionMapOutput = z.infer<typeof GeneratePollutionMapOutputSchema>;

export async function generatePollutionMap(
  input: GeneratePollutionMapInput
): Promise<GeneratePollutionMapOutput> {
  return generatePollutionMapFlow(input);
}

const generatePollutionMapPrompt = ai.definePrompt({
  name: 'generatePollutionMapPrompt',
  input: {schema: GeneratePollutionMapInputSchema},
  output: {schema: GeneratePollutionMapOutputSchema},
  prompt: `You are an expert cartographer specializing in creating pollution maps.

You will receive HMPI (Heavy Metal Pollution Index) data, which includes geo-coordinates (latitude and longitude) and corresponding HMPI values. You will use this data to generate a color-scaled pollution map, where the color intensity represents the level of pollution.

Use the following HMPI data to generate the pollution map:

{{hmpiData}}

Use the {{{colorScale}}} color scale.

Output a data URI containing a base64-encoded image of the color-scaled pollution map. Do not include any additional text or explanation.

Ensure the map is visually clear and effectively communicates the geographical distribution of heavy metal pollution.`,
});

const generatePollutionMapFlow = ai.defineFlow(
  {
    name: 'generatePollutionMapFlow',
    inputSchema: GeneratePollutionMapInputSchema,
    outputSchema: GeneratePollutionMapOutputSchema,
  },
  async input => {
    const {output} = await generatePollutionMapPrompt(input);
    return output!;
  }
);
