
'use server';
/**
 * @fileOverview A flow for extracting Heavy Metal Pollution Index (HMPI) data from a lab report image using OCR.
 * 
 * - extractHMPIDataFromReport - A function that handles the data extraction process.
 * - ExtractHMPIDataFromReportInput - The input type for the extraction function.
 * - ExtractHMPIDataFromReportOutput - The return type for the extraction function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExtractHMPIDataFromReportInputSchema = z.object({
  reportImage: z
    .string()
    .describe(
      "A lab report image as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type ExtractHMPIDataFromReportInput = z.infer<typeof ExtractHMPIDataFromReportInputSchema>;

const ExtractHMPIDataFromReportOutputSchema = z.object({
  cadmium: z.number().nullable().describe('The concentration of Cadmium (Cd) in mg/L.'),
  lead: z.number().nullable().describe('The concentration of Lead (Pb) in mg/L.'),
  copper: z.number().nullable().describe('The concentration of Copper (Cu) in mg/L.'),
}).describe('The extracted concentration values for heavy metals from the lab report.');
export type ExtractHMPIDataFromReportOutput = z.infer<typeof ExtractHMPIDataFromReportOutputSchema>;


export async function extractHMPIDataFromReport(
  input: ExtractHMPIDataFromReportInput
): Promise<ExtractHMPIDataFromReportOutput> {
  return extractHMPIDataFromReportFlow(input);
}


const prompt = ai.definePrompt({
  name: 'extractHMPIDataPrompt',
  input: {schema: ExtractHMPIDataFromReportInputSchema},
  output: {schema: ExtractHMPIDataFromReportOutputSchema},
  prompt: `You are an OCR specialist. Your task is to analyze the provided lab report image and extract the concentration values for the following heavy metals: Cadmium, Lead, and Copper.

The values might be labeled with their chemical symbols (e.g., Cd, Pb, Cu). The units should be interpreted as mg/L.

If a value for a specific metal is not found, return null for that field.

Image to be analyzed:
{{media url=reportImage}}`,
});

const extractHMPIDataFromReportFlow = ai.defineFlow(
  {
    name: 'extractHMPIDataFromReportFlow',
    inputSchema: ExtractHMPIDataFromReportInputSchema,
    outputSchema: ExtractHMPIDataFromReportOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

    