import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import type { GroundwaterSample } from '@/lib/data';
import { Droplets } from 'lucide-react';

type HmpiResultsCardProps = {
  data: GroundwaterSample[];
};

export function HmpiResultsCard({ data }: HmpiResultsCardProps) {

  const getBadgeVariant = (quality: GroundwaterSample['quality']): 'default' | 'secondary' | 'destructive' | 'outline' => {
    switch (quality) {
      case 'Low': return 'default';
      case 'Medium': return 'secondary';
      case 'High': return 'outline';
      case 'Very High': return 'destructive';
      default: return 'outline';
    }
  };

  const getColorClass = (quality: GroundwaterSample['quality']) => {
    switch (quality) {
      case 'Low': return 'text-chart-2';
      case 'Medium': return 'text-chart-4';
      case 'High': return 'text-chart-1';
      case 'Very High': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  }

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Groundwater Quality</CardTitle>
        <CardDescription>Categorization based on Heavy Metal Pollution Index (HMPI).</CardDescription>
      </CardHeader>
      <CardContent>
        {data.length > 0 ? (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Location</TableHead>
                  <TableHead className="text-right">HMPI</TableHead>
                  <TableHead className="text-center">Quality</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((sample) => (
                  <TableRow key={sample.id}>
                    <TableCell className="font-medium">{sample.location}</TableCell>
                    <TableCell className="text-right font-mono">{sample.hmpi.toFixed(2)}</TableCell>
                    <TableCell className="text-center">
                       <Badge variant={getBadgeVariant(sample.quality)} className="w-24 justify-center">
                         <div className={`h-2 w-2 rounded-full mr-2 ${getColorClass(sample.quality)} bg-current`} />
                         <span>{sample.quality}</span>
                       </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="text-center py-12 text-muted-foreground bg-background rounded-lg border-2 border-dashed">
            <Droplets className="mx-auto h-12 w-12" />
            <p className="mt-4">Import data to see HMPI results.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
