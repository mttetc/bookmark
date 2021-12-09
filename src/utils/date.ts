
type Epoch = 'an' | 'mois' | 'jour' | 'heure' | 'minute' | 'seconde'

type EpochsProps = [Epoch, number]

const epochs: EpochsProps[] = [
    ['an', 31536000],
    ['mois', 2592000],
    ['jour', 86400],
    ['heure', 3600],
    ['minute', 60],
    ['seconde', 1]
];

const formatHour = (duration: number): string => {
    const date = new Date(0);
    date.setSeconds(duration);
    const timeString = date.toISOString().substr(11, 8);

    return `le ${timeString}`
}

const formatDate = (date: Date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;
    const nextDate = new Date(date);

    return nextDate.toLocaleDateString("fr-FR", options)
}


const getDuration = (timeAgoInSeconds: number): { interval: number, epoch: Epoch } | undefined => {
    for (let [name, seconds] of epochs) {
        const interval = Math.floor(timeAgoInSeconds / seconds);
        if (interval >= 1) {
            return {
                interval: interval,
                epoch: name
            };
        }
    }
};

const timeAgo = (date: Date) => {
    const timeAgoInSeconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);
    const duration = getDuration(timeAgoInSeconds);
    const suffix = duration?.interval === 1 ? '' : 's';

    return `Il y a ${duration?.interval} ${duration?.epoch}${suffix}`;
};

export const _date = {
    formatHour,
    formatDate,
    timeAgo
}