import { BellRing, Database, Clock } from 'lucide-react';
import { NotificationCard } from './notification-card';

const todayNotifications = [
    {
        icon: BellRing,
        title: 'Pollution Level Change',
        description: 'HMPI at Site A has increased by 15%',
        time: '10:45 AM',
        isNew: true,
    },
    {
        icon: Database,
        title: 'New Data Available',
        description: 'New data added for Site B',
        time: '9:30 AM',
        isNew: false,
    },
];

const yesterdayNotifications = [
    {
        icon: Clock,
        title: 'Analysis Reminder',
        description: 'Reminder: Review analysis for Site C',
        time: 'Yesterday, 3:00 PM',
        isNew: false,
    },
];

export function NotificationList() {
    return (
        <section className="space-y-4">
            <div>
                <h2 className="px-2 pb-2 pt-2 text-sm font-bold uppercase tracking-wider text-muted-foreground">Today</h2>
                <div className="space-y-2">
                    {todayNotifications.map((notification, index) => (
                        <NotificationCard key={index} {...notification} />
                    ))}
                </div>
            </div>
            <div>
                <h2 className="px-2 pb-2 pt-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">Yesterday</h2>
                <div className="space-y-2">
                    {yesterdayNotifications.map((notification, index) => (
                        <NotificationCard key={index} {...notification} />
                    ))}
                </div>
            </div>
        </section>
    );
}
