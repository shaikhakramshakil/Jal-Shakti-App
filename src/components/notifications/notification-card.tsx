import { type LucideIcon } from 'lucide-react';

type NotificationCardProps = {
    icon: LucideIcon;
    title: string;
    description: string;
    time: string;
    isNew?: boolean;
};

export function NotificationCard({ icon: Icon, title, description, time, isNew }: NotificationCardProps) {
    return (
        <div className={`flex items-start gap-4 rounded-xl p-4 ${isNew ? 'bg-primary/10 dark:bg-primary/20' : ''}`}>
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${isNew ? 'bg-primary text-white' : 'bg-primary/20 text-primary dark:bg-primary/30'}`}>
                <Icon className="h-6 w-6" />
            </div>
            <div className="flex-grow">
                <p className="font-bold text-card-foreground">{title}</p>
                <p className="text-sm text-muted-foreground">{description}</p>
                <p className="mt-1 text-xs text-muted-foreground/80">{time}</p>
            </div>
        </div>
    );
}
