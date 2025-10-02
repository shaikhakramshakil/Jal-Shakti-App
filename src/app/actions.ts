
"use server";

import { generatePollutionMap, type GeneratePollutionMapInput } from "@/ai/flows/generate-pollution-map";
import { extractHMPIDataFromReport, type ExtractHMPIDataFromReportOutput } from "@/ai/flows/extract-hmpi-from-report";
import { suggestRemediation, type SuggestRemediationInput, type SuggestRemediationOutput } from "@/ai/flows/suggest-remediation";
import { z } from "zod";

const MapActionInputSchema = z.object({
  hmpiData: z.string(),
});

export type MapActionState = {
  status: "success" | "error" | "idle";
  message: string;
  data: { mapImage: string } | null;
};

export async function generateMapAction(
  prevState: MapActionState,
  formData: FormData
): Promise<MapActionState> {
  const validatedFields = MapActionInputSchema.safeParse({
    hmpiData: formData.get("hmpiData"),
  });

  if (!validatedFields.success) {
    return {
      status: "error",
      message: "Invalid input provided.",
      data: null,
    };
  }

  try {
    const input: GeneratePollutionMapInput = {
      hmpiData: validatedFields.data.hmpiData,
      colorScale: 'viridis',
    };
    
    const result = await generatePollutionMap(input);

    if (!result || !result.mapImage) {
        throw new Error("AI failed to generate a map image. The response was empty.");
    }

    return {
      status: "success",
      message: "Map generated successfully.",
      data: result,
    };
  } catch (error) {
    console.error("Error in generateMapAction:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    return {
      status: "error",
      message: `Failed to generate map: ${errorMessage}`,
      data: null,
    };
  }
}


export type ExtractActionState = {
  status: "success" | "error" | "idle";
  message: string;
  data: ExtractHMPIDataFromReportOutput | null;
}

export async function extractHMPIDataAction(reportImageUri: string): Promise<ExtractActionState> {
  if(!reportImageUri) {
      return {
          status: 'error',
          message: 'No image data provided.',
          data: null
      }
  }

  try {
      const result = await extractHMPIDataFromReport({ reportImage: reportImageUri });

      if(!result) {
          throw new Error('The AI model did not return any data.');
      }

      return {
          status: 'success',
          message: 'Data extracted successfully.',
          data: result
      }
  } catch (error) {
      console.error("Error in extractHMPIDataAction:", error);
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
      return {
          status: 'error',
          message: `Failed to extract data: ${errorMessage}`,
          data: null
      }
  }
}

export type RemediationActionState = {
    status: "success" | "error" | "idle";
    message: string;
    data: SuggestRemediationOutput | null;
}

export async function suggestRemediationAction(input: SuggestRemediationInput): Promise<RemediationActionState> {
    try {
        const result = await suggestRemediation(input);

        if(!result) {
            throw new Error('The AI model did not return any remediation advice.');
        }

        return {
            status: 'success',
            message: 'Remediation advice generated successfully.',
            data: result
        }
    } catch (error) {
        console.error("Error in suggestRemediationAction:", error);
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
        return {
            status: 'error',
            message: `Failed to generate advice: ${errorMessage}`,
            data: null
        }
    }
}
