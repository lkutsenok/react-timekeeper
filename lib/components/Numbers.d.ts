/// <reference types="react" />
import { MODE } from '../helpers/constants';
interface MinuteProps {
    anim: {
        opacity: any;
        translate: any;
        translateInner: any;
    };
    activeMinute: Number;
}
interface HourProps extends MinuteProps {
    mode: MODE.HOURS_12 | MODE.HOURS_24;
    hour24Mode: boolean;
    activeHour: Number;
}
declare function hours({ anim, mode, hour24Mode, activeHour }: HourProps): JSX.Element;
export declare const HourNumbers: typeof hours;
declare function minutes({ anim, activeMinute }: MinuteProps): JSX.Element;
export declare const MinuteNumbers: typeof minutes;
export {};
