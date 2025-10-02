
'use server';
/**
 * @fileOverview A flow for suggesting remediation actions for heavy metal pollution.
 * 
 * - suggestRemediation - A function that handles the suggestion process.
 * - SuggestRemediationInput - The input type for the suggestion function.
 * - SuggestRemediationOutput - The return type for the suggestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestRemediationInputSchema = z.object({
  cadmium: z.number().nullable().describe('The concentration of Cadmium (Cd) in mg/L.'),
  lead: z.number().nullable().describe('The concentration of Lead (Pb) in mg/L.'),
  copper: z.number().nullable().describe('The concentration of Copper (Cu) in mg/L.'),
  hmpi: z.number().describe('The calculated Heavy Metal Pollution Index (HMPI) value.'),
});
export type SuggestRemediationInput = z.infer<typeof SuggestRemediationInputSchema>;

const SuggestRemediationOutputSchema = z.object({
  potentialSources: z.array(z.string()).describe('A list of potential sources for the detected heavy metal contamination.'),
  remediationTechniques: z.array(z.object({
    name: z.string().describe('The name of the remediation technique.'),
    description: z.string().describe('A brief description of how the technique works.'),
  })).describe('A list of suggested techniques to treat the water contamination.'),
  recommendations: z.array(z.string()).describe('A list of general recommendations or next steps to take.'),
}).describe('The suggested remediation advice for the given water quality analysis.');
export type SuggestRemediationOutput = z.infer<typeof SuggestRemediationOutputSchema>;


export async function suggestRemediation(
  input: SuggestRemediationInput
): Promise<SuggestRemediationOutput> {
  return suggestRemediationFlow(input);
}


const prompt = ai.definePrompt({
  name: 'suggestRemediationPrompt',
  input: {schema: SuggestRemediationInputSchema},
  output: {schema: SuggestRemediationOutputSchema},
  prompt: `You are an expert environmental scientist specializing in groundwater contamination and remediation.

Your task is to provide actionable advice based on the following heavy metal concentrations and the resulting HMPI value. The user is not an expert, so explain concepts clearly and concisely.

Detected Concentrations:
- Cadmium (Cd): {{{cadmium}}} mg/L
- Lead (Pb): {{{lead}}} mg/L
- Copper (Cu): {{{copper}}} mg/L

Calculated HMPI Value: {{{hmpi}}}

Based on this data, provide the following:
1.  **Potential Sources**: Identify the most likely sources of this specific combination of heavy metal pollution.
2.  **Remediation Techniques**: Suggest 2-3 effective water treatment technologies for removing these specific metals. For each technique, provide a simple, one-sentence description of how it works.
3.  **Recommendations**: List a few clear, actionable next steps the user should consider (e.g., contacting local authorities, further testing).`,
});

const suggestRemediationFlow = ai.defineFlow(
  {
    name: 'suggestRemediationFlow',
    inputSchema: SuggestRemediationInputSchema,
    outputSchema: SuggestRemediationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
